import React, { Component } from 'react'
import ColorPicker from './ColorPicker'
import PatternLibrary from './PatternLibrary'
export default class TemplateEditor extends Component {
  render() {
    return (
      <div className='text-2xl  text-white flex  flex-col items-center  px-10  top-2 right-4'>
        <div className='h-15 w-full flex mb-2'>
          {this.props.state.history.length > this.props.state.stepsBack + 1 ? (
            <button
              className='w-1/2 px-4 py-2 rounded-full border focus:outline-none mr-1 '
              onClick={this.props.undoHistoryStep}>
              Undo
            </button>
          ) : (
            <div className='h-12 w-full px-4 py-2  ' o></div>
          )}
          {this.props.state.stepsBack > 0 ? (
            <button
              className='w-1/2 px-4 py-2 rounded-full border focus:outline-none mr-1 '
              onClick={this.props.redoHistoryStep}>
              Redo
            </button>
          ) : (
            <div className='h-12 w-full px-4 py-2  ' o></div>
          )}
        </div>

        <button
          className='h-15 w-full px-4 py-2 rounded-full border focus:outline-none'
          onClick={this.props.changeTemplateType}>
          {this.props.state.vertical ? 'horizontal' : 'vertical'}
        </button>
        <ColorPicker
          name='Border Color'
          function={this.props.changeBorderColor}
          currentState={this.props.state.border.color}
        />
        <label htmlFor='borderWidth'>Border Width:</label>
        <input
          name='borderWidth'
          className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 mt-1'
          onChange={this.props.changeBorderWidth}
          defaultValue={this.props.state.border.width}
          step='2'
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
          className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 mt-1'
          onChange={this.props.changeHeaderBorderRadius}
          defaultValue={this.props.state.headerBorderRadius}
          step='10'
          type='range'
          min='0'
          max='100'
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

        <ColorPicker
          vertical={this.props.state.vertical}
          name='Footer Background'
          function={this.props.changeFooterBackground}
          currentState={this.props.state.footerBackground}
        />

        {!this.props.state.vertical && (
          <>
            <label htmlFor='borderWidth'>Footer border Radius:</label>
            <input
              name='borderWidth'
              className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 mt-1'
              onChange={this.props.changeFooterBorderRadius}
              defaultValue={this.props.state.footerBorderRadius}
              step='10'
              type='range'
              min='0'
              max='100'
            />
          </>
        )}
        {!this.props.state.vertical && (
          <>
            <h3> Footer pattern:</h3>
            <PatternLibrary
              changeHeaderPattern={this.props.changeFooterPattern}
              back={this.props.state.footerBackground}
              color={this.props.state.footerPatternColor}
            />
          </>
        )}

        <ColorPicker
          vertical={this.props.state.vertical}
          name='Footer Pattern Color'
          currentState={this.props.state.footerPatternColor}
          function={this.props.changeFooterPatternColor}
        />
        <ColorPicker
          name='Button Background'
          currentState={this.props.state.button.background}
          function={this.props.changeButtonBack}
        />
        <>
          <label htmlFor='borderWidth'>Button border Radius:</label>
          <input
            name='borderWidth'
            className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 mt-1'
            onChange={this.props.changeButtonBorderRadius}
            defaultValue={this.props.state.button.borderRadius}
            step='5'
            type='range'
            min='0'
            max='30'
          />
        </>
      </div>
    )
  }
}
