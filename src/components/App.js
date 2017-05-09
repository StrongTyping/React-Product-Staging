import React from 'react';

import '../styles/app.css';
import '../styles/main.less';
import img1 from '../images/1.png';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
)
export default BasicExample


/*const App = () => (
    <div>
        <h1 className="app">Hello, App</h1>
        <img className="img1" src={img1}/>
        <img src={require("../images/3.jpg")} />
    </div>
);

export default App;*/

/*import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import router from '../routers/router.js';

const App = () => (<Router routes={router}/>);

export default App;*/
