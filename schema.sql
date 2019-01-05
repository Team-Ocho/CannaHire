USE `hkbvtsjz9cohxt94`;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
	username VARCHAR(200) NOT NULL,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    zip_code INT NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE company_login (
	company_id INT AUTO_INCREMENT NOT NULL,
    company_name varchar(200) NOT NULL,
    company_zip_code INT NOT NULL,
    company_website varchar (200) NOT NULL,
    company_email varchar(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    primary key (company_id)

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