import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Portfolio from '../assets/portfolio.png';
import BlogApp from '../assets/blogapp2.png';


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
								height: '176px',
								background: `url(${Portfolio}) center / cover`
							}}
						>
							Portfolio
						</CardTitle>
						<CardText>
							My personal website is built with React, check my code on Github!
						</CardText>
						<CardActions border>
							<a href="https://github.com/mohamedsonbol/portfolio" target="_blank"><Button colored>Github</Button></a>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
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
								background: `url(${BlogApp}) center / cover`
							}}
						>
							BlogApp
						</CardTitle>
						<CardText>
							BlogApp built with node.js / express.js / mongoDB Atlas. Deployed on Netlify.
						</CardText>
						<CardActions border>
						<a href="https://github.com/mohamedsonbol/BlogApp" target="_blank"><Button colored>Github</Button></a>
						<a href="https://secret-ridge-37795.herokuapp.com/blogs" target="_blank"><Button colored>Live Demo</Button></a>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} 
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>Node/Express/MongoDB</Tab>
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
