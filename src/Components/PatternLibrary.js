import React, { Component } from 'react'

export default class PatternLibrary extends Component {
  render() {
    return (
      <div>
        {' '}
        <div>
          <button
            onClick={(event) => {
              this.props.function(event.target.style.background, true)
            }}
            style={{
              opacity: 1,
              background: `repeating-linear-gradient( 45deg, #919191, #919191 4.5px, ${this.props.currentBackground} 4.5px, ${this.props.currentBackground} 22.5px )`,
            }}
            className='w-10 h-10 rounded'></button>
        </div>
      </div>
    )
  }
}
