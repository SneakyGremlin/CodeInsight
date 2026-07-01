// import './App.css'; App.css is not used - all styling is inside index.css
import NavigationConstantHeader from './NavigationConstantHeader';
import Footer from './Footer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from './NotFound';
import Home from './Home';
import ProblemPage from './ProblemPage';

function App() {

  // User information 
  const user = { // TODO: convert to state hook, and pass this along everywhere. wouldn't this be common coupling?
    name: "Novice",
    progress: [
      {"foo1": [false, false, false, false, false, false, false, false]}],
    attempts: 0
  }; 

  // TODO: at present, the user's state is not persisted whatsoever. Either Redux or JSONServer would be used if at all.

  return (
    <Router>
      <div className="App">
        <header className="constant-top">
          <NavigationConstantHeader user={user} />
        </header>

        <main className="page-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/problem/:problemId">
              <ProblemPage />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
