import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Orders from './components/Orders/OrdersComponent';
import CommentsContainer from './components/Comments/CommentsContainer';
import NavBar from './components/NavBar/NavBarComponent';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path='/orders' render={() => <Orders />} />
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/comments' render={() =>
          <CommentsContainer />} />
        <Route path='/users' render={() =>
          <UsersContainer />} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
