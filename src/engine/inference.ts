import { schools } from "../data/schools";
import { questions } from "../data/questions";

export type SchoolResult = {
    schoolId: string;
    score: number;
};

export function calculateRanking(selectedAnswers: Record<number, number>): SchoolResult[] {
    const scores: Record<string, number> = {}

    for (const school of schools) {
        scores[school.id] = 0;
    }

    for (const question of questions) {
        const selectedIndex = selectedAnswers[question.id];

        if (selectedIndex === undefined) {
            continue;
        }

        const answer = question.answers[selectedIndex];

        if (!answer) {
            continue;
        }

        for (const [schoolId, points] of Object.entries(answer.scores)) {
            if (points !==undefined && scores[schoolId] !== undefined) {
                scores[schoolId] += points;
            }
        }
    }

    return schools.map((school) => ({
        schoolId: school.id, 
        score: scores[school.id],
    }))
    .sort((a, b) => b.score - a.score);
}