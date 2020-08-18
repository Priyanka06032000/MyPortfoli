import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './skills';
class Resume extends Component{
    render(){
            return(
                <div>
                    <Grid>
                        <Cell col={4}>
                            <div style={{textAlign:'center'}}>
                                <img
                                src="data:image/jpeg;base64,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"
                               alt="avatar"
                               style={{height:'250px'}}
                               />
                            </div>
                            <h2 style={{paddingTop:'2em'}}>Priyanka Thorat</h2>
                            <h2 style={{color:'grey'}}>Lerner</h2>
                            <hr style={{borderTop:'4px solid #833fb2', width:'54%'}} />
                            <p>Be honest. Your ‘About Me’ page should reflect your genuine interests, 
                                whether they’repersonal or work-related. You never know when someone might use material in your statement
                                to strike up a conversation. For example,if you’re not really into yoga, 
                                don’t write you’re into yoga, or if you hate the account management as</p>
                            <hr style={{borderTop:'4px solid #833fb2', width:'54%'}} />
                            <h5>Address</h5>
                            <p>A/P-Pune</p>
                            <h5>Phone</h5>
                            <p>91******97</p>
                            <h5>Email</h5>
                            <p>abc123@gmail.com</p>
                            <hr style={{borderTop:'4px solid #833fb2', width:'54%'}} />
                            </Cell>
                        <Cell className="resume-right-col" col={8}>
                            <h2>Education</h2>
                            
                            <Education
                            StartYear={2015}
                            endYear={2016}
                            schoolName="SMVU"
                            SchoolDescription="SCC Board"
                             />
                             <Education
                            StartYear={2016}
                            endYear={2019}
                            schoolName="Government Polytechni Pune"
                            SchoolDescription="Completed Diploma in IT department in Government Polytechnic Pune An Autonomous Institue of Maharashtra"
                             />
                             <Education
                            StartYear={2019}
                            endYear={2022}
                            schoolName="G.H.R.I.E.T"
                            SchoolDescription="Pursuing Engineering IT department in G.H.Risoni Institute of engineering and technology"
                             />
                            <hr style={{borderTop:'3px solid #e22347'}} />
                            <h2>Experience</h2>
                            <Experience 
                            StartYear={2019}
                            endYear={2019}
                            jobName="First Internship"
                            jobDescription="Internship in Vteleybyte Software pvt ltd as a software tester from 1st Aug,2019 to 31st Aug,2019"
                            />
                            <Experience 
                            StartYear={2020}
                            endYear={2020}
                            jobName="Second Internship"
                            jobDescription="Internship in Python for Machine Learning in PIE INFOCOMM PVT. LTD. from  1st Aug,2020 to 3rd Sept,2020"
                            />
                            <hr style={{borderTop:'3px solid #e22347'}} />
                            <h2>Skills</h2>
                           <Skills
                           skill="Python"
                           Progress={50}
                           />
                           <Skills
                           skill="React.js"
                           Progress={60}
                           />
                           <Skills
                           skill="HTML"
                           Progress={55}
                           />
                           <Skills
                           skill="Cyber_Security"
                           Progress={60}
                           />
                           <Skills
                           skill="C++"
                           Progress={70}
                           />

                        </Cell>
                    </Grid>
             </div>
               )
              
        }
    }
    
export default Resume;