import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from "./educaction";
import Expirience from "./expireince";

class Resume extends Component {
    render() {
        return(
           <div>
               <Grid>
                   <Cell col={4}>
                   <div style={{textAlign: 'center'}}>
                        <img
                        src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                   </div>
                   <h2 style={{paddingTop:'2em'}}>Brian Jones</h2>
                   <h4 style={{color:'grey'}}>Programmer</h4>
                   <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                   <p>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   </p>
                   <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                    <h5>Address</h5>
                    <p>asfasdfa asdfasdf</p>
                    <h5>Phone</h5>
                    <p>23455124</p>
                    <h5>Email</h5>
                    <p>asdfasdf@.com</p>
                    <h5>Web</h5>
                    <p>Somesite.com</p>
                    <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                   </Cell>
                   
                   <Cell className='resume-right-col' col={8}>
                    <h2>Expirience</h2>
                        <Expirience
                            startYear={2015}
                            endYear={2018}
                            companyName="eCig Distributors"
                            jobTitle="Chief Innovations Officer / Chief Operations Officer"
                            jobDescription="bunch of diff shit"
                        />

                        <Expirience
                            startYear={2012}
                            endYear={2015}
                            companyName="Preserve Realty"
                            jobTitle="Owner"
                            jobDescription="Real Estate Development and Sales Consulting"
                        />

                        <Expirience
                            startYear={2010}
                            endYear={2012}
                            companyName="Patten Sales and Marketing"
                            jobTitle="Sale Consultant"
                            jobDescription="Real Estate Liquidation"
                        />

                        <Expirience
                            startYear={2015}
                            endYear={2018}
                            companyName="eCig Distributors"
                            jobTitle="Broker in Charge / Sales Consultant"
                            jobDescription="Luxury Master Planned Community Sales"
                        />

                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Education</h2>

                     <Education
                        startYear={2018}
                        endYear={2019}
                        schoolName='DevMountain'
                        schoolDescription='Immersive Full Stack JavaScript Bootcamp'
                     />
                     <Education
                        startYear={2018}
                        endYear={2019}
                        schoolName='DevMountain'
                        schoolDescription='Immersive Full Stack JavaScript Bootcamp'
                     />

                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Skills</h2>
                   
                   </Cell>
               </Grid>

           </div> 
        )
    }
}

export default Resume;