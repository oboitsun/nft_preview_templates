import React, { Component } from 'react'
import ColorPicker from './ColorPicker'
import PatternLibrary from './PatternLibrary'
export default class TemplateEditor extends Component {
  render() {
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
        <label htmlFor='borderWidth'>Header border Radius:</label>
        <input
          name='borderWidth'
          className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128'
          onChange={this.props.changeHeaderBorderRadius}
          defaultValue={this.props.state.headerBorderRadius}
          step='5'
          type='range'
          min='0'
          max='200'
        />
        <ColorPicker
          name='Footer Background'
          function={this.props.changeFooterBackground}
          currentState={this.props.state.footerBackground}
        />
        <label htmlFor='borderWidth'>Footer border Radius:</label>
        <input
          name='borderWidth'
          className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128'
          onChange={this.props.changeFooterBorderRadius}
          defaultValue={this.props.state.footerBorderRadius}
          step='5'
          type='range'
          min='0'
          max='200'
        />
        <ColorPicker
          name='Button Background'
          currentState={this.props.state.button.background}
          function={this.props.changeButtonBack}
        />
        <h3> Header pattern:</h3>
        <PatternLibrary
          changeHeaderPattern={this.props.changeHeaderPattern}
          back={this.props.state.headerBackground}
          color={this.props.state.headerPatternColor}
        />
        <ColorPicker
          name='Header Pattern Color'
          currentState={this.props.state.headerPatternColor}
          function={this.props.changeHeaderPatternColor}
        />
        <h3> Footer pattern:</h3>
        <PatternLibrary
          changeHeaderPattern={this.props.changeFooterPattern}
          back={this.props.state.footerBackground}
          color={this.props.state.footerPatternColor}
        />
        <ColorPicker
          name='Footer Pattern Color'
          currentState={this.props.state.footerPatternColor}
          function={this.props.changeFooterPatternColor}
        />
      </div>
    )
  }
}
