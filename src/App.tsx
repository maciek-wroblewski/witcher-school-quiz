import wolfMedallion from "./assets/medallions/wolf_medallion.png";
import catMedallion from "./assets/medallions/cat_medallion.png";
import griffinMedallion from "./assets/medallions/griffin_medallion.png";
import bearMedallion from "./assets/medallions/bear_medallion.png";
import viperMedallion from "./assets/medallions/viper_medallion.png";
import manticoreMedallion from "./assets/medallions/manticore_medallion.png";

import TraitRadar from "./components/TraitRadar";

import { useState } from "react";
import { questions } from "./data/questions";
import { schools } from "./data/schools";
import { calculateRanking } from "./engine/inference";
import { calculateUserProfile } from "./engine/inference";

const medallions: Record<string, string> = {
  wolf: wolfMedallion,
  cat: catMedallion,
  griffin: griffinMedallion,
  bear: bearMedallion,
  viper: viperMedallion,
  manticore: manticoreMedallion,
};

function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  function handleAnswer(answerIndex: number) {
    const question = questions[currentQuestionIndex];

    setSelectedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [question.id]: answerIndex,
    }));

    if (currentQuestionIndex === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
    }
  }

  function restartQuiz() {
    setStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setFinished(false);
  }

  if (!started) {
    return (
      <main>
        <h1>Discover Your Witcher School</h1>
        <p>
          Answer a series of questions to discover which Witcher
          school best matches your personality.
        </p>
        <button onClick={() => setStarted(true)}>
          Begin the Trial
        </button>
      </main>
    );
  }

  if (finished) {
    const ranking = calculateRanking(selectedAnswers);
    const winner = schools.find(
      (school) => school.id === ranking[0]?.schoolId
    );

    return (
      <main className="result-page">
        <h1>Your Witcher School</h1>


        {winner && (
          <section className="winner">
            <img
              className="winner-medallion"
              src={medallions[winner.id]}
              alt={`${winner.name} medallion`}
            />

            <p className="winner-label">Your destiny has been revealed</p>

            <h2>{winner.name}</h2>

            <div className="winner-divider">✦ ━━━━━ ✦</div>

            <p>{winner.description}</p>

            <p className="winner-score">
              Your compatibility with this school: {ranking[0].score}%
            </p>
          </section>
        )}


        <div className="result-dashboard">
          <section className="trait-section">
            <h2>Your Witcher Profile</h2>

            <p>
              Your answers reveal the traits that define your approach to the Path.
            </p>

            <TraitRadar
              profile={calculateUserProfile(selectedAnswers)}
            />
          </section>

          <section className="ranking-section">
            <h2>Full Ranking</h2>

            <ol>
              {ranking.map((result) => {
                const school = schools.find(
                  (item) => item.id === result.schoolId
                );

                return (
                  <li key={result.schoolId}>
                    {school?.name}: {result.score}%
                  </li>
                );
              })}
            </ol>
          </section>
        </div>


        <button onClick={restartQuiz}>Try Again</button>
      </main>
    );
  }


  const question = questions[currentQuestionIndex];

  return (
    <main>
      <p>
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>

      <h1>{question.text}</h1>

      <div>
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
