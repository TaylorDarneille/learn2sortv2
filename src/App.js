import './App.css';

//importing sort data
import SORTS from './SORTS.js'

//importing components
import Navigation from './components/Nav.js';
import SortPage from './components/SortPage.js';
import Home from './components/Home.js';
import { useState } from 'react';

function App() {
  const [sort, setSort] = useState(-1)

  const main = this.state.sort === -1 ? <Home /> : <SortPage sort={SORTS.sorts[this.state.sort]} />
  return (
    <div className="App">
        <Navigation selectSort={this.selectSort} sort={SORTS.sorts[this.state.sort]} />
        {main}
    </div>
  );
}

export default App;
