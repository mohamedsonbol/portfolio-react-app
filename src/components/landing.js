import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return (
			<div className="landing-page">
				<div className="container">
					<img
						src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
						alt="Avatar Male"
						className="avatar-img"
					/>

					<div className="banner-text">
						<h1>Full Stack Web Developer</h1>

						<hr />
						<p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
						<div className="social-links">
							{/* LinkedIn */}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>

							{/* Github */}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-github-square" aria-hidden="true" />
							</a>

							{/* Freecodecamp */}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-free-code-camp" aria-hidden="true" />
							</a>

							{/* Youtube */}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-youtube-square" aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
