import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import Resume from './resume';
import Contact from './contact'; 
import Aboutme from './aboutme';
import Project from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
       <Route path="/resume" component={Resume} />
       <Route path="/contact" component={Contact} />
       <Route path="/aboutme" component={Aboutme} />
       
       <Route path="/projects" component={Project} />
    </Switch>

)
export default Main;
