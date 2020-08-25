import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import MyPic from '../assets/mohamedsonbol.png';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<div className="contact-grid">
					<Grid>
						<Cell col={6}>
							<h2>Mohamed Sonbol</h2>
							<img
								src={MyPic}
								alt="Avatar"
								style={{ height: '250px' }}
							/>
							<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
								Detailed-oriented, responsible and committed developer, with a get-it-done and
								high-quality product spirit, and with over 3 years of experience defining requirements,
								designing, implementing, testing and delivering professional landing pages and websites
								using a variety of programming languages and technologies.
							</p>
						</Cell>
						<Cell col={6}>
							<h2>Contact me</h2>
							<hr />

							<div className="contact-list">
								<List>
									{/* <ListItem>
										<ListItemContent>
											<span>
												<i className="fa fa-phone-square" aria-hidden="true" />
											</span>
										</ListItemContent>
									</ListItem> */}

									<ListItem>
										<ListItemContent>
											<span>
											<i className="fa fa-envelope" aria-hidden="true" />
											Mhmdezzat.eng@gmail.com
											</span>
										</ListItemContent>
									</ListItem>

									<ListItem>
										<ListItemContent>
											<span>
											<i className="fa fa-linkedin" aria-hidden="true" />
											<	a href="https://www.linkedin.com/in/mohamedsonbol/">@mohamedsonbol</a>
											</span>
										</ListItemContent>
									</ListItem>

									<ListItem>
										<ListItemContent>
											<span>
											<i className="fa fa-github" aria-hidden="true" />
											<	a href="https://github.com/mohamedsonbol">@mohamedsonbol</a>
											</span>
										</ListItemContent>
									</ListItem>
								</List>
							</div>
						</Cell>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Contact;
