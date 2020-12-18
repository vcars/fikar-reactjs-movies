import React, { Component } from 'react';
import DetailMovies from '../component/DetailMovies/DetailMovies';
import Footer from '../component/Footer/Footer';
import Menu from '../component/Header/Menu';
import Movies from '../component/Movies/Movies';
import { Switch,Route} from 'react-router-dom'


class LandingPage extends Component {
render(){
    return(
        <div>
        {/* <Route component={Menu}/> */}
        <Switch>
        <Route path="/detail/:id" name="id" component={DetailMovies}/>
        <Route path="/" component={Movies}/>    
        </Switch>
        <Footer />
        </div>

       
        
    )
}
};

export default LandingPage