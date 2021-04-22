import React, { Component } from 'react'
import '../styles/horizontal-template.css'
import HorizontalHeader from './HorizontalHeader'
import HorizontalFooter from './HorizontalFooter'
import TemplateEditor from './TemplateEditor'
import VerticalBlock from './VerticalBlock'
export default class HorizontalTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vertical: false,
      history: [],
      fontFamily: 'Barlow',
      headerTextColor: 'black',
      headerBackground: 'turquoise',
      headerPattern: 'flat',
      headerPatternColor: 'white',
      headerBorderRadius: 20,
      footerTextColor: this.headerTextColor,
      footerPattern: 'flat',
      footerPatternColor: 'white',
      footerBorderRadius: 0,
      footerBackground: 'yellow',
      border: {
        color: 'green',
        width: 10,
      },
      button: {
        background: 'turquoise',
        border: true,
        borderColor: '#408ce0',
        borderWidth: '1px',
        textColor: this.headerTextColor,
      },
    }
  }
  changeTemplateType = () => {
    this.setState({
      ...this.state,
      vertical: !this.state.vertical,
      history: [...this.state.history, { vertical: this.state.vertical }],
    })
  }
  saveEditingStep = (whatChanged, changes) => {
    this.setState({
      ...this.state,
      history: [...this.state.history, { [whatChanged]: changes }],
    })
  }
  undoHistoryStep = () => {
    const lastStep = this.state.history[this.state.history.length - 1]
    const newHistory = [...this.state.history]
    newHistory.pop()
    this.setState({ ...this.state, ...lastStep, history: newHistory })
  }

  changeBorderWidth = (event) => {
    this.setState({
      ...this.state,
      border: { ...this.state.border, width: event.target.value },
      history: [...this.state.history, { border: { ...this.state.border } }],
    })
  }
  changeHeaderBorderRadius = (event) => {
    this.setState({
      ...this.state,
      headerBorderRadius: event.target.value,
      history: [...this.state.history, { headerBorderRadius: this.state.headerBorderRadius }],
    })
  }
  changeHeaderBackground = (color) => {
    this.setState({
      ...this.state,
      headerBackground: color.hex,
      history: [...this.state.history, { headerBackground: this.state.headerBackground }],
    })
  }
  changeFooterBorderRadius = (event) => {
    this.setState({
      ...this.state,
      footerBorderRadius: event.target.value,
      history: [...this.state.history, { footerBorderRadius: this.state.footerBorderRadius }],
    })
  }
  changeFooterBackground = (color) => {
    this.setState({
      ...this.state,
      footerBackground: color.hex,
      history: [...this.state.history, { footerBackground: this.state.footerBackground }],
    })
  }
  changeBorderColor = (color) => {
    this.setState({
      ...this.state,
      border: { ...this.state.border, color: color.hex },
      history: [...this.state.history, { border: { ...this.state.border } }],
    })
  }
  changeButtonBack = (color) => {
    this.setState({
      ...this.state,
      button: { ...this.state.button, background: color.hex },
      history: [...this.state.history, { button: { ...this.state.button } }],
    })
  }
  changeHeaderPattern = (pattern) => {
    this.setState({
      ...this.state,
      headerPattern: pattern,
      history: [...this.state.history, { headerPattern: this.state.headerPattern }],
    })
  }
  changeHeaderPatternColor = (color) => {
    this.setState({
      ...this.state,
      headerPatternColor: color.hex,
      history: [...this.state.history, { headerPatternColor: this.state.headerPatternColor }],
    })
  }
  changeFooterPattern = (pattern) => {
    this.setState({
      ...this.state,
      footerPattern: pattern,
      history: [...this.state.history, { footerPattern: this.state.footerPattern }],
    })
  }
  changeFooterPatternColor = (color) => {
    this.setState({
      ...this.state,
      footerPatternColor: color.hex,
      history: [...this.state.history, { footerPatternColor: this.state.footerPatternColor }],
    })
  }
  render() {
    /*horiz-templ is a custom selector put in index */
    return (
      <>
        {!this.state.vertical && (
          <div
            className='mx-auto w-1/2 horiz-templ flex rounded-2xl flex-col p-0 overflow-hidden mb-10'
            style={{
              backgroundColor: this.state.border.color,
              fontFamily: this.state.fontFamily,
              border: `${this.state.border.width}px solid ${this.state.border.color} `,
            }}>
            <HorizontalHeader
              headerBorderRadius={this.state.headerBorderRadius}
              headerPatternColor={this.state.headerPatternColor}
              headerPattern={this.state.headerPattern}
              textColor={this.state.headerTextColor}
              background={this.state.headerBackground}
            />
            <section className='w-full h-96 flex flex-grow bg-gray-700 '></section>
            <HorizontalFooter
              footerBorderRadius={this.state.footerBorderRadius}
              footerPatternColor={this.state.footerPatternColor}
              footerPattern={this.state.footerPattern}
              button={this.state.button}
              textColor={this.state.footerTextColor}
              background={this.state.footerBackground}
            />
          </div>
        )}
        {this.state.vertical && (
          <div
            className='mx-auto w-1/2 horiz-templ flex rounded-2xl flex-col p-0 overflow-hidden'
            style={{
              backgroundColor: this.state.border.color,
              fontFamily: this.state.fontFamily,
              border: `${this.state.border.width}px solid ${this.state.border.color} `,
            }}>
            <VerticalBlock
              headerBorderRadius={this.state.headerBorderRadius}
              headerPatternColor={this.state.headerPatternColor}
              headerPattern={this.state.headerPattern}
              textColor={this.state.headerTextColor}
              background={this.state.headerBackground}
              button={this.state.button}
            />
          </div>
        )}
        <TemplateEditor
          state={this.state}
          changeTemplateType={this.changeTemplateType}
          saveEditingStep={this.saveEditingStep}
          stepBack={this.undoHistoryStep}
          changeHeaderBorderRadius={this.changeHeaderBorderRadius}
          changeFooterBorderRadius={this.changeFooterBorderRadius}
          changeHeaderBackground={this.changeHeaderBackground}
          changeHeaderPattern={this.changeHeaderPattern}
          changeHeaderPatternColor={this.changeHeaderPatternColor}
          changeBorderColor={this.changeBorderColor}
          changeBorderWidth={this.changeBorderWidth}
          changeFooterBackground={this.changeFooterBackground}
          changeFooterPattern={this.changeFooterPattern}
          changeFooterPatternColor={this.changeFooterPatternColor}
          changeButtonBack={this.changeButtonBack}
        />
      </>
    )
  }
}
