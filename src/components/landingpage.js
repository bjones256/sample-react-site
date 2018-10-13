import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
           <div style={{width: '100%', margin: 'auto'}}>
           <Grid className="landing-grid">
            <Cell col={12}>
                <img
                    src='https://images-na.ssl-images-amazon.com/images/I/61iFK1R50ZL._SL1000_.jpg'
                    alt="Avatar"
                    className="avatar-image"
               />
                <div className="banner-text">
                    <h1>Full-Stack Web Developer</h1>

                    <hr/>

                    <p>HTML/CSS | Bootstrap | JavaScript | React | Nodejs | Express | Mongo DB | Shopify</p>
                    <div className='social-links'>
                        {/* LinkedIn */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                        {/* github */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true"/>
                        </a>
                        {/* LinkedIn */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-stack-overflow" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
            </Cell>
           </Grid>
           </div>
        )
    }
}

export default Landing;