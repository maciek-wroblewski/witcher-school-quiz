import gbFlag from "./assets/flags/gb.svg";
import plFlag from "./assets/flags/pl.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import wolfMedallion from "./assets/medallions/wolf_medallion.png";
import catMedallion from "./assets/medallions/cat_medallion.png";
import griffinMedallion from "./assets/medallions/griffin_medallion.png";
import bearMedallion from "./assets/medallions/bear_medallion.png";
import viperMedallion from "./assets/medallions/viper_medallion.png";
import manticoreMedallion from "./assets/medallions/manticore_medallion.png";

import TraitRadar from "./components/TraitRadar";

import { questions } from "./data/questions";
import { schools } from "./data/schools";
import {
  calculateRanking,
  calculateUserProfile,
} from "./engine/inference";

const medallions: Record<string, string> = {
  wolf: wolfMedallion,
  cat: catMedallion,
  griffin: griffinMedallion,
  bear: bearMedallion,
  viper: viperMedallion,
  manticore: manticoreMedallion,
};

function DisclaimerFooter() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <p>{t("app.disclaimer")}</p>
      <p>{t("app.disclaimerRights")}</p>
    </footer>
  );
}


function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ?? i18n.language ?? "en").startsWith("pl") ? "pl" : "en";

  return (
    <div className="language-switcher" aria-label="Choose language">
      <button
        className={currentLanguage === "en" ? "active" : ""}
        onClick={() => i18n.changeLanguage("en")}
        aria-pressed={currentLanguage === "en"}
      >
        <img src={gbFlag} alt="" />
        <span>EN</span>
      </button>

      <span className="language-separator">|</span>

      <button
        className={currentLanguage === "pl" ? "active" : ""}
        onClick={() => i18n.changeLanguage("pl")}
        aria-pressed={currentLanguage === "pl"}
      >
        <img src={plFlag} alt="" />
        <span>PL</span>
      </button>
    </div>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] =
    useState<Record<number, number>>({});
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
      <>
      <LanguageSwitcher />
        <main>
          <h1>{t("app.title")}</h1>

          <p>{t("app.intro")}</p>

          <button onClick={() => setStarted(true)}>
            {t("app.begin")}
          </button>

          <DisclaimerFooter />
        </main>
      </>
    );
  }

  if (finished) {
    const ranking = calculateRanking(selectedAnswers);

    const winner = schools.find(
      (school) => school.id === ranking[0]?.schoolId
    );

    return (
      <>
      <LanguageSwitcher />
        <main className="result-page">
          <h1>{t("app.resultTitle")}</h1>

          {winner && (
            <section className="winner">
              <img
                className="winner-medallion"
                src={medallions[winner.id]}
                alt={t("app.medallionAlt", {
                  school: t(`schools.${winner.id}.name`),
                })}
              />

              <p className="winner-label">
                {t("app.destiny")}
              </p>

              <h2>{t(`schools.${winner.id}.name`)}</h2>

              <div className="winner-divider">✦ ━━━━━ ✦</div>

              <p>{t(`schools.${winner.id}.description`)}</p>

              <p className="winner-score">
                {t("app.compatibility", {
                  score: ranking[0].score,
                })}
              </p>
            </section>
          )}

          <div className="result-dashboard">
            <section className="trait-section">
              <h2>{t("app.profileTitle")}</h2>

              <p>{t("app.profileDescription")}</p>

              <TraitRadar
                profile={calculateUserProfile(selectedAnswers)}
              />
            </section>

            <section className="ranking-section">
              <h2>{t("app.ranking")}</h2>

              <ol>
                {ranking.map((result) => (
                  <li key={result.schoolId}>
                    {t(`schools.${result.schoolId}.name`)}:{" "}
                    {result.score}%
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <button onClick={restartQuiz}>
            {t("app.tryAgain")}
          </button>

          <DisclaimerFooter />
        </main>
      </>
    );
  }

  const question = questions[currentQuestionIndex];

  return (
    <>
    <LanguageSwitcher />
      <main>
        <p>
          {t("app.question", {
            current: currentQuestionIndex + 1,
            total: questions.length,
          })}
        </p>

        <h1>{t(`questions.${question.id}.text`)}</h1>

        <div>
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
            >
              {t(`questions.${question.id}.answers.${index}`)}
            </button>
          ))}
        </div>

        <DisclaimerFooter />
      </main>
    </>
  );
}

export default App;
