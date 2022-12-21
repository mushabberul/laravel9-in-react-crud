# laravel9-in-react-crud
## Create Laravel Project

composer create-project laravel/laravel laravel-vite-react


Install latest version of react js:

npm install react@latest react-dom@latest


Install React Vite in laravel

npm i @vitejs/plugin-react
if not working then --force

npm i @vitejs/plugin-react --force


Add path vite react plugin in vite.config.js.
Before vite.config.js

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
After vite.config.js

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});


Next, you need add @vite directives welcome.blade.php.

resources/view/welcome.blade.php

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel 9 vite with react</title>

        @viteReactRefresh
        @vite('resources/js/app.jsx')
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>


Create page Folder and add Home.jsx file like resources/js/Page/Home.jsx and rename app.js to app.jsx.

resources/js/app.jsx

import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';        
import Home from './Page/Home';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Home />        
);


resources/js/Page/Home.jsx

export default function Home() {
    const heading = "Laravel 9 Vite  with React JS";
    return <div> {heading}</div>;
}
You need to npm run build or npm run dev command to create asset react file.

npm run dev
and

php artisan serve
