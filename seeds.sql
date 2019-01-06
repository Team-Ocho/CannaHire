USE 'hkbvtsjz9cohxt94' ;

INSERT INTO applicant_login
(username, first_name, last_name, email, resume, cover_letter, password)
VALUES ('LoloSantos', 'Lauren', 'Santosuosso', 'noway@yahoo.com', 'resume here', 'Cover Letter would be put here', 'password');

INSERT INTO company_login
(company_name, company_website, company_email, password)  
VALUES ('Cresco Labs', 'www.crescolabs.com', 'hiring@crescolabs.com', 'password');

INSERT INTO job_posting
(job_title, company_name, city_state, job_description, employee_requirements)
VALUES ('Driver', 'Cresco Labs', 'Yellow Springs, Ohio', 'Full-Time Driver for our Yellowsprings Ohio facility', 'High School Diploma or Equivalent and a Valid Drivers License/Clean Driving Record, Must be 21 years old to apply')
