DROP DATABASE IF EXISTS cannahire;
CREATE DATABASE cannahire;

USE cannahire;
-- USE `hkbvtsjz9cohxt94`;

-- This is my table, please do not touch 
CREATE TABLE applied (
  id INT,
  job INT
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
  level varchar(100) NOT NULL,
  state varchar(50) NOT NULL,
  city varchar(200) NOT NULL,
  job_description varchar(2500) NOT NULL,
  employee_requirements varchar(2500) NOT NULL,
  -- tags VARCHAR (200) NOT NULL,
  primary key (job_posting_id)
);

CREATE TABLE applicant_trackers (
  tracker_id INT AUTO_INCREMENT NOT NULL,
  position VARCHAR(200) NOT NULL,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  new_applicant BOOLEAN NOT NULL,
  actions BOOLEAN NOT NULL,
  primary key (tracker_id)
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