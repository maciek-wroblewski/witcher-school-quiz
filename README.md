# Witcher School Quiz

An interactive personality quiz inspired by The Witcher universe.

Discover which Witcher School best matches your personality!

## Features

- **Personality quiz** - answer 10 questions to discover your Witcher School.
- **Six Witcher Schools** - Wolf, Cat, Griffin, Bear, Viper, and Manticore.
- **Personality analysis** - results are calculated based on six personality traits.
- **Compatibility ranking** - see how closely your profile matches each school.
- **Radar chart** - visualize your personality profile.
- **Bilingual interface** - switch between English and Polish.
- **Fantasy-inspired UI** - a dark, parchment-themed interface inspired by The Witcher universe.

## Tech Stack

- React
- TypeScript
- Vite
- i18next
- Chart.js

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/maciek-wroblewski/witcher-school-quiz.git
   ```

2. Navigate to the project directory:

   ```bash
   cd witcher-school-quiz
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Production Build

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## How It Works

Each answer contributes points to six personality traits:

- Adaptability
- Independence
- Knowledge
- Endurance
- Strategy
- Preparation

The application calculates a normalized personality profile and compares it with the predefined profiles of the six Witcher Schools. Schools are ranked by the distance between the user's profile and each school's profile.

The school with the smallest distance is the closest match.

## Languages

- English
- Polish

## Disclaimer

This is an unofficial fan-made project inspired by *The Witcher* universe. It is not affiliated with or endorsed by CD PROJEKT RED. All related trademarks and intellectual property belong to their respective owners.
