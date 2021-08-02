import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/zadania">Zadania</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/author">O autorze</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;