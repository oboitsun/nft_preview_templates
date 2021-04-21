import React, { Component } from 'react'
import { ChromePicker, SliderPicker } from 'react-color'
import ColorPicker from './ColorPicker'
import PatternLibrary from './PatternLibrary'
export default class TemplateEditor extends Component {
  render() {
    console.log(this.props.state)
    return (
      <div className='text-2xl  text-white flex flex-col items-center py-10 lg:absolute top-2 right-4'>
        <div className='h-5 w-full'>
          {this.props.state.history.length > 0 ? (
            <div onClick={this.props.stepBack}>step back</div>
          ) : (
            ''
          )}
        </div>
        <ColorPicker
          name='Border Color'
          function={this.props.changeBorderColor}
          currentState={this.props.state.border.color}
        />
        <label htmlFor='borderWidth'>Border Width:</label>
        <input
          name='borderWidth'
          className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128'
          onChange={this.props.changeBorderWidth}
          defaultValue={this.props.state.border.width}
          step='1'
          type='range'
          min='0'
          max='10'
        />
        <ColorPicker
          name='Header Background'
          function={this.props.changeHeaderBackground}
          currentState={this.props.state.headerBackground}
        />
        <ColorPicker
          name='Footer Background'
          function={this.props.changeFooterBackground}
          currentState={this.props.state.footerBackground}
        />
        <ColorPicker
          name='Button Background'
          currentState={this.props.state.button.background}
          function={this.props.changeButtonBack}
        />
        {/* <ColorPicker
          name='Button Border Color'
          function={this.props.changeButtonBorderColor}
          currentState={this.props.state.button.borderColor}
        /> */}
        {/* <h3> Header pattern:</h3> */}
        {/* <PatternLibrary currentBackground={this.props.state.headerBackground} function={} /> */}
      </div>
    )
  }
}
