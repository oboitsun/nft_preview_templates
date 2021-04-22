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
      history: [
        {
          vertical: false,
          stepsBack: 0,
          fontFamily: 'Barlow',
          headerTextColor: 'black',
          headerBackground: 'turquoise',
          headerPattern: 'flat',
          headerPatternColor: 'white',
          headerBorderRadius: 2,
          footerTextColor: this.headerTextColor,
          footerPattern: 'flat',
          footerPatternColor: 'white',
          footerBorderRadius: 2,
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
            borderRadius: 2,
            textColor: this.headerTextColor,
          },
        },
      ],
      vertical: false,
      stepsBack: 0,
      fontFamily: 'Barlow',
      headerTextColor: 'black',
      headerBackground: 'turquoise',
      headerPattern: 'flat',
      headerPatternColor: 'white',
      headerBorderRadius: 2,
      footerTextColor: this.headerTextColor,
      footerPattern: 'flat',
      footerPatternColor: 'white',
      footerBorderRadius: 2,
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
        borderRadius: 2,
        textColor: this.headerTextColor,
      },
    }
  }
  changeTemplateType = () => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      vertical: !this.state.vertical,
      history: [...newHistory, { vertical: !this.state.vertical }],
      stepsBack: 0,
    })
  }
  saveEditingStep = (whatChanged, changes) => {
    this.setState({
      ...this.state,
      history: [...this.state.history, { [whatChanged]: changes }],
    })
  }
  undoHistoryStep = () => {
    const lastStep = this.state.history[this.state.history.length - (2 + this.state.stepsBack)]
    // const newHistory = [...this.state.history]
    // newHistory.pop()
    let stepsBack = this.state.stepsBack
    stepsBack++
    this.setState({ ...this.state, ...lastStep, stepsBack: stepsBack })
  }
  redoHistoryStep = () => {
    let stepsBack = this.state.stepsBack
    stepsBack--
    const lastStep = this.state.history[this.state.history.length - this.state.stepsBack]
    console.log(this.state.history[this.state.history.length - this.state.stepsBack])
    this.setState({ ...this.state, ...lastStep, stepsBack: stepsBack })
  }
  trimHistory = () => {
    let stepsBack = this.state.stepsBack
    console.log(stepsBack)
    this.setState({ ...this.state, stepsBack: 0 })
  }
  changeBorderWidth = (event) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      border: { ...this.state.border, width: event.target.value },
      stepsBack: 0,
      history: [...newHistory, { border: { ...this.state.border, width: event.target.value } }],
    })
  }

  changeBorderColor = (color) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      border: { ...this.state.border, color: color.hex },
      history: [...newHistory, { border: { ...this.state.border, color: color.hex } }],
    })
  }
  changeHeaderBorderRadius = (event) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      headerBorderRadius: event.target.value,
      history: [...newHistory, { headerBorderRadius: event.target.value }],
    })
  }
  changeHeaderBackground = (color) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      headerBackground: color.hex,
      history: [...newHistory, { headerBackground: color.hex }],
    })
  }
  changeHeaderPatternColor = (color) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      headerPatternColor: color.hex,
      history: [...newHistory, { headerPatternColor: color.hex }],
    })
  }
  changeHeaderPattern = (pattern) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      headerPattern: pattern,
      history: [...newHistory, { headerPattern: pattern }],
    })
  }
  changeFooterBackground = (color) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      footerBackground: color.hex,
      history: [...newHistory, { footerBackground: color.hex }],
    })
  }
  changeFooterPattern = (pattern) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      footerPattern: pattern,
      history: [...newHistory, { footerPattern: pattern }],
    })
  }
  changeFooterPatternColor = (color) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      footerPatternColor: color.hex,
      history: [...newHistory, { footerPatternColor: color.hex }],
    })
  }
  changeFooterBorderRadius = (event) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      footerBorderRadius: event.target.value,
      history: [...newHistory, { footerBorderRadius: event.target.value }],
    })
  }
  changeButtonBack = (color) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      button: { ...this.state.button, background: color.hex },
      history: [...newHistory, { button: { ...this.state.button, background: color.hex } }],
    })
  }
  changeButtonBorderRadius = (event) => {
    const newHistory = [...this.state.history].slice(0, this.state.stepsBack + 1)
    this.setState({
      ...this.state,
      stepsBack: 0,
      button: { ...this.state.button, borderRadius: event.target.value },
      history: [
        ...newHistory,
        { button: { ...this.state.button, borderRadius: event.target.value } },
      ],
    })
  }
  render() {
    /*horiz-templ is a custom selector put in index */
    return (
      <div className='w-full h-full flex flex-col lg:flex-row'>
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
          saveEditingStep={this.saveEditingStep}
          undoHistoryStep={this.undoHistoryStep}
          redoHistoryStep={this.redoHistoryStep}
          changeTemplateType={this.changeTemplateType}
          changeBorderColor={this.changeBorderColor}
          changeBorderWidth={this.changeBorderWidth}
          changeHeaderBorderRadius={this.changeHeaderBorderRadius}
          changeHeaderBackground={this.changeHeaderBackground}
          changeHeaderPattern={this.changeHeaderPattern}
          changeHeaderPatternColor={this.changeHeaderPatternColor}
          changeFooterBorderRadius={this.changeFooterBorderRadius}
          changeFooterBackground={this.changeFooterBackground}
          changeFooterPattern={this.changeFooterPattern}
          changeFooterPatternColor={this.changeFooterPatternColor}
          changeButtonBack={this.changeButtonBack}
          changeButtonBorderRadius={this.changeButtonBorderRadius}
        />
      </div>
    )
  }
}
