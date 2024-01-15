/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            {
               routes.map(({path, name})=>(
                <li key={path}>
                  <NavLink 
                    to={path} 
                    activeClassName="nav-active">
                      {name}
                  </NavLink>
                </li>
               ))
            }
          </ul>
        </nav>
        <Switch>
            {
              routes.map(({path, component:Component})=>(
                <Route
                  key={path} 
                  path={path} 
                  render = {()=><Component />}
                />
              ))
            }
            <Redirect to={routes[0].path} />
        </Switch>
      </div>
    </Router>
  );
}