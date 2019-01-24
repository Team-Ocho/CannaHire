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

### Example of CannaHire Registration Page 

![Example of Registration Page for CannaHire Site](client/src/assets/registration-page-1.png)

### Example of CannaHire Employer Registration Page 

![Example of Employer Registration Page for CannaHire Site](./src/assets/employer-registration.png)

### Example of CannaHire Login Page 

![Example of Login Page for CannaHire Site](./src/assets/login-page.png)

### Example of CannaHire Employer Dashboard 

![Example of Employer Dashboard for CannaHire Site](./src/assets/applicant-tracker.png)

### Example of CannaHire Applicant Dashboard 

![Example of Applicant Dashboard for CannaHire Site](./src/assets/applied-job-tracker.png)

### Example of CannaHire 'Cannabis 101' Feature  

![Example of Cannabis 101 Feature](./src/assets/cannabis-101.png)

### Example of CannaHire Job Posting Board

![Example of CannaHire Job Posting Board](./src/assets/job-post.png)

### Example of CannaHire Job Search & Job Application

![Example of CannaHire Job Search & Job Application](./src/assets/job-search-apply.png)

### Example of CannaHire Job Posting Tracker

![Example of Job Posting Tracker CannaHire Site](./src/assets/job-post-tracker.png)

### Example of CannaHire Messages Page 

![Example of Messages Page for CannaHire Site](./src/assets/message-page.png)

### Example of CannaHire Setting Page 

![Example of Settings Page for CannaHire Site](./src/assets/settings.png)


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

### Commands

- `npm run dev` - Starts the development server & front end
- `npm install` - Installs packages on both front and back end
