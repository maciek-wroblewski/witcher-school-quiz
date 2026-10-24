import { schools, type TraitId } from "../data/schools";
import { questions } from "../data/questions";

export type SchoolResult = {
    schoolId: string;
    score: number;
    distance: number;
};

export type TraitProfile = Record<TraitId, number>;

const traitIds: TraitId[] = [
    "adaptability",
    "independence",
    "knowledge",
    "endurance",
    "strategy",
    "preparation",
]

export function calculateUserProfile(selectedAnswers: Record<number, number>): TraitProfile {
    const traitScores: TraitProfile = {
        adaptability: 0,
        independence: 0,
        knowledge: 0,
        endurance: 0,
        strategy: 0,
        preparation: 0,
    };

    for (const question of questions) {
        const selectedIndex = selectedAnswers[question.id];

        if (selectedIndex === undefined) {
            continue;
        }

        const answer = question.answers[selectedIndex];

        if (!answer) {
            continue;
        }

        for (const [trait, points] of Object.entries(answer.scores)) {
            if (trait in traitScores && points !==undefined) {
                traitScores[trait as TraitId] += points;
            }
        }
    }

    const maxTraitScores: TraitProfile = {
        adaptability: 0,
        independence: 0,
        knowledge: 0,
        endurance: 0,
        strategy: 0,
        preparation: 0,
    }

    for (const question of questions) {
        for (const trait of traitIds) {
            const maxForQuestion = Math.max(0, ...question.answers.map((answer) => answer.scores[trait] ?? 0));

            maxTraitScores[trait] += maxForQuestion
        }
    }

    const userProfile: TraitProfile = { ...traitScores };

    for (const trait of traitIds) {
        const max = maxTraitScores[trait]

        userProfile[trait] = max > 0 ? 1 + (traitScores[trait] / max) * 4 : 1;
    }

    return userProfile;
}

export function calculateRanking(selectedAnswers: Record<number, number>): SchoolResult[] {
    const userProfile = calculateUserProfile(selectedAnswers);

    return schools.map((school) => {
        let squaredDistance = 0;
    
        for (const trait of traitIds) {
            const difference = userProfile[trait] - school.traits[trait];

            squaredDistance += difference * difference;
        }
        
        const distance = Math.sqrt(squaredDistance);

        return {
            schoolId: school.id,
            distance,
            score: Math.round((1 - distance / (4 * Math.sqrt(traitIds.length))) * 100),
        };
    })

    .sort((a, b) => a.distance - b.distance);
}