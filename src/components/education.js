import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
	render() {
		return (
			<Grid>
				<Cell col={4}>
					<p>
						{this.props.startYear} - {this.props.endYear}
					</p>
					<p >
						<a style={{color: 'white'}} href="https://goo.gl/maps/iUJkLwCi9DNPRpk99" target="_blank">{this.props.location}</a>
					</p>
				</Cell>
				<Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>
                        {this.props.schooName}
                    </h4>
                    <p>
                        {this.props.schoolDescription}
                    </p>
                </Cell>
			</Grid>
		);
	}
}

export default Education;
