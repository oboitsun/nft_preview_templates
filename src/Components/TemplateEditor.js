import React, { Component } from 'react'
import { GithubPicker, SliderPicker } from 'react-color'
export default class TemplateEditor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='text-2xl text-white flex flex-col items-center py-10 lg:absolute top-2 right-4'>
        <h3 className=''>Border Color:</h3>
        <div className='w-80 p-4 bg-gray-50 rounded-2xl border border-gray-600'>
          <SliderPicker
            className='w-full h-auto'
            color={this.props.state.border.color}
            onChangeComplete={this.props.changeBorderColor}
          />
        </div>
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
        <h3 className=''>Header text color:</h3>
        <div className='w-80 p-4 bg-gray-50 rounded-2xl border border-gray-600'>
          <SliderPicker
            className='w-full h-auto'
            color={this.props.state.headerTextColor}
            onChangeComplete={this.props.changeHeaderTextColor}
          />
        </div>
        <h3 className=''>Header background:</h3>
        <div className='w-80 p-4 bg-gray-50 rounded-2xl border border-gray-600'>
          <SliderPicker
            className='w-full h-auto'
            color={this.props.state.headerBackground}
            onChangeComplete={(color) => {
              this.props.changeHeaderBackground(color, false)
            }}
          />
        </div>
        <h3 className=''>Footer text color:</h3>
        <div className='w-80 p-4 bg-gray-50 rounded-2xl border border-gray-600'>
          <SliderPicker
            className='w-full h-auto'
            color={this.props.state.footerTextColor}
            onChangeComplete={this.props.changeFooterTextColor}
          />
        </div>
        <h3 className=''>Footer background:</h3>
        <div className='w-80 p-4 bg-gray-50 rounded-2xl border border-gray-600'>
          <SliderPicker
            className='w-full h-auto'
            color={this.props.state.footerBackground}
            onChangeComplete={this.props.changeFooterBackground}
          />
        </div>
        <label htmlFor='borderWidth'>Button border Width:</label>
        <input
          name='borderWidth'
          className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128'
          onChange={this.props.changeButtonBorderWidth}
          defaultValue='0'
          step='1'
          type='range'
          min='0'
          max='10'
        />
        <h3 className=''>Button background:</h3>
        <div className='w-80 p-4 bg-gray-50 rounded-2xl border border-gray-600'>
          <SliderPicker
            className='w-full h-auto'
            color={this.props.state.button.background}
            onChangeComplete={this.props.changeButtonBack}
          />
        </div>
        <h3 className=''>Button border background:</h3>
        <div className='w-80 p-4 bg-gray-50 rounded-2xl border border-gray-600'>
          <SliderPicker
            className='w-full h-auto'
            color={this.props.state.button.borderColor}
            onChangeComplete={this.props.changeButtonBorderColor}
          />
        </div>
        <h3 className=''>Button text color:</h3>
        <div className='w-80 p-4 bg-gray-50 rounded-2xl border border-gray-600'>
          <SliderPicker
            className='w-full h-auto'
            color={this.props.state.button.textColor}
            onChangeComplete={this.props.changeButtonTextColor}
          />
        </div>
        <h3> Header pattern:</h3>
        <div>
          <button
            onClick={(event) => {
              this.props.changeHeaderBackground(event.target.style.background, true)
            }}
            style={{
              opacity: 1,
              background: `repeating-linear-gradient( 45deg, #919191, #919191 4.5px, ${this.props.state.headerBackground} 4.5px, ${this.props.state.headerBackground} 22.5px )`,
            }}
            className='w-10 h-10 rounded'></button>
        </div>
      </div>
    )
  }
}
