---
title: React + TypeScript - Navigation
author: Juma Shafara
date: 11-07-2024
description: In this guide, we’ll create a new React project with Vite, TypeScript, Tailwind CSS, and add a basic navigation bar using React components.
keywords:
  [
    Set Up the Project with Vite and TypeScript,
    Install and Configure Tailwind CSS,
    Set Up React Router,
    Create Basic Page Components,
    Create a Reusable Navbar Component,
  ]
categories: ['Reat + TypeScript Series']
---

![Image by DATAIDEA](react-thumbnails.jpg)

In this guide, we’ll create a new React project with Vite, set up TypeScript, integrate Tailwind CSS for styling, and add a basic navigation bar using React components.

## Step 1: Set Up the Project with Vite and TypeScript

First, let’s create our React app using Vite, a fast front-end build tool.

1. Open your terminal and run:

   ```bash
   npm create vite@latest
   ```

2. You’ll be prompted to name your project. Enter a name, such as `react-navigation`.
3. Select **React** as the framework and **TypeScript** as the variant.
4. Navigate into the project folder:

   ```bashs
   cd react-navigation
   ```

5. Install dependencies:

   ```bash
   npm install
   ```

Your project is now set up with Vite and TypeScript!

## Step 2: Install and Configure Tailwind CSS

To add Tailwind CSS for styling:

1. Install Tailwind and its dependencies:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. Configure Tailwind by updating the `tailwind.config.js` file to include your template paths:

   ```js
   // tailwind.config.js
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Add Tailwind’s directives to your CSS file. Open `src/index.css` and replace its content with:

   ```css
   /* src/index.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

With Tailwind configured, you’re ready to style your app!

## Step 3: Set Up React Router

We’ll use `react-router-dom` to create navigation between different pages in our app.

1. Install `react-router-dom`:

   ```bash
   npm install react-router-dom
   ```

2. Wrap the app with `BrowserRouter` in `main.tsx` to enable routing:

   ```js
   // main.tsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   import { BrowserRouter } from "react-router-dom";
   import App from "./App";
   import "./index.css";

   ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
     <React.StrictMode>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </React.StrictMode>
   );
   ```

## Step 4: Create Basic Page Components

In the `src` folder, create a `pages` folder, and inside it, create three files for the pages of our app:

- **Home.tsx**
- **TermsOfService.tsx**
- **PrivacyPolicy.tsx**

Each file will export a simple functional component with a title. Here’s an example for each:

### `Home.tsx`

```js
import React from "react";

const Home: React.FC = () => {
  return <h1>Home Page</h1>;
};

export default Home;
```

### `TermsOfService.tsx`

```js
import React from "react";

const TermsOfService: React.FC = () => {
  return <h1>Terms of Service</h1>;
};

export default TermsOfService;
```

### `PrivacyPolicy.tsx`

```js
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return <h1>Privacy Policy</h1>;
};

export default PrivacyPolicy;
```

## Step 5: Define Routes in `App.tsx`

With the pages ready, we’ll define routes in `App.tsx` to make each page accessible.

1. Import the pages and set up routing using `Routes` and `Route` from `react-router-dom`:

   ```js
   // App.tsx
   import React from "react";
   import { Routes, Route } from "react-router-dom";
   import Home from "./pages/Home";
   import TermsOfService from "./pages/TermsOfService";
   import PrivacyPolicy from "./pages/PrivacyPolicy";

   const App: React.FC = () => {
     return (
       <div>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/terms-of-service" element={<TermsOfService />} />
           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         </Routes>
       </div>
     );
   };

   export default App;
   ```

2. This code enables navigation to:
   - **Home** at `/`
   - **Terms of Service** at `/terms-of-service`
   - **Privacy Policy** at `/privacy-policy`

## Step 6: Create a Reusable Navbar Component

Next, let’s build a reusable navigation bar component for our pages.

1. Inside `src`, create a `components` folder, and add a file called `Navbar.tsx`.
2. In `Navbar.tsx`, create a functional component with links to each page:

   ```js
   // src/components/Navbar.tsx
   import React from "react";
   import { Link } from "react-router-dom";

   const Navbar: React.FC = () => {
     return (
       <nav className="p-4 bg-blue-500 text-white">
         <ul className="flex space-x-4">
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/terms-of-service">Terms of Service</Link>
           </li>
           <li>
             <Link to="/privacy-policy">Privacy Policy</Link>
           </li>
         </ul>
       </nav>
     );
   };

   export default Navbar;
   ```

This code:

- Defines a `Navbar` component with links to each page using the `Link` component from `react-router-dom`.
- Applies Tailwind classes for basic styling.

## Step 7: Integrate the Navbar in `App.tsx`

Finally, we’ll add the `Navbar` component to `App.tsx`:

```js
// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar"; // Import Navbar

const App: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* Use Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
```

This approach makes the `Navbar` reusable and keeps `App.tsx` clean and modular.

## Testing the Setup

Run the app and try navigating between links in the navbar. You should see the page content change without reloading.

```bash
npm run dev
```

## Conclusion

In this guide, we started from scratch to build a React app using Vite, added TypeScript for type safety, styled with Tailwind CSS, and created a basic navigation bar as a reusable component. By creating and organizing components, we’ve built a foundation for scalable, maintainable code in React.

This is just the beginning! In future guides, we’ll explore more advanced features, add functionality, and dive deeper into component design.
