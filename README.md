# CXLUS Scorecard System

A modern assessment tool for evaluating clinic patient experience.

## Features

- Interactive assessment questionnaire
- Real-time scoring system
- Detailed feedback and recommendations
- Modern, responsive UI
- Secure data storage

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your database connection string:
```
DATABASE_URL="postgresql://user:password@localhost:5432/cxlus"
```

3. Run database migrations:
```bash
node scripts/apply-migration.js
```

4. Start the development server:
```bash
npm run dev
```

## Assessment Categories

The scorecard evaluates clinics across five key areas:

1. First Impression
   - Initial patient contact and onboarding experience

2. Patient Journey
   - Treatment plan presentation and communication

3. Follow-up Care
   - Post-visit engagement and patient support

4. Reviews & Referrals
   - Feedback collection and referral management

5. Brand Experience
   - Visual identity and brand consistency

## Scoring System

Each category is rated on a scale:

- Poor (1 point)
- Basic (2 points)
- Professional (3 points)
- Excellent (4 points)

Total score is calculated as a percentage of maximum possible points.

## Development

### Testing the API

Run the test script:
```bash
node scripts/test-scorecard-api.js
```

### Database Migrations

To create a new migration:
```bash
npx prisma migrate dev --name your_migration_name
```

To apply migrations in production:
```bash
npx prisma migrate deploy
```

## License

Copyright © 2024 CXLUS. All rights reserved.
