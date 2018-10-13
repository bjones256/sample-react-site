import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
class Expireince extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.companyName}</h4>
                    <h5>{this.props.jobTitle}</h5>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Expireince;