import './App.css';
import { Provider } from "react-redux";
import Base from './component/common/base/Base';
import VocabHome from './component/home/VocabHome';
import  {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import IndividualWord from './component/common/individual-word/IndividualWord';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Base>
        <Router>
          <Switch>
            <Route path = "/" exact component={VocabHome} />
            <Route path = "/individual-word" exact component={IndividualWord} />
          </Switch>
        </Router>
      </Base>
     </Provider>
  );
}

export default App;
