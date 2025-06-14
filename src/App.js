import './App.css';
import NavigationConstantHeader from './NavigationConstantHeader';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from './NotFound';
import ProtoFunctionAnalysisPage from './ProtoFunctionAnalysisPage';

function App() {

  // User information 
  const user = { // convert to state hook, and pass this along everywhere. wouldn't this be common coupling?
    name: "Novice",
    progress: [
      {"foo1": [false, false, false, false, false, false, false, false]}],
    attempts: 0
  }; 

  // TODO: test. 
  // function updateUserInformation

  // function 

  return (
    <Router>
      <div className="App">
        <div className="constant-top">
          <NavigationConstantHeader user={user} />
        </div>
      </div>

      <div className="main-content" style={{marginTop: "80px"}}>

        <Switch>
        <Route exact path="/"> 
        {/**The default page  */}   
        <ProtoFunctionAnalysisPage /> 
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
