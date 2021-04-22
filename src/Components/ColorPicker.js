import React, { Component } from 'react'
import { ChromePicker } from 'react-color'
export default class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  handleShowPicker = (event) => {
    this.setState({ ...this.state, show: !this.state.show })
  }
  render() {
    return this.props.vertical ? (
      <div></div>
    ) : (
      <div className='w-full flex-col flex items-center relative'>
        <h3 className=''>{this.props.name}:</h3>
        <div className='p-1 w-3/4 h-10 bg-gray-400 border border-gray-800 rounded-full overflow-hidden'>
          <button
            onClick={this.handleShowPicker}
            style={{ background: this.props.currentState }}
            className='w-full h-full rounded-full focus:outline-none'></button>
        </div>
        {this.state.show && (
          <button
            onBlur={this.handleShowPicker}
            className='w-full p-2 rounded-md absolute transform  translate-y-full -bottom-0 right-10  z-10 focus:outline-none'>
            <ChromePicker
              className='w-full h-auto'
              color={this.props.currentState}
              onChangeComplete={this.props.function}
            />
          </button>
        )}
      </div>
    )
  }
}
