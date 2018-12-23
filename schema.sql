DROP DATABASE IF EXISTS canna_hire;
CREATE DATABASE canna_hire;

USE canna_hire;

CREATE TABLE sign_up  (
	username VARCHAR(200) NOT NULL,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    company_name varchar(200) NOT NULL,
    position VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE job_posting (
	job_title varchar(200) NOT NULL,
    salary varchar(200) NOT NULL,
    job_description varchar(600) NOT NULL,
    employee_requirements varchar(600) NOT NULL,
    primary key (job_title)
);
