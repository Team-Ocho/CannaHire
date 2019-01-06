USE 'hkbvtsjz9cohxt94' ;

INSERT INTO applicant_login
(username, first_name, last_name, email, resume, cover_letter, password)
VALUES ('LoloSantos', 'Lauren', 'Santosuosso', 'noway@yahoo.com', 'resume here', 'Cover Letter would be put here', 'password');

INSERT INTO company_login
(company_name, company_website, company_email, password)  
VALUES ('Cresco Labs', 'www.crescolabs.com', 'hiring@crescolabs.com', 'password')
('Noa Botanicals', 'www.noacares.com', 'hiring@noabotanicals.com', 'password');

INSERT INTO job_posting
(job_title, company_name, city_state, job_description, employee_requirements)
VALUES ('Driver', 'Cresco Labs', 'Yellow Springs, Ohio', 'Full-Time Driver for our Yellow Springs Ohio facility', 'High School Diploma or Equivalent and a Valid Drivers License/Clean Driving Record, Must be 21 years old to apply'),
('Facility Maintenence Technician', 'Cresco Labs', 'Yellow Springs, Ohio', 'As the Facility Maintenance Technician, you will ensure the facility is maintained in a satisfactory condition for all required production and manufacturing operations.', 'The maintenance technician is responsible for the upkeep of the facility and should have a variety of skills, such as plumbing, electrical, carpentry and HVAC certification'),
('Lab Manufacturing Manager', 'Cresco Labs', 'Yellow Springs, Ohio', 'The Lab Manufacturing Manager will oversee and be responsible for all types of medicinal extracts from Cresco Labs product. The Lab Manufacturing Manager completes will maintain the organization, cleanliness and efficiency of production area.', 'To perform this job successfully, an individual should have proficiency with MS Office in a windows environment and familiar with sales tracking and reporting software'),
('QC Chemist', 'Cresco Labs', 'Yellow Springs, Ohio', 'The chemist will be responsible for testing equipment as well as assisting in the extraction process of medicinal cannabis. The chemist will test samples for identification, purity, and contaminants.', 'Bachelor’s Degree in chemistry or related field with 1-2 years HPLC experience'),
('Lab Manufacturing Technician', 'Cresco Labs', 'Yellow Springs, Ohio', 'Cresco Labs is seeking a Lab Manufacturing Technician to join our Yellow Springs, OH facility. The Lab Manufacturing Technician will be responsible for assisting in product processing and formulation', 'Two years of experience in a lab or manufacturing environment & Past experience in a highly regulated field producing pharmaceutical or nutraceutical products preferred'),
('Production Manager', 'Noa Botanicals', 'Honolulu, Hawaii', 'The Production Manager will lead and drive all aspects of Manoa Botanicals Production Facility processing of cannabis into safe, high quality, and effective cannabis products and successfully scale manufacturing.', 'Must be and remain compliant with any and all legal or company regulations for working in the cannabis industry. Bachelor’s degree in agriculture, manufacturing, or related field.'),
('Safety & Security Manager', 'Noa Botanicals', 'Honolulu, Hawaii', 'The Security and Safety Manager is responsible for day-to-day operations of Noa Botanicals security in accordance with state and local laws and standards set by the Organization.', 'Must be and remain compliant with all legal or company regulations for working in the cannabis industry. High School Diploma or GED Required'),
('Cannabis Support Staff', 'Noa Botanicals', 'Honolulu, Hawaii', 'Cannabis Support Staff provide on-site support for the trimming and packaging of Mānoa Botanicals LLC dba Noa Botanicals product. Cannabis Support Staff complete tasks assigned by the Team Lead to ensure the aesthetic appeal and high quality of product.', 'Previous experience in agriculture, trimming, or packaging preferred. High School Diploma or GED required. Minimum of 21 years of age as required by state statute.'),
('Human Resources Coordinator', 'Noa Botanicals', 'Honolulu, Hawaii', 'The Human Resources Coordinator works directly with and supports the Human Resources Director with recruiting and day-to-day HR functions and duties.', 'Bachelor’s degree in Human Resources or equivalent experience. Must pass all pre-employment reference and the background check requirements as required by state statute'),
('Product Specialist', 'Noa Botanicals', 'Honolulu, Hawaii', 'Product Specialist at Noa Botanicals is responsible for patient and caregiver intake, product transactions, and providing excellent customer service to a variety of audiences.', '2-3 years of previous sales experience preferred. Must be and remain compliant with any and all legal or company regulations for working in the cannabis industry.');

