This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


---

## `package.json` notes

- `@mantine/hooks` is a collection of custom React hooks provided by Mantine, a modular UI library. These hooks are designed to simplify common tasks in React development, such as managing state, handling user input, and interacting with browser APIs.

    - `use-disclosure`: managing a boolean state, particularly useful for components like modals or popovers that need to be shown or hidden based on user interactions. It provides methods like `open`, `close`, and `toggle` to easily manage the visibility.
    - `use-local-storage`: allows you to use local storage values as React state. Similar to the `useState` hook but also synchronizes the state with the `local storage`, making it useful for persisting data across browser sessions.
    - `use-debounced-value`: delay the update of a value. It's useful in scenarios like search inputs where you want to limit the number of updates during user typing.
    - `useWindowScroll`: provides access to the scroll position of the window and allows smooth scrolling to specific positions on the page. It's useful for creating scroll-to-top buttons or handling scroll-based animations.
    - `useToggle`: toggle between an array of values. It can be particularly useful for switching themes, toggling states, or any other scenario where you need to cycle through a set of values.
    - `useListState`: methods for managing arrays in state, such as adding, removing, or updating items. Helpful for dynamic lists where items need to be added or removed based on user actions.


- `@mantine/core` is a comprehensive library of over 100 React components that are part of the Mantine framework. This library is designed to provide a wide array of UI components for React applications, making it easier to build visually appealing and functional user interfaces.


- `@svgr/webpack` is a Webpack loader that allows you to import SVG files as React components in your projects. This tool transforms SVGs into fully functional React components, making it easier to use SVGs in your React applications.


- `i18next`, `next-i18next`, and `react-i18next`, are used for internationalization in web applications, allowing you to translate your project into multiple languages


- `date-fns`: comprehensive set of date utility functions, manipulate, format, and work with dates in JavaScript easily. Functions include date formatting, adding or subtracting date intervals, setting date parts (like year, month, day), and comparing dates.

    - eg:
        ```
        import { format } from 'date-fns';
        
        const date = new Date(2023, 2, 8); // March 8, 2023
        const formattedDate = format(date, 'yyyy-MM-dd');
        console.log(formattedDate); // Outputs: 2023-03-08
        ```

- `lodash`: utility library that provides helpful functions to facilitate working with arrays, numbers, objects, strings, etc. Lodash offers functions for common programming tasks like iteration over collections, manipulation of values, and working with arrays (like finding, filtering, mapping, and reducing).

    - eg:
        ```
        import _ from 'lodash';
        
        const numbers = [1, 2, 3, 4, 5];
        const maxNumber = _.max(numbers);
        console.log(maxNumber); // Outputs: 5
        ```

- `swr` is a React hooks library for data fetching. The name `swr` is derived from stale-while-revalidate, a HTTP cache invalidation strategy. It allows components to fetch data and, if the data changes, update in real-time. `swr` offers features like automatic revalidation (refetching), focus tracking, and local mutation. This improves the performance and user experience of web applications.
