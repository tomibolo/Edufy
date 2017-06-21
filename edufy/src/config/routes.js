import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from '../components/home/Home';

// import requireAuth from '../utils/requireAuth';

class Routes extends Component
{
	render()
	{
		return (
        <Router history={ createHistory() }>
          <div>
      				<Switch>
  							<Route exact path="/" component={Home} />
								<Route exact path="/Home" component={Home} />
  							<Route render = {
  								function () {
  									return <div>
  														<p>No se encuentra la pagina</p>
  												</div>
  								}
  							}
  							/>
  						</Switch>
          </div>
        </Router>
			);

	}
}

export default Routes;
