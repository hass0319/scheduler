# Interview Scheduler

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

Inteview Schedular is a user-friendly, single-page application. It allows the user to book interviews with interviewers from 12pm to 5pm daily. A user can add, edit, and delete an appointment with any of the available interviewers. Dummy Data is coming from an API that the app makes put and delete requests to. A user can choose any day of the week to update their appointments.

Inteview Schedular has it's mock data from a [scheduler api](https://github.com/hass0319/scheduler-api).

The side-bar holds the days of the week with a dynamic counter to show how many interview spots are available in that day. Any day can be clicked to be accessed

## Demo Media
### ***Main Page***
!["Main Page"](https://github.com/hass0319/scheduler/blob/master/docs/mainPage.png)

### ***CREATING / EDITING a new appointment***
!["CREATING / EDITING a new appointment"](https://github.com/hass0319/scheduler/blob/master/docs/editForm.png)

### ***Deleting an existing appointment***
!["Deleting an existing appointment"](https://github.com/hass0319/scheduler/blob/master/docs/deleteForm.png)

## Future Goals

Some useful features too have in the future is to have a login/logout feature and allow a user to dynamically add more interviewers

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Cypress

```sh
npm run cypress
```

## Dependancies
    "axios": "^0.26.1",
    "classnames": "^2.2.6",
    "eslint": "^5.16.0",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.0.0",
    "sass": "^1.49.9"
