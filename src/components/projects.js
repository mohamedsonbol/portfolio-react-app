import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
								background: 'url(https://reactjs.org/logo-og.png) center / cover'
							}}
						>
							React Project 1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus
							eleifend lacinia...
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

                    <Card shadow={5} className="projects-card">
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(https://reactjs.org/logo-og.png) center / cover'
							}}
						>
							React Project 1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus
							eleifend lacinia...
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

                    <Card shadow={5} className="projects-card">
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(https://reactjs.org/logo-og.png) center / cover'
							}}
						>
							React Project 1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus
							eleifend lacinia...
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>

                
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1>This is MongoDB</h1>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1>This is VueJS</h1>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<h1>This is WordPress</h1>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
					<Tab>React</Tab>
					<Tab>MongoDB</Tab>
					<Tab>VueJS</Tab>
					<Tab>WordPress</Tab>
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
