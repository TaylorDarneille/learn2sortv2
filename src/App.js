import './App.css'

// data
import SORTS from './SORTS.js'

// components
import Navigation from './components/Nav.js'
import SortPage from './components/SortPage.js'
import Home from './components/Home.js'

// hooks
import { useState } from 'react'

function App() {
  const [sort, setSort] = useState(-1)

  const main = this.state.sort === -1 ? <Home /> : <h1>{SORTS.sorts[this.state.sort].title}</h1>
  // const main = this.state.sort === -1 ? <Home /> : <SortPage sort={SORTS.sorts[this.state.sort]} />
  return (
    <div className="App">
        <Navigation selectSort={this.selectSort} sort={SORTS.sorts[this.state.sort]} />
        {main}
    </div>
  );
}

export default App;
