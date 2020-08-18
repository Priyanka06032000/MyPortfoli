import React, { Component } from 'react';
import {Grid ,Cell,ProgressBar} from 'react-mdl';
class Skills extends Component {
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display:'flex'}}>{this.props.skill}<ProgressBar style={{margin:'auto',width:'55%'}}
                    progress={this.props.Progress}/></div>
 
                </Cell>
            </Grid>
        )
    }

}
export default Skills;