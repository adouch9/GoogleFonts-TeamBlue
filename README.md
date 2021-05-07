# Google Fonts Widget

## Features

- project set up using `Create React App` and using `React Hooks API` (_useState_, _useEffect_, _useContext_)
- fonts fetched from _API Google Fonts_ with `API key` and automatically loaded with `react-google-font-loader`
- modular components styled with `Bootstrap 5`
- doc about context and context.provider : https://fr.reactjs.org/docs/context.html#contextprovider

## Project Structure

```bash

public
├── img
│   ├── All Img ....
├── favicon.ico
├── index.html
├── manifest.json
├── robots.txt
│
│
src
├── App.js
├── components
│   ├── Header.js
│   ├── Content.js
│   ├── Footer.js
│   ├── fonts
│   │   ├── Font.js
│   │   ├── PopularFonts.js
│   │   ├── RecentFonts.js
│   │   └── TrendingFonts.js
│   └── selection
│       ├── FontSize.js
│       ├── SelectFont.js
│       └── Text.js
├── context
│   └── Context.js
└── pages
│    └── Home.js
└── index.js
```

## Install

### Install dependencies:

```zsh
% yarn install
```

## Run the app in the development mode

```zsh
% yarn start
```
