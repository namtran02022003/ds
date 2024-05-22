# Project's name

Clientapp

## Description

## Requirements

- [Nodejs = 18.16.0](https://nodejs.org/en/blog/release/v18.16.0)
- [Reactjs = 18.2.0](https://legacy.reactjs.org/versions/)
- [npm = 9.8.1](https://www.npmjs.com/package/npm/v/9.8.1)

## Installation

### Clone repo

```bash
# clone the repo
$ git clone https://gitlab.com/dailylanguagespractice/clientapp.git

# go into app's directory
$ cd clientapp

# install app's dependencies
$ npm install
```

## Usage

<Command use in application>

| period      | command        | description                        |
| ----------- | -------------- | ---------------------------------- |
| development | `yarn install` | Install all necessary dependencies |
| development | `yarn dev`     | Start application for development  |
| development | `yarn build`   | Build the project for production   |

## Project structure

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```sh
clientapp/
├── public/
│   ├── fonts/ # Fonts for application
│   ├── imgs/ # images for application
├── src/
│   ├── assets/ # Contains static resources like icons, CSS files and other static documents.
│   ├── components/ # The common components
│   ├── constans/ # Common constants, enums
│   ├── hoc/ # Contains higher-order components
│   ├── hooks/ # Custom hooks
│   ├── layouts/ # Common layouts
│   ├── models/ # Common interfaces, types
│   ├── pages/ #  Contains the main pages of the application
│   ├── redux/ # Redux with root store
│   ├── routes/ # Routes
│   ├── services/ # API services
│   ├── settings/ # Contains configuration settings for the application
│   ├── types/
│   ├── utils/ # Contains utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── index.html
├── ...
├── package.json
└── ...
```
