import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NewTodo from './containers/NewTodo/NewTodo';
import TodoDetail from './components/TodoDetail/TodoDetail';
import TodoList from './containers/TodoList/TodoList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/todos' exact render={() => <TodoList title="My TODOs" />} />
          <Route path='/todos/:id' exact component={TodoDetail}/>
          <Route path='/new-todo' exact component={NewTodo} />
          <Redirect exact from='/' to='/todos' />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
