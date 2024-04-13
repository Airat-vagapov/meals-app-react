import './assets/styles/reset.css'
import './assets/styles/main.css'

import Header from './components/Header/Header.jsx'
import SearchBlock from './components/SearchBlock/SeacrhBlock.jsx'

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <SearchBlock />
      </div>
    </>
  )
}

export default App
