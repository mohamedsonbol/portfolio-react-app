import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img
								src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
								alt="Avatar"
								style={{ height: '200px' }}
							/>
						</div>

						<h2 style={{ paddingTop: '2em' }}>Mohamed Sonbol</h2>
						<h4 style={{ color: 'grey' }}>Programmer</h4>

						<hr style={{ borderTop: '3px solid #844fb2', width: '50%' }} />

						<p>
							Detailed-oriented, responsible and committed developer, with a get-it-done and high-quality
							product spirit, and with over 3 years of experience defining requirements, designing,
							implementing, testing and delivering professional landing pages and websites using a variety
							of programming languages and technologies.
						</p>
						<hr style={{ borderTop: '3px solid #844fb2', width: '50%' }} />
						<h5>Address</h5>
						<p>Dubai, UAE.</p>
						<h5>Phone</h5>
						<p>(+971) 58 869 439</p>
						<h5>Email</h5>
						<p>mail@outlook.com</p>
						<h5>Webite</h5>
						<p>egyptiandeveloper.com</p>
						<hr style={{ borderTop: '3px solid #844fb2', width: '50%' }} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>

						<Education
							startYear={2018}
							endYear={2019}
							schooName="Udemy - Colt Steel Instructor"
							schoolDescription="Bootcamp Web Developer Certificate"
						/>

						<Education
							startYear={2015}
							endYear={2018}
							schooName="Polish Japanese Academy of Information Technology"
							schoolDescription="Bachelor of Engineering - BE"
						/>

						<hr style={{ borderTop: '3px solid #e22947' }} />

						<h2>Experience</h2>
						<Experience
							startYear={2018}
							endYear="Now"
							jobName="Freelance"
							jobPosition="Web Developer"
							jobDescription="Designing and deploying WordPress Websites.
                            Preparing each website to be Search Engine friendly 
                            Maintained and customized websites for the best performance, speed, and user experience. Delivered ready websites with quality content to customers while before deadlines"
						/>

						<Experience
							startYear={2015}
							endYear={2018}
							jobName="Bebcard Digital Solutions"
							jobPosition="Web Developer"
							jobDescription="Designing and deploying WordPress Websites.
                            Preparing each website to be Search Engine friendly 
                            Maintained and customized websites for the best performance, speed, and user experience. Delivered ready websites with quality content to customers while before deadlines"
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h2>Skills</h2>
						<Skills skill="JavaScript" progress={50} />

						<Skills skill="HTML5/CSS" progress={75} />

						<Skills skill="React" progress={50} />

						<Skills skill="MongoDB" progress={70} />

						<Skills skill="NodeJS" progress={70} />

					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
