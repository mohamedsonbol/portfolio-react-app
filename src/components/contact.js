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
							<hr />

							<img
								src={MyPic}
								alt="Avatar"
								style={{ height: '250px' }}
							/>
							<p style={{ width: '75%', margin: 'auto', paddingTop: '.5em', textAlign: 'justify'}}>
								2+ years of experience building and maintaining responsive websites. Proficient in HTML, CSS, and JavaScript. With excellent interpersonal skills. Ability to work directly with clients to understand requirements with attention to details.
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
												<i className="fa fa-codepen" aria-hidden="true" />
												<a style={{color: 'black'}} href="https://codepen.io/mowhocodes">My Codepen</a>
											</span>
										</ListItemContent>
									</ListItem>

									<ListItem>
										<ListItemContent>
											<span>
												<i className="fa fa-github" aria-hidden="true" />
												<a style={{color: 'black'}} href="https://github.com/mohamedsonbol">My Github</a>
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
