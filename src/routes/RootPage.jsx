

import Header from '/src/components/Header/Header.jsx'
import SearchBlock from '/src/components/SearchBlock/SeacrhBlock.jsx'

function RootPage() {
  return (
    <>
      <Header />
      <div className='main'>
        <SearchBlock />
      </div>
    </>
  )
}

export default RootPage
