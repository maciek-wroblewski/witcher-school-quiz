export type School = {
    id: string;
    name: string;
    description: string;
    traits: string[];
};

export const schools: School[] = [
    {
        id: "wolf",
        name: "School of the Wolf",
        description: "Balanced, resilient and highly versatile warriors, mixing classic, precise swordplay with magic and alchemy rather than relying on heavy armour or brute force. Witchers from this school value sound judgment and practical experience. They understand that surviving the Path requires more than strength alone.",
        traits: ["versatility", "pragmatism", "adaptability"],
    },
    {
        id: "cat",
        name: "School of the Cat",
        description: "The School of the Cat is associated with speed, precision, independence and an unconventional approach to combat. Its witchers favour agility and are willing to exploit weaknesses others might overlook. The Cat's school is not for those who need clear rules, it rewards cunning and the ability to act decisively.",
        traits: ["cunning", "precision", "independence"],
    },
    {
        id: "griffin",
        name: "School of the Griffin",
        description: "The School of the Griffin places great emphasis on discipline, knowledge and the mastery of Signs. Witchers from this school favour a methodical approach. They value control over recklessness, proving that magic can be as useful as sword mastery.",
        traits: ["discipline", "knowledge", "mastery"],
    },
    {
        id: "bear",
        name: "School of the Bear",
        description: "The School of the Bear is associated with brute strength, endurance and the ability to withstand punishment that would break lesser fighters. Its witchers favour a direct, uncompromising approach, relying on heavy armour and the determination to outlast their enemies.",
        traits: ["endurance", "strength", "resilience"],
    },
    {
        id: "viper",
        name: "School of the Viper",
        description: "The School of the Viper favours patience, precision, and a calculated approach to danger. Its witchers rely on swift, lethal strikes and careful preparation. They understand that information can be as valuable as steel, and that the best victory is often secured before the enemy realises a battle has begun.",
        traits: ["strategy", "patience", "caution"],
    },
    {
        id: "manticore",
        name: "School of the Manticore",
        description: "The School of the Manticore is associated with alchemical knowledge, careful preparation and survival in hostile conditions. Its witchers understand the importance of managing their resources and making every potion or blade count. Rather than relying solely on instinct or raw ability, they approach the Path as a discipline that rewards experience and foresight.",
        traits: ["alchemy", "preparation", "resourcefulness"],
    },
];