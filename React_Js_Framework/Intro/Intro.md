## 1. What is React?
React is a **JavaScript-based library** (developed by **Facebook/Meta** in the mid-2010s) that quickly became popular among developers.  

It was created to:
- Avoid unnecessary DOM manipulation.  
- Make the development process more efficient.  

Key points:
- React usually works on **SPA (Single Page Applications)**.  
- It follows a **component-based architecture**.  

### What is Reconciliation?
Reconciliation is the process React uses to **update the DOM efficiently** when the state of a component changes.

---

## 2. Framework vs Library
- **Framework** → A collection of libraries & tools used to build web applications.  
- **Library** → A collection of functions & classes that can be used in applications.  

---

## 3. What is JSX?
**JSX** is a **syntax extension for JavaScript** that allows writing **HTML-like code** inside JavaScript.
JavaScript and XML is JSX , here there are user defined tags.
---

## 4. What is a Component?
A **component** is a **function (or class)** that returns UI elements (HTML-like code in JSX).

---

## 5. What is State?
A **state** is a **variable that holds data** which can change over time inside a component.

---

## 6. What are Props?
**Props (properties)** are **variables passed to components** to make them dynamic and reusable.

---

## 7. What is Lifecycle?
A **lifecycle** refers to methods or functions that are called at different stages of a component:
- **Mounting** (created)  
- **Updating** (updated)  
- **Unmounting** (destroyed)  

---

## 8. What is Virtual DOM?
The **Virtual DOM** is an in-memory representation of the **actual DOM**, allowing React to update only the necessary parts efficiently.

---

## 9. What is a Hook?
A **Hook** is a special React function that allows you to:
- Use **state**  
- Use **lifecycle methods**  
- Access other features inside functional components  

Example: `useState`, `useEffect`, `useContext`.

---

## 10. What is Context?
**Context** provides a way to **pass data through the component tree** without having to pass props manually at every level.

---

## 11. What is a Router?
A **router** is used to **navigate between pages** in a web application (e.g., React Router).

---

## 12. What is a Store?
A **store** is a centralized way to **manage state** in larger applications (e.g., Redux, Zustand).

---

## 13. What is Next.js? How is it different from React?
**Next.js** is a **framework built on top of React**, providing:
- **Server-Side Rendering (SSR)**  
- **Static Site Generation (SSG)**  
- **Better SEO & performance optimizations**  
- **File-based routing**  

👉 Use **Next.js** when building SEO-friendly, high-performance apps (e.g., blogs, e-commerce).  
👉 Use **React** alone when building UI-focused apps where SEO is not critical.

---

## Other Frameworks
Apart from React, other popular frameworks/libraries include:
- **Angular**  
- **Vue.js**  



## 14. What is Node.js and Why is it Needed?

### What is Node.js?
- **Node.js** is a **runtime environment** that allows you to run **JavaScript outside the browser**.  
- It uses **Google’s V8 JavaScript Engine** (the same engine inside Chrome).  
- Released in **2009** by **Ryan Dahl**.  

With Node.js, developers can use JavaScript for **backend (server-side) programming**, not just the frontend.

### Why is Node.js Needed?
1. **Run JavaScript Everywhere** – same language for frontend & backend.  
2. **Non-blocking & Asynchronous** – handles many requests at once, great for real-time apps.  
3. **Scalable Applications** – lightweight and efficient (used by Netflix, Uber, etc.).  
4. **npm Ecosystem** – world’s largest collection of open-source libraries.  
5. **Fast Development** – teams can move quickly since they already know JavaScript.  

### Example Use Cases
- Web servers & APIs (Express.js, Nest.js)  
- Real-time apps (chat, games, streaming)  
- Microservices  
- Server-side rendering with React/Next.js  
- Command-line tools  
