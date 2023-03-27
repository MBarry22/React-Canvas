import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';


import Art from '../components/Art';
import Paint from '../components/Paint';
import EditArt from '../components/EditArt';

export default function Routers () {
  return (
    <Router>
      <nav>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/art">Art</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Paint />
        </Route>
        <Route path="/art">
          <Art />
        </Route>
        <Route path="edit-art">
            <EditArt />
        </Route>
      </Switch>
    </Router>
  )
}