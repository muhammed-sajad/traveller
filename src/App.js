import './App.css';
import Header from './components/screens/Header';
import styles from 'styled-components';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Place from './components/screens/Place';
import SinglePage from './components/screens/SinglePage';

function App() {
    return (
        <Div>
            <Router>
            <Header />
            <Switch>
                    <Route exact path="/traveller" component={Place} />
                    <Route path="/place/:id" component={SinglePage} />
                </Switch>
            </Router>
        </Div>
    );
}

export default App;

const Div = styles.div`
    width: 93%;
    margin: 10px auto;

`;
