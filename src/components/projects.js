import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import Portfolio from '../assets/portfolio.png';
import BlogApp from '../assets/blogapp2.png';
import Bootstrap4 from '../assets/bootstrap4.png';
import Landing from '../assets/landingpage.png';
import Survey from '../assets/Surveyform.png';



class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				// Project 1
				<div className="projects-grid">
					<Card shadow={5} className="projects-card">
						<CardTitle
							style={{
								color: '#fff',
								height: '210px',
								background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${Portfolio}) center / cover`
							}}
						>
							React Portfolio
						</CardTitle>
						<CardText>
							My personal website developed with React, check my code on Github!
						</CardText>
						<CardActions border>
							<a href="https://github.com/mohamedsonbol/portfolio" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
						</CardActions>
					</Card>
					{/* Second Card */}
					<Card shadow={5} className="projects-card">
						<CardTitle 
							style={{
								color: '#fff',
								height: '210px',
								background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${Bootstrap4}) left / cover`
							}}
						>
							Bootstrap Grids
						</CardTitle>
						<CardText>
							Demonstrating my Bootstrap4 Skills using columns and rows.
						</CardText>
						<CardActions border>
							<a href="https://codepen.io/mowhocodes/pen/eyyaeV" target="_blank" rel="noopener noreferrer"><Button colored>Codepen</Button></a>
						</CardActions>
					</Card>

					{/* Third Card */}
					<Card shadow={5} className="projects-card">
						<CardTitle 
							style={{
								color: '#fff',
								height: '210px',
								background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${Landing}) center / cover`
							}}
						>
						Landing Page
						</CardTitle>
						<CardText>
							A FCC Project Designed with HTML5 / CSS3 / Flex.
						</CardText>
						<CardActions border>
							<a href="https://codepen.io/mowhocodes/pen/QWELjqb" target="_blank" rel="noopener noreferrer"><Button colored>Codepen</Button></a>
						</CardActions>
					</Card>

					{/* Fourth Card */}
					<Card shadow={5} className="projects-card">
						<CardTitle 
							style={{
								color: '#fff',
								height: '210px',
								background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${Survey}) center / cover`
							}}
						>
						Survey Form
						</CardTitle>
						<CardText>
							A FCC Project Designed with HTML5 / CSS3 / Flex.
						</CardText>
						<CardActions border>
							<a href="https://codepen.io/mowhocodes/pen/mdPYZGe" target="_blank" rel="noopener noreferrer"><Button colored>Codepen</Button></a>
						</CardActions>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div className="projects-grid">
					<Card shadow={5} className="projects-card">
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${BlogApp}) left / cover`
							}}
						>
							BlogApp
						</CardTitle>
						<CardText>
							BlogApp developed with node.js, express.js, mongoDB Atlas and Bootstrap4.
						</CardText>
						<CardActions border>
						<a href="https://github.com/mohamedsonbol/BlogApp" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
						<a href="https://secret-ridge-37795.herokuapp.com/blogs" target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
						</CardActions>
					</Card>
				</div>
			);
		} 
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>Front-end</Tab>
					<Tab>Full-stack</Tab>
				</Tabs>
				<section>
					<Grid>
						<Cell col={12}>{this.toggleCategories()}</Cell>
					</Grid>
				</section>
			</div>
		);
	}
}

export default Projects;
