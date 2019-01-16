DROP DATABASE IF EXISTS cannahire;
CREATE DATABASE cannahire;

USE cannahire;
-- USE `hkbvtsjz9cohxt94`;

CREATE TABLE applicant_login (
  applicant_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  security_question VARCHAR(200) NOT NULL,
  security_answer VARCHAR(200) NOT NULL,
  user_img_url VARCHAR(2000),
  password VARCHAR(200) NOT NULL,
  PRIMARY KEY (applicant_id)
);

-- Host images somewhere else and store url for image in SQL(amazons3)--

CREATE TABLE company_login (
	company_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  company_name varchar(200) NOT NULL,
  company_phone varchar (200) NOT NULL,
  company_email varchar(200) NOT NULL,
  company_description VARCHAR(2500),
  security_question VARCHAR(200) NOT NULL,
  security_answer VARCHAR(200) NOT NULL,
  user_img_url VARCHAR(2000),
  password VARCHAR(200) NOT NULL,
  PRIMARY KEY (company_id)
);

CREATE TABLE job_postings (
  job_posting_id INT AUTO_INCREMENT NOT NULL,
	job_title varchar(200) NOT NULL,
  level varchar(100) NOT NULL,
  state varchar(50) NOT NULL,
  city varchar(200) NOT NULL,
  job_description varchar(2500) NOT NULL,
  employee_requirements varchar(2500) NOT NULL,
  tags VARCHAR (200) NOT NULL,
  primary key (job_posting_id),
)

CREATE TABLE applicant_tracker (
  applicant_tracker_id INT AUTO_INCREMENT NOT NULL,
  position VARCHAR(200) NOT NULL,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  new_applicant BOOLEAN NOT NULL,
  actions VARCHAR (100) NOT NULL,
)

CREATE TABLE applicant_jobs (
  job_posting_id INT AUTO_INCREMENT NOT NULL,
  job_title varchar(200) NOT NULL,
  company_name varchar(200) NOT NULL,
  state varchar(50) NOT NULL,
  city varchar(200) NOT NULL,
  job_description varchar(2500) NOT NULL,
  employee_requirements varchar(2500) NOT NULL,
  primary key (job_posting_id),
);