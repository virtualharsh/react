# REACT
> react is a library that is used to easily organize components of website. entry point of any react app is package.json file

## Creating React Project
``` 
> npm create vite
> npm install : This installs all dependencies
> npm run dev : Starts a server and executes index.html

```

## After the project is made
> In react index.html is loaded and script which is generally named main.js(x) is executed which is linked in index.html

> This main.jsx file creates components of page dynamically using App.jsx and appends in main/root division of HTML file.

> Whatever components are there the **first letter of the function must have to be Capitalized also it should be exported to other files and the file name should be same as the function name.**

## Using variables in JSX (Evaluated Expressions)

### Using global variable
```
const username = "Harsh"
function App() {
    return (
        <>
            <h1>Hello world {username}</h1>
        </>
    )
}
```

### Using local function variable
```
function App() {
    const username = "Harsh"
    return (
        <>
            <h1>Hello world {username}</h1>
        </>
    )
}
```

# Adding Tailwindcss
```
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p
```

### tailwind.config.js

```
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

### index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### main.js
```
import "./index.css";
```
