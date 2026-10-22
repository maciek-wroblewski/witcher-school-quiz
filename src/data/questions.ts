export type Question = {
    id: number;
    text: string;
    answers: Answer[];
};

export type Answer = {
    text: string;
    scores: Partial<Record<string, number>>;
}

export const questions: Question[] = [
    {
        id: 1,
        text: "How do you approach an unfamiliar monster?",
        answers: [
            {
                text: "I gather information first, but leave room to improvise when the situation changes.",
                scores: {
                    wolf: 3,
                    griffin: 2,
                    manticore: 1,
                    viper: 1,
                }
            },
            {
                text: "I observe the creature's movements and look for a weakness I can exploit quickly.",
                scores: {
                    cat: 3,
                    viper: 2,
                    wolf: 1,
                }
            },
            {
                text: "I identify the creature and determine which techniques are most effective against it.",
                scores: {
                    griffin: 3,
                    manticore: 2,
                    wolf: 1,
                }
            },
            {
                text: "I prepare to withstand a difficult fight, even if I cannot predict exactly how it will unfold.",
                scores: {
                    bear: 3,
                    wolf: 2,
                    manticore: 1,
                }
            },
            {
                text: "I study the creature's behaviour and wait for the perfect opportunity to strike decisively.",
                scores: {
                    viper: 3,
                    cat: 2,
                    griffin: 1,
                }
            },
            {
                text: "I prepare the appropriate potions, oils and bombs for the threats I expect to encounter.",
                scores: {
                    manticore: 3,
                    griffin: 2,
                    viper: 1,
                }
            }
        ]
    },
    {
        id: 2,
        text: "What matters most during a hunt?",
        answers: [
            {
                text: "Adaptability - being able to change tactics when the original plan fails.",
                scores: {
                    wolf: 3,
                    cat: 2,
                    manticore: 1,
                }
            },
            {
                text: "Speed and precision - ending the fight before the enemy can gain the upper hand.",
                scores: {
                    cat: 3,
                    viper: 2,
                    wolf: 1,
                }
            },
            {
                text: "Knowledge and control - understanding the enemy and mastering the tools at my disposal.",
                scores: {
                    griffin: 3,
                    manticore: 2,
                    viper: 1,
                }
            },
            {
                text: "Endurance - being able to withstand whatever the enemy throws at me.",
                scores: {
                    bear: 3,
                    wolf: 2,
                    manticore: 1,
                }
            },
            {
                text: "Timing - recognising the devisive moment and striking without hesitation.",
                scores: {
                    viper: 3,
                    cat: 2,
                    griffin: 1,
                }
            },
            {
                text: "Preparation - ensuring that I have the right equipment and resources for the job.",
                scores: {
                    manticore: 3,
                    griffin: 2,
                    wolf: 1,
                }
            }
        ]
    },
    {
        id: 3,
        text: "Your employer is hiding something. What do you do?",
        answers: [
            {
                text: "Verify the facts and make a practical decision based on what I discover.",
                scores: {
                    wolf: 3,
                    viper: 2,
                    griffin: 1,
                }
            },
            {
                text: "Trust no one blindly, investigate independently and look for hidden motives.",
                scores: {
                    cat: 3,
                    viper: 2,
                    wolf: 1,
                }
            },
            {
                text: "Compare their claims with the evidence and look for logical inconsistencies.",
                scores: {
                    griffin: 3,
                    wolf: 2,
                    viper: 1,
                }
            },
            {
                text: "Determine how much danger the situation presents and make sure I cannot be caught off guard.",
                scores: {
                    bear: 3,
                    manticore: 2,
                    wolf: 1,
                }
            },
            {
                text: "Keep my suspicions to myself and observe what the employer does next.",
                scores: {
                    viper: 3,
                    cat: 2,
                    griffin: 1,
                }
            },
            {
                text: "Evaluate the risks and decide whether the contract is worth its potential cost.",
                scores: {
                    manticore: 3,
                    wolf: 2,
                    viper: 1,
                }
            }
        ]
    },
    {
        id: 4,
        text: "Your plan falls apart, and the situation becomes dangerous. What do you do?",
        answers: [
            {
                text: "Adapt my tactics and make the best use of whatever is available.",
                scores: {
                    wolf: 3,
                    cat: 2,
                    manticore: 1,
                }
            },
            {
                text: "Look for an opening and turn the situation around before the enemy can react.",
                scores: {
                    cat: 3,
                    wolf: 2,
                    viper: 1,
                }
            },
            {
                text: "Stay composed, reassess the situation, and apply what I know.",
                scores: {
                    griffin: 3,
                    wolf: 2,
                    viper: 1,
                }
            },
            {
                text: "Hold my ground and endure the pressure until I can regain the advantage.",
                scores: {
                    bear: 3,
                    wolf: 2,
                    manticore: 1,
                }
            },
            {
                text: "Avoid rash moves and wait for an opportunity to regain control.",
                scores: {
                    viper: 3,
                    griffin: 2,
                    wolf: 1,
                }
            },
            {
                text: "Conserve my resources and find the safest way to survive the encounter.",
                scores: {
                    manticore: 3,
                    bear: 2,
                    viper: 1,
                }
            }
        ]
    },
    {
        id: 5,
        text: "Which kind of knowledge do you value most?",
        answers: [
            {
                text: "Practical knowledge that helps me handle unpredictable situations.",
                scores: {
                    wolf: 3,
                    manticore: 2,
                    griffin: 1,
                }
            },
            {
                text: "Knowledge of people, their weaknesses, and how they think.",
                scores: {
                    cat: 3,
                    viper: 2,
                    wolf: 1,
                }
            },
            {
                text: "History, theory, magic and a systematic understanding of the world.",
                scores: {
                    griffin: 3,
                    manticore: 2,
                    wolf: 1,
                }
            },
            {
                text: "Survival skills, combat experience and knowledge gained through hardship.",
                scores: {
                    bear: 3,
                    wolf: 2,
                    manticore: 1,
                }
            },
            {
                text: "Intelligence that helps me anticipate threats and outmanouevre an opponent.",
                scores: {
                    viper: 3,
                    griffin: 2,
                    cat: 1,
                }
            },
            {
                text: "Alchemy, the properties of substances and the practical use of rare ingredients.",
                scores: {
                    manticore: 3,
                    griffin: 2,
                    wolf: 1,
                }
            }
        ]
    },
    {
        id: 6,
        text: "How do you approach a problem with no obvious solution?",
        answers: [
            {
                text: "Combine different approaches and see what works best in practice.",
                scores: {
                    wolf: 3,
                    griffin: 1,
                    manticore: 1,
                }
            },
            {
                text: "Challenge the assumptions and look for a solution others have overlooked.",
                scores: {
                    cat: 3,
                    wolf: 2,
                    viper: 1,
                }
            },
            {
                text: "Break the problem into parts and analyse it methodically.",
                scores: {
                    griffin: 3,
                    viper: 2,
                    manticore: 1,
                }
            },
            {
                text: "Focus on what matters most and overcome each obstacle through persistence.",
                scores: {
                    bear: 3,
                    wolf: 2,
                    griffin: 1,
                }
            },
            {
                text: "Look for hidden connections and anticipate the consequences of every move.",
                scores: {
                    viper: 3,
                    griffin: 2,
                    cat: 1,
                }
            },
            {
                text: "Assess the resources available and find the most efficient solution.",
                scores: {
                    manticore: 3,
                    wolf: 2,
                    griffin: 1,
                }
            }
        ]
    },
    {
        id: 7,
        text: "How do you approach risks?",
        answers: [
            {
                text: "I accept calculated risks, provided I can adapt if things go wrong.",
                scores: {
                    wolf: 3,
                    viper: 2,
                    cat: 1,
                }
            },
            {
                text: "I am willing to take a bold risk if the potential advantage is worth it.",
                scores: {
                    cat: 3,
                    wolf: 2,
                    bear: 1,
                }
            },
            {
                text: "I prefer to reduce uncertainty through knowledge, discipline and preparation.",
                scores: {
                    griffin: 3,
                    manticore: 2,
                    viper: 1,
                }
            },
            {
                text: "I do not shy away from danger if I believe I can endure its consequences.",
                scores: {
                    bear: 3,
                    wolf: 2,
                    griffin: 1,
                }
            },
            {
                text: "I take risks only when I understand the situation and see a clear path to success.",
                scores: {
                    viper: 3,
                    griffin: 2,
                    manticore: 1,
                }
            },
            {
                text: "I weigh the costs, benefits and resources available before committing.",
                scores: {
                    manticore: 3,
                    griffin: 2,
                    wolf: 1,
                }
            },
        ]
    },
    {
        id: 8,
        text: "Which personal weakness would be most dangerous on the Path?",
        answers: [
            {
                text: "Taking too much responsibility for solving other people's problems.",
                scores: {
                    wolf: 3,
                    bear: 2,
                    griffin: 1,
                }
            },
            {
                text: "Resisting authority even when cooperation might be more effective.",
                scores: {
                    cat: 3,
                    wolf: 1,
                    viper: 1,
                }
            },
            {
                text: "Overanalysing a situation because I want to understand everything.",
                scores: {
                    griffin: 3,
                    viper: 2,
                    manticore: 1,
                }
            },
            {
                text: "Being too stubborn to abandon an approach that is no longer working.",
                scores: {
                    bear: 3,
                    wolf: 2,
                    cat: 1,
                }
            },
            {
                text: "Being overly cautious and finding it difficult to trust others.",
                scores: {
                    viper: 3,
                    cat: 2,
                    griffin: 1,
                }
            },
            {
                text: "Relying too heavily on preparation and established methods.",
                scores: {
                    manticore: 3,
                    griffin: 2,
                    wolf: 1,
                }
            }
        ]
    },
    {
        id: 9,
        text: "Someone tries to provoke you. How do you respond?",
        answers: [
            {
                text: "Decide whether responding is worthwhile and adapt my reaction to the situation.",
                scores: {
                    wolf: 3,
                    griffin: 1,
                    viper: 1,
                }
            },
            {
                text: "Refuse to let them dictate the terms and respond in a way they do not expect.",
                scores: {
                    cat: 3,
                    viper: 2,
                    wolf: 1,
                }
            },
            {
                text: "Remain composed and avoid letting emotions cloud my judgment.",
                scores: {
                    griffin: 3,
                    viper: 2,
                    wolf: 1,
                }
            },
            {
                text: "Stand my ground, especially when someone attempts to intimidate me.",
                scores: {
                    bear: 3,
                    wolf: 2,
                    cat: 1,
                }
            },
            {
                text: "Reveal as little as possible and avoid giving the other person an advantage.",
                scores: {
                    viper: 3,
                    cat: 2,
                    griffin: 1,
                }
            },
            {
                text: "Avoid wasting energy on provocations that offer no practical benefit.",
                scores: {
                    manticore: 3,
                    wolf: 2,
                    griffin: 1,
                }
            }
        ]
    },
    {
        id: 10,
        text: "You discover that a monster is intelligent and capable of negotiating. What do you do?",
        answers: [
            {
                text: "I try to understand its motives and look for a solution that avoids unnecessary bloodshed.",
                scores: {
                    wolf: 3,
                    griffin: 2,
                    viper: 1,
                }
            },
            {
                text: "I keep my guard up and look for a way to turn the negotiation to my advantage.",
                scores: {
                    cat: 3,
                    viper: 2,
                    wolf: 1,
                }
            },
            {
                text: "I seek to understand its nature, reasoning and whether coexistence is possible.",
                scores: {
                    griffin: 3,
                    wolf: 2,
                    manticore: 1,
                }
            },
            {
                text: "I remain cautious and make sure I can defend myself if the negotiations turn hostile.",
                scores: {
                    bear: 3,
                    wolf: 2,
                    viper: 1,
                }
            },
            {
                text: "I listen carefully, conceal my intentions and assess whether its words hide a threat.",
                scores: {
                    viper: 3,
                    cat: 2,
                    griffin: 1,
                }
            },
            {
                text: "I assess the potential consequences and decide whether dealing with it is worth the risk.",
                scores: {
                    manticore: 3,
                    griffin: 2,
                    wolf: 1,
                }
            }
        ]
    }
]