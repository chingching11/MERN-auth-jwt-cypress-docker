import React from "react"
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Private from "./pages/Private";
import RequireAuth from "./components/RequireAuth"

function App() {
  return (
    <div>
       <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register}/>
            <Route path="/login" component={Login} />
            <Route path="/private" component={RequireAuth(Private)} />
            <Route path="*" component={() => "404 Not Found" } />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
