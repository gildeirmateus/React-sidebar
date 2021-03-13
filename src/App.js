import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import Home from './pages/Home.js';
import Info from './pages/Info.js';
import Contato from './pages/Contato.js';
import Messages from './pages/Messages.js';
import Team from './pages/Team.js';


function App() {
  return (
      <Router>
        <Sidebar/>
          <Switch>
            <Route path= '/home' exact component={Home}/>
            <Route path= '/info' exact component ={Info}/>
            <Route path= '/contato' exact component ={Contato}/>
            <Route path= '/messages' exact component ={Messages}/>
            <Route path= '/team' exact component ={Team}/>


          </Switch>
      </Router>
  );
}

export default App;
