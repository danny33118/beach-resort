import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { RoomContextProvider } from './RoomContextProvider';

function App() {
  return (
    <>
    <RoomContextProvider>
    <Router>      
      <Navbar/>  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/room" component={Rooms} />
          <Route exact path="/room/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Router>
      </RoomContextProvider>
    </>
  );
}

export default App;
