# The Wild Oasis Website

The Wild Oasis Website is a modern web application built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Supabase](https://supabase.com). It provides a seamless user experience for managing cabin reservations, user profiles, and more.

## Features

- **Cabin Management**: View, filter, and manage cabin listings.
- **Reservation System**: Book, edit, and delete reservations.
- **User Authentication**: Secure login and profile management using [NextAuth.js](https://next-auth.js.org/).
- **Responsive Design**: Optimized for all devices using Tailwind CSS.
- **Dynamic Routing**: Built with Next.js App Router for a modern navigation experience.

## Project Structure

The project follows a modular structure for scalability and maintainability:

```
app/
  _components/       # Reusable React components
  _lib/              # Utility functions and services
  _styles/           # Global CSS styles
  about/             # About page
  account/           # User account-related pages
  cabins/            # Cabin-related pages
  login/             # Login page
  api/               # API routes for server-side logic
public/              # Static assets (images, icons, etc.)
starter/             # Starter components and pages
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd the-wild-oasis-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Build and Deployment

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for code quality issues.

## Dependencies

- **Next.js**: Framework for server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework.
- **Supabase**: Backend-as-a-service for authentication and database management.
- **Date-fns**: Modern JavaScript date utility library.

## DevDependencies

- **ESLint**: Linter for identifying and fixing code issues.
- **Prettier**: Code formatter.
- **Tailwind CSS Plugins**: Additional utilities for Tailwind CSS.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
