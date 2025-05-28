# React Resume Portfolio

This project is a personal resume portfolio built with **React**. It showcases modular, reusable components for each section of a resume, supports dark/light theme toggling, and is fully responsive.

---

## 🧩 Project Modules & Implementation

This portfolio is broken down into several reusable React components, each with its own CSS Module for scoped styling:

### **Main Components (Modules):**

- **Header**  
  Displays the navigation bar, logo, and a download resume button.  
  *Implemented in `Header.js` with styles in `Header.module.css`.*

- **HomeSection**  
  The hero/introduction section with your name, title, and profile image.  
  *Implemented in `HomeSection.js` with styles in `HomeSection.module.css`.*

- **About**  
  Contains a summary about you and your profile image.  
  *Implemented in `About.js` with styles in `About.module.css`.*

- **Experience**  
  Lists your work experience, each as a card or list item.  
  *Implemented in `Experience.js` with styles in `Experience.module.css`.*

- **Certifications**  
  Displays your certifications.  
  *Implemented in `Certifications.js` with styles in `Certifications.module.css`.*

- **Education**  
  Shows your educational background.  
  *Implemented in `Education.js` with styles in `Education.module.css`.*

- **Skills**  
  Lists your skills, often as badges or a grid.  
  *Implemented in `Skills.js` with styles in `Skills.module.css`.*

- **Contact**  
  Displays your contact information (email, phone, LinkedIn, etc.).  
  *Implemented in `Contact.js` with styles in `Contact.module.css`.*

---

### **How It’s Implemented**

- **Component Structure:**  
  Each section of the resume is a separate React component, making the code modular and easy to maintain.
- **CSS Modules:**  
  Each component has its own `.module.css` file, ensuring styles are scoped locally and do not conflict with other components.
- **Props:**  
  Data (like profile image URL or contact details) is passed from the parent `App.js` to child components using props, making components reusable and dynamic.
- **Dark Mode:**  
  Dark mode is managed globally using state in `App.js` and applied via a class. Each module’s CSS uses the `:global` selector to respond to dark mode.
- **Responsive Design:**  
  Both global CSS and component CSS modules use media queries to ensure the layout is mobile-friendly.

---

## 🚀 Technologies Used

- **React**: Component-based UI library for building the portfolio.
- **CSS Modules**: For modular, component-scoped styling.
- **Global CSS (`index.css`)**: For resets, layout, and responsive breakpoints.
- **React Hooks (`useState`)**: For managing UI state (theme toggling).
- **Responsive Design**: Achieved with CSS media queries for mobile/tablet friendliness.

---

## 🖥️ Features

- **Reusable Components**: Each resume section (Header, Home, About, Experience, Education, Certifications, Skills, Contact) is a separate, reusable React component.
- **Dark/Light Mode**: Toggle between dark and light themes using a button, with styles applied via state and CSS.
- **Responsive Layout**: Layout adapts to different screen sizes using CSS media queries.
- **Download Resume**: Button to download a PDF resume from the public folder.
- **Clean Folder Structure**: Components and their CSS modules are organized for maintainability.

---

## ⚡ Deployment & Design Challenges

- **Dark Mode Styling**: Ensuring consistent dark mode appearance across all components required careful use of the `:global` selector in CSS Modules, since dark mode is toggled via a global class.
- **CSS Modularization**: Migrating from global CSS to CSS Modules involved moving and refactoring styles for each component, and making sure there were no style conflicts.
- **Responsive Design**: Achieving a seamless experience on both desktop and mobile required testing and adjusting breakpoints, especially for layout and font sizes.
- **Component Reusability**: Designing each section as a reusable component meant passing data via props and keeping components decoupled.

---

## ✅ Project Checklist & Implementation Summary

- **Created with:** `create-react-app`
- **Component Structure:**  
  Resume is broken down into 8+ reusable components: `Header`, `HomeSection`, `About`, `Experience`, `Certifications`, `Education`, `Skills`, `Contact`.
- **Folder Organization:**  
  All components and their CSS modules are cleanly organized into folders.
- **Props Usage:**  
  - `profileImage` (App → About): Profile picture URL.
  - `contactInfo` (App → Contact): Object with email, phone, LinkedIn.
  - `profilePicUrl` (App → HomeSection): Profile image for hero section.

  <About profileImage={profilePicUrl} />
  <Contact contactInfo={contactDetails} />
  <HomeSection profilePicUrl={profilePicUrl} />

- **State Management:**  
  - `useState` is used in `App.js` to control dark/light theme toggle.

    const [darkMode, setDarkMode] = useState(false);
  
  <button
    className="theme-toggle"
    onClick={() => setDarkMode(prev => !prev)}
  >
    {darkMode ? "Light Mode" : "Dark Mode"}
  </button>

- **Conditional Rendering:**  
  - Used for toggling dark mode class and button text based on state.

    <div className={`portfolio-bg ${darkMode ? 'dark' : ''}`}>
    {/* ... */}
    <button>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
    </div>
  
- **Dynamic Lists with `.map()`:**  
  - Used in `Experience.js`, `Certifications.js`, and `Skills.js` to render lists from arrays.

    experiences.map(exp => (
    <div key={exp.id}>{exp.title}</div>
  ))
  skills.map(skill => (
    <li key={skill}>{skill}</li>
  ))

- **Styling:**  
  - All section/component styles use CSS Modules for modular, scoped styling.

- **Responsive Layout:**  
  - Mobile-friendly with breakpoints via CSS media queries in `index.css`.

    @media (max-width: 900px) {
    .App { padding: 10px; max-width: 100%; }
    main { padding-top: 60px; }
  }
  @media (max-width: 600px) {
    .App { padding: 4px; max-width: 100%; }
    main { padding-top: 50px; }
    h1 { font-size: 1.5rem; }
  }

- **Resume Content:**  
  - Includes education, skills, experience, and contact information.
- **Deployment:**  
  - Live on Vercel: [ethili-sundaravel.vercel.app](https://ethili-sundaravel.vercel.app/)
- **Version Control:**  
  - Public GitHub repo: [github.com/EthiliSundaravel/react_portfolio](https://github.com/EthiliSundaravel/react_portfolio/)
- **README:**  
  - This file describes technologies used and deployment/design challenges.
- **Navigation:**  
  - Working navigation with smooth scrolling between sections.
- **Custom Domain:**  
  - Uses custom Vercel domain: [ethili-sundaravel.vercel.app](https://ethili-sundaravel.vercel.app/)

---


