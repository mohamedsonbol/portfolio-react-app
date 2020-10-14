import React, { Component } from 'react';
import MyPic from '../assets/mohamedsonbol.png';

class Landing extends Component {
	render() {
		return (
			<div className="landing-page">
				<div className="container">
					<img
						src={MyPic}
						alt="Avatar Male"
						className="avatar-img"
					/>

					<div className="banner-text">
						<h1>Web Developer</h1>

						<hr />

						<p>
							Hi! welcome to my website, built with react. 
						</p>
						<div className="social-links">
							{/* LinkedIn */}
							<a href="https://www.linkedin.com/in/mohamedsonbol/" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>

							{/* Github */}
							<a href="https://github.com/mohamedsonbol" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-github-square" aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
