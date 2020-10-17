import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./views/Chat/Chat";
import SampleChat from "./views/chatSample/chat";
import Store from "./services/GlobalContext";

function App() {
  return (
    <Store>
      <Router>
        <Route exact path="/" component={Chat} />
        <Route exact path="/sample" component={SampleChat} />
      </Router>
    </Store>
  );
}

export default App;
