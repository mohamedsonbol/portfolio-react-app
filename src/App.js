import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="demo-big-content">
			<Layout>
				<Header className="header-color" title={<Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Mohamed Sonbol </Link>} scroll>
					<Navigation>
						<Link to="/resume">Resume</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</Navigation>
				</Header>
				<Drawer title={<Link to="/" style={{ color: '#000', textDecoration: 'none', display: 'block' }}>Mohamed Sonbol </Link>}>
					<Navigation>
						<Link to="/resume">Resume</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<Main />
				</Content>
			</Layout>
		</div>
	);
}

export default App;
