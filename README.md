# CannaHire

## Overview 
This application serves as a Job Board for the Cannabis Industry. CannaHire is built using React. It utilizes MySQL, Bootstrap, Node & Express Servers and API calls to our CannaHire database.  It is built following the MVC design pattern and deployed to Heroku and JawsDB.

* CannaHire is a job posting board that lets users to post jobs, apply to jobs and learn about the Cannabis Industry.

* This app will store user information using MySQL. Users are authenticated using Passport.

The following NPM Packages are installed to run this app:

* [express](https://www.npmjs.com/package/express)
* [create-react-app](https://www.npmjs.com/package/create-react-app)
* [axios](https://www.npmjs.com/package/axios)
* [newsapi](https://www.npmjs.com/package/newsapi)
* [passport](https://www.npmjs.com/package/passport)
* [should](https://www.npmjs.com/package/should)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

### CannaHire Site Walkthrough
Upon the page loading, the user has the options: Register, Login, Find A Job & Post A Job.  The user can register as a Job Seeker or an Employer.  Once the user is authenticated through Passport, they are then brought to the user Dashboard. The user can also utilize our Cannabis 101 feature to learn about current events, hiring trends, laws and legislation in regards to this growing Industry.

## Applicant View
The Job Seeker dashboard has the options: Search Jobs, Jobs You've Applied To, Cannabis 101, Inbox, Settings & Logout. 

## Employer View
The Company Dashboard has the options: Applicants, Inbox, Post A Job, Your Jobs, Cannabis 101, Settings & Logout. The jobs are posted by companies or brought up in a search through our CannaHire Database. We chose to represent every state that Cannabis is currently legal in for our search parameters. We also have entry level, mid level and senior level positions represented. 

## Future Goals for CannaHire
We will be integrating a chat feature for our application that will connect companies to applicants in real-time. We plan on further fine tuning our css, routes, api calls and settings feature to make this a very easy to navigate application that is fully customizable for the user. 

## Screenshots of Site

### Example of CannaHire Login Page 

![Example of Login Page for CannaHire Site](./public/images/sign-in-page.png)

### Example of CannaHire User Dashboard 

![Example of User Dashboard for CannaHire Site](./public/images/top-app-page.png)

### Example of CannaHire 'Cannabis 101' Feature  

![Example of Cannabis 101 Feature](./public/images/middle-app-page.png)

### Example of CannaHire Job Posting Board

![Example of CannaHire Job Posting Board](./public/images/bottom-app-pagr.png)


### Example of CannaHire Job Search

![Example of CannaHire Job Search](./public/images/bottom-app-pagr.png)


### Example of CannaHire Saved Jobs

![Example of Saved Jobs CannaHire Site](./public/images/bottom-app-pagr.png)


### Link to Video Walkthrough of CannaHire Site

(Video walkthrough link will go here)
  
### Link to Deployed CannaHire site on Heroku

https://salty-fortress-40367.herokuapp.com/


### Contributors to this Project (Team Ocho)
* Alexandra Cole @Lexxiecole
* Alex Joo @jooal
* Lauren Santosuosso @LaurenSantos23
* Logan Blueter @lblueter
* Mark Piscioneri @MarkPish


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
