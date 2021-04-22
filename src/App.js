import React from 'react'
import './App.css'
import HorizontalTemplate from './Components/HorizontalTemplate'

class App extends React.Component {
  render() {
    return (
      <>
        {/* <div style={{ position: 'absolute', top: 0, left: 0, color: 'white' }}>
          {window.innerWidth}
        </div> */}
        <div className='App py-5 lg:py-10'>
          <HorizontalTemplate />
        </div>
      </>
    )
  }
}

export default App
