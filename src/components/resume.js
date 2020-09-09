import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import MyPic from '../assets/mohamedsonbol.png';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4} phone={8}>
						<div style={{ textAlign: 'center' }}>
							<img
								src={MyPic}
								alt="Avatar"
								style={{ height: '200px' }}
							/>
						</div>
						<div className="container">
							<h2 style={{ paddingTop: '2em' }}>Mohamed Sonbol</h2>
							<h4 style={{ color: 'grey' }}>Programmer</h4>

							<hr style={{ borderTop: '3px solid #844fb2', width: '50%' }} />

							<p style={{ textAlign: 'justify' }}>
								4+ years of experience building and maintaining responsive websites. Proficient in HTML, CSS, and JavaScript. Plus, modern libraries and frameworks. With excellent interpersonal skills and the ability to work directly with clients to understand all the requirements to the details.
							</p>
							<hr style={{ borderTop: '3px solid #844fb2', width: '50%' }} />
							<h5>Address</h5>
							<p>Warsaw, Poland.</p>

							<h5>Phone</h5>
							<p>+48 732 785 743</p>

							<h5>Email</h5>
							<p>mhmdezzat.eng@gmail.com</p>

							<h5>Webite</h5>
							<p>mohamedsonbol.com</p>

							<hr style={{ borderTop: '3px solid #844fb2', width: '50%' }} />

							<h5>Technologies</h5>
							<p>
							React, Redux, Less, Node.js, Express.js, Passport.js, EJS, MongoDB, Firebase, Git, Bash, 
							Bootstrap4, MDBootstrap, WordPress, Scrum, REST API
							</p>

						</div>
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>

						<Education
							startYear={2015}
							endYear={2017}
							location="Warsaw, Poland."
							schooName="Warsaw University of Technology"
							schoolDescription="Pusuing my Bachelor's Degree in Computer Science"
						/>

						<Education
							startYear={2010}
							endYear={2013}
							location="Sharjah, United Arab Emirates."
							schooName="Al Shola Private School"
							schoolDescription="Obtained my High School Degree at one of the most highly reputed High Schools in UAE."
						/>

						<hr style={{ borderTop: '3px solid #e22947' }} />

						<h2>Experience</h2>
						<Experience
							startYear={2018}
							endYear={2020}
							location="Dubai, UAE."
							jobName="Abalkhail Real Estate"
							jobPosition="Front-end Developer"
							jobDescription="Designed over 25 landing pages for multiple real estate projects using Bootstrap v4. Increased customer reach by designing a website for the business with WordPress. Automated the website for SEO Improvements and better User Experience.
							Adding over 30 listings for real estate projects over PropertyFinder MYCRM."
						/>

						<Experience
							startYear={2015}
							endYear={2018}
							location="Freelancer"
							jobName="Bebcard Digital Solutions"
							jobPosition="Front-end Developer / WordPress"
							jobDescription="Designed and deployed over 13 WordPress sites.
							Consulting clients, managing domain, and hosting deployments.
							Automated websites for the best performance, speed, and user experience."
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />
						
						<h2>Skills</h2>
						<Skills skill="HTML5/CSS" progress={100} />
						<Skills skill="NodeJS" progress={75} />
						<Skills skill="JavaScript" progress={70} />
						<Skills skill="MongoDB" progress={70} />
						<Skills skill="React" progress={60} />
						
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
