import React from "react"
import ValidationLog from "./ValidationLog"
import PostList from "./PostList"
import  {BrowserRouter as Router,Route,Switch,Redirect}  from "react-router-dom"

function App() {
  

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={ValidationLog}></Route>
          <Route path="/users" component={PostList}></Route>
        </Switch>
          
      </div>
    </Router>
  )
  
}
export default App



