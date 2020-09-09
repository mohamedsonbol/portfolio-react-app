import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
	render() {
		return (
			<Grid>
				<Cell col={4}>
					<p>
						{this.props.startYear} - {this.props.endYear}
					</p>
					<p>
						{this.props.location}
					</p>
				</Cell>
				<Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>
                        {this.props.jobName}
                    </h4>
                    <h5>
                        {this.props.jobPosition}
                    </h5>
                    <p style={{ textAlign: 'justify' }}>
                        {this.props.jobDescription}
                    </p>
                </Cell>
			</Grid>
		);
	}
}

export default Experience;
