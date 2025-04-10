# User Sync - React User Management Application

## Overview

User Sync is a comprehensive React application for user management that provides authentication, pagination, and CRUD operations using the ReqRes API. This modern, responsive web application demonstrates best practices in React development including component architecture, state management, and secure authentication flows.

## Developer

**Anurag Singh** is a Full-Stack Developer passionate about creating efficient and user-friendly web applications. With expertise in the MERN stack and a strong background in software development, Anurag has developed User Sync as a demonstration of modern web development techniques.

Key Developer Highlights:

- 🎓 Computer Science Engineering student at Indian Institute of Information Technology Sonepat
- 💻 Experienced in React, Node.js, and full-stack development
- 🚀 Creator of innovative projects like VocRT and Trekigo
- 🏆 LeetCode problem solver with 450+ DSA questions solved

Connect with Anurag:

- LinkedIn: [Anurag Singh](https://linkedin.com/in/anuragsingh922)
- GitHub: [anuragsingh922](https://github.com/anuragsingh922)
- Personal Website: [Portfolio](https://anuragsingh922.vercel.app/)

## Live Demo

[View Live Demo](https://groupware-orpin.vercel.app/)

## Features

- **Secure Authentication**

  - Email/password login with validation
  - JWT token-based authentication
  - Persistent sessions with local storage
  - Protected routes for authenticated users

- **User Management**

  - View paginated list of users with avatars and details
  - Edit user information (first name, last name, email)
  - Delete users with confirmation dialog
  - Search functionality to filter users

- **Responsive UI**

  - Mobile-first approach with Tailwind CSS
  - Clean, modern interface using shadcn/ui components
  - Smooth animations and transitions
  - Consistent design language throughout the application

- **Technical Implementation**
  - React functional components with hooks
  - Redux Toolkit for global state management
  - React Router for navigation
  - React Query for efficient data fetching
  - TypeScript for type safety

## API Integration

The application integrates with the [ReqRes](https://reqres.in/) API, which provides a realistic simulation of a user management backend. The following endpoints are used:

| Endpoint            | Method | Description                  |
| ------------------- | ------ | ---------------------------- |
| `/api/login`        | POST   | User authentication          |
| `/api/users?page=N` | GET    | Retrieve paginated user list |
| `/api/users/{id}`   | GET    | Get single user details      |
| `/api/users/{id}`   | PUT    | Update user information      |
| `/api/users/{id}`   | DELETE | Remove a user                |

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── landing/        # Landing page components
│   └── ui/             # shadcn/ui components
├── contexts/           # React contexts (auth, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── redux/              # Redux store and slices
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anuragsingh922/groupware.git
   cd groupware
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### Authentication

1. Navigate to the login page
2. Use the following credentials for demo purposes:
   - Email: `eve.holt@reqres.in`
   - Password: `cityslicka`
3. Upon successful login, you'll be redirected to the dashboard

### User Management

1. View users on the dashboard page
2. Use pagination controls to navigate between pages
3. Click on a user card to view detailed information
4. Use the edit button to modify user details
5. Use the delete button to remove a user (with confirmation)
6. Use the search field to filter users by name or email

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run tests (if configured)

### Environment Variables

The application uses the following environment variables:

```env
VITE_API_URL=https://reqres.in/api
# Additional environment variables can be added here
```

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [React Router](https://reactrouter.com/) - Client-side routing
- [React Query](https://tanstack.com/query/latest) - Data fetching and caching
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide Icons](https://lucide.dev/) - Icon library

## Best Practices

- **Component Architecture**: Follows a component-based architecture with reusable UI components
- **State Management**: Uses Redux for global state and React Query for server state
- **Authentication**: Implements secure authentication with JWT tokens and protected routes
- **Error Handling**: Comprehensive error handling for API requests and form validations
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Accessibility**: Focus on keyboard navigation and screen reader support
- **Performance**: Optimized rendering with React best practices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [ReqRes API](https://reqres.in/) for providing a test API
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- All open-source libraries used in this project
