import React, {Component} from 'react';
import Home from './Homw';
import formSubmit from './formSubmit';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import './App.css';

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/" component={Home} exact={true}/>
//           <Route path="/user" component={User} />
//           <Route component={Error} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact = {true} />
          <Route path='/formSubmit' component={formSubmit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;