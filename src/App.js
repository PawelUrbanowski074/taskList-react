import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink, Wrapper, List, Item } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <List>
        <Item>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/author">O autorze</StyledNavLink>
        </Item>
      </List>
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