import Header from './components/header'
import Content from './components/content'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return(<Router>
    <Header/>
    <Content/>
  </Router>);
}

export default App;
