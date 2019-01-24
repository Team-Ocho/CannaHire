
DROP DATABASE IF EXISTS cannahire;
CREATE DATABASE cannahire;

USE cannahire;
-- USE `hkbvtsjz9cohxt94`;

-- This is my table, please do not touch
CREATE TABLE applied (
 tracker_id INT,
 job_posting_id INT
);

CREATE TABLE user_login (
 id INT AUTO_INCREMENT NOT NULL,
 first_name VARCHAR(200) NOT NULL,
 last_name VARCHAR(200) NOT NULL,
 email VARCHAR(200) NOT NULL,
 phone varchar (200) NOT NULL,
 description VARCHAR(2500),
 security_question VARCHAR(200) NOT NULL,
 security_answer VARCHAR(200) NOT NULL,
 user_img_url VARCHAR(2000),
 password VARCHAR(200) NOT NULL,
 corporate BOOLEAN NOT NULL,
 PRIMARY KEY (id)
);

-- Host images somewhere else and store url for image in SQL(amazons3)--

CREATE TABLE job_postings (
 job_posting_id INT AUTO_INCREMENT NOT NULL,
 job_title varchar(200) NOT NULL,
 company_name VARCHAR(200) not null, 
 city_state varchar(200) NOT NULL,
 job_description varchar(2500) NOT NULL,
 employee_requirements varchar(2500) NOT NULL,
 primary key (job_posting_id)
);

CREATE TABLE applicant_trackers (
 tracker_id INT AUTO_INCREMENT NOT NULL,
 position VARCHAR(200) NOT NULL,
 first_name VARCHAR(200) NOT NULL,
 last_name VARCHAR(200) NOT NULL,
 email VARCHAR(200) NOT NULL,
 new_applicant BOOLEAN NOT NULL,
 actions VARCHAR (100) NOT NULL,
 primary key (tracker_id)
);

CREATE TABLE companies (
   company_ID INT AUTO_INCREMENT NOT NULL,
   company_name varchar(200) NOT NULL,
   primary key (company_ID)
);

CREATE TABLE applicant_jobs (
  job_posting_id INT AUTO_INCREMENT NOT NULL,
  job_title varchar(200) NOT NULL,
  company_name varchar(200) NOT NULL,
  state varchar(50) NOT NULL,
  city varchar(200) NOT NULL,
  job_description varchar(2500) NOT NULL,
  employee_requirements varchar(2500) NOT NULL,
  primary key (job_posting_id)
);

-- CREATE VIEW view_applicant_jobs as
-- SELECT applicant_trackers.first_name, applicant_trackers.last_name, job_postings.job_title
-- FROM applicant_trackers
-- INNER JOIN applied ON applied.tracker_id = applicant_trackers.tracker_id
-- INNER JOIN job_postings ON job_postings.job_posting_id = applied.job_posting_id

-- CREATE VIEW view_company_jobs as
-- SELECT companies.company_name, job_postings.job_title
-- FROM companies
-- INNER JOIN job_postings ON job_postings.company_id = companies.company_id (edited) 

