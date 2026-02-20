# Tattoo Hut Website

A modern tattoo shop website built with React, Express, and SQLite.

## Features

- Modern responsive design
- Artist portfolio galleries
- Booking system
- Contact forms
- Service information

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **Database**: SQLite with Drizzle ORM
- **UI Components**: Radix UI primitives with shadcn/ui

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Initialize the database:
   ```bash
   npm run db:init
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Render Deployment

This project is configured for easy deployment on Render:

1. Connect your GitHub repository to Render
2. The `render.yaml` file will automatically configure the deployment
3. Set the following environment variables in Render:
   - `NODE_ENV=production`
   - `DATABASE_URL=file:./production.db`

### Manual Build

To build for production:

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:init` - Initialize database (generate + push)

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom hooks
│   │   └── lib/        # Utilities
│   └── public/     # Static assets
├── server/         # Express backend
├── shared/         # Shared types and schemas
├── migrations/     # Database migrations
└── script/         # Build scripts
```

## License

MIT# Tatto-artist
