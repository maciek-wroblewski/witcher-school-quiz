import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";
import type { TraitProfile } from "../engine/inference";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

type TraitRadarProps = {
    profile: TraitProfile;
};

const traitLabels: Record<keyof TraitProfile, string> = {
    adaptability: "Adaptability",
    independence: "Independence",
    knowledge: "Knowledge",
    endurance: "Endurance",
    strategy: "Strategy",
    preparation: "Preparation",
};

export default function TraitRadar({ profile }: TraitRadarProps) {
    const data = {
        labels: Object.keys(traitLabels).map(
            (trait) => traitLabels[trait as keyof TraitProfile]
        ),
        datasets: [
            {
                label: "Your Witcher profile",
                data: Object.keys(traitLabels).map(
                    (trait) => profile[trait as keyof TraitProfile]
                ),
                backgroundColor: "rgba(143, 94, 43, 0.22)",
                borderColor: "#93652e",
                borderWidth: 2,
                pointBackgroundColor: "#93652e",
                pointBorderColor: "#f4d4ad",
                pointRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 4,
        },
        scales: {
            r: {
                min: 1,
                max: 5,
                ticks: {
                    stepSize: 1,
                    color: "#785333",
                    backdropColor: "rgba(239, 220, 180, 0.85)",
                    font: {
                        family: "Cinzel, serif",
                        size: 11,
                    },
                },
                grid: {
                    color: "rgba(105, 72, 39, 0.35)",
                    lineWidth: 1.2,
                },
                angleLines: {
                    color: "rgba(105, 72, 39, 0.4)",
                    lineWidth: 1.2,
                },
                pointLabels: {
                    color: "#59391f",
                    padding: 8,
                    font: {
                        family: "Cinzel, serif",
                        size: 11,
                        weight: "bold" as const,
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="trait-radar">
            <Radar data={data} options={options} />
        </div>
    );
}
