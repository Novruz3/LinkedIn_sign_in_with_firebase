import { Component } from 'react';
import './App.css';
import { Main } from './components/Main';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from './components/SignIn';


class App extends Component {
  render() {
    return (
      <div className="App bg-light">
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/' element={<SignIn />} />
        </Routes>
      </div>
    );
  }
}

export default App;
