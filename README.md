# React boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using [digitalwing.co](https://digitalwing.co) usual project architecture.

![Digital Wing logo](https://digitalwing.co/public/dw-github.jpg)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Directory structure

Project has default [CRA](https://github.com/facebook/create-react-app) structure after running `eject` script. Main difference is in `src` folder, which structure will be described below more detailed.

### Overview

```
src/
├─ assets/
│  ├─ ...
│  └─ main.scss
├─ components/
│  ├─ blocks
│  │  ├─ ComplexComponent
│  │  │  ├─ index.js
│  │  │  ├─ SomeChildComponent.js
│  │  │  └─ style.module.scss
│  ├─ buttons
│  │  ├─ BasicButton
│  │  │  ├─ index.js
│  │  │  └─ style.module.scss
│  ├─ forms
│  └─ ...
├─ consts/
│  ├─ someHelper.js
│  ├─ ...
│  └─ index.js
├─ helpers/
│  └─ index.js
├─ hooks/
│  ├─ api/
│  │  ├─ useSomeApi.js
│  │  ├─ ...
│  │  └─ index.js
│  └─ ...
├─ middlewares/
├─ queries/
│  ├─ someService/
│  │  ├─ getSomething.js
│  │  ├─ postSomething.js
│  │  ├─ ...
│  │  └─ index.js
│  └─ ...
├─ reducers/
├─ schemas/
├─ screens/
├─ selectors/
├─ validators/
├─ App.js
├─ configureStore.js
└─ index.js
```

### src/assets/

Directory where all assets must be placed. Usually has _fonts_ and _img_ subdirectories. Also here are located all global scss files, including _main.scss_ (webpack styles entrypoint) and different _extend_ files (keyframes, fonts, variables, etc.). Extend files names must begin from _.

### src/components

Directory with all React components. Has many subdirectories (blocks, buttons, forms, modals, etc.).

#### src/components/blocks

Example of subdirectory in components. Can have more subdirectories (e.g. components/blocks/auth - here must be all specific auth blocks placed).

#### src/components/blocks/Component

Directory with any React component. Every directory has _index.js_ file with logic and _style.module.scss_ file with styles. Can have _ChildComponent.js_ files, if main component is complex and child components aren't reused somewhere in project.

### src/consts

Directory with project constants. Has _index.js_ file with list of consts, which must be exported as single object. Can have more files for complex consts (e.g. long arrays/objects), but they still should be exported in index file.

### src/consts/endpoints

File for api endpoints. All endpoints are created as functions which return strings and can get url parts or query params as arguments.

### src/consts/routes

File for all routes in project. They are created as functions, which return route strings. Can get arguments, e.g. for routes with id's.

### src/helpers

Directory with helper functions. There should be all functions placed, which are reused/can be reused in project. Every helper has single js file (e.g. _someHelper.js_). All helpers should be exported in _index.js_ file.

### src/hooks

Directory with React hooks. Every hook has single js file (e.g. _someHook.js_). All hooks should be exported in _index.js_ file.

#### src/hooks/api

Subdirectory with api hooks. Api hook is a pattern for building api interactions. From such a hook developer can get:
* Action: query to server. Actions are made from [redux-query](https://github.com/amplitude/redux-query) query configs (more info in **queries** paragraph). 
* Different info about query, such as _isFetching_, _isFinished_, _lastUpdated_, _queryCount_.
* Query result from redux store, which came from server after query. Example: query _getUser_ gives us as result user entity, which should be available in _useUserApi_ hook in field _user_.

### src/middlewares

Directory with Redux middlewares. Every middleware has single js file (e.g. _someMiddleware.js_). All middlewares should be exported in _index.js_ file.

### src/queries

Directory with configs for api queries. All query config files are in subdirectories by resource they get (e.g. user) or by project global sections (e.g. settings). Subdirectory has many query config files, which names starts with query type (e.g. _getUser.js_). All query config files by subdirectory should be exported in _index.js_ file. Config documentation can be found in [redux-query](https://github.com/amplitude/redux-query) library documentation.

Query config file in this project architecture is more than just config - it is a function, which gets arguments and makes action (e.g. _requestAsync_). All action types can be also found in redux-query documentation.

In project we are using fork of redux-query - [redux-query-immutable](https://github.com/DigWing/redux-query-immutable). First of all, it makes redux immutable (based on [immutable.js](https://immutable-js.github.io/immutable-js/docs/#/)). Second - it provides more custom actions. In addition to redux-query basic [_updateEntities_](https://amplitude.github.io/redux-query/docs/redux-actions#updateentities) actions it provides _updateResults_ action to handle normalized data (based on [normalizr](https://github.com/paularmstrong/normalizr)). Also query config has fields _transformResult_ and _updateResult_, where normalized data keys is sent. Basic entities reducer is used for normalizr entities, results reducer for all other application data.

### src/reducers

Directory with Redux reducers.

### src/schemas

Directory with normalizr schemas. Every schema has single js file (e.g. _users.js_). Every schema should export _schema_ and _schemasArray_. Key should be similar as filename. All schemas should be exported in _index.js_ file.

### src/screens

Directory with all screens in project. Every subdirectory is either single screen, or group of strings with wrapper, with handles all routes of group and has visual wrapper, if screen group needs it. Every single screen is in directory and most of the time also has _style.module.scss_ file.

### src/selectors

Directory with selectors, made by [reselect](https://github.com/reduxjs/reselect).

### src/validators (_optional, if redux-form is used in project_)

Directory with validators for [redux-form](https://redux-form.com/8.1.0/docs/api/reduxform.md/).

### src/App.js

Main file with all global routes and other stuff.

### src/configureStore.js

File with Redux configuration. Exporting Redux _store_ and React Router _history_.

### src/index.js

Project entrypoint.
