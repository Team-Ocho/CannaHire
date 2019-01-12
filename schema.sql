DROP DATABASE IF EXISTS cannahire;
CREATE DATABASE cannahire;

USE cannahire;
-- USE `hkbvtsjz9cohxt94`;

CREATE TABLE applicant_login (
  user_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  resume VARCHAR(2500),
  cover_letter VARCHAR(2500),
  password VARCHAR(200) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE company_login (
	user_id INT AUTO_INCREMENT NOT NULL,
  company_name varchar(200) NOT NULL,
  company_website varchar (200) NOT NULL,
  company_email varchar(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  PRIMARY KEY (company_id)
);

CREATE TABLE job_postings (
  job_posting_id INT AUTO_INCREMENT NOT NULL,
	job_title varchar(200) NOT NULL,
  company_name varchar(200) NOT NULL,
  city_state varchar(200) NOT NULL,
  job_description varchar(2500) NOT NULL,
  employee_requirements varchar(2500) NOT NULL,
  primary key (job_posting_id)
);
