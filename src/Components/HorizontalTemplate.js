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
      history: [],
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
        borderWidth: '5px',
        borderRadius: 2,
        textColor: this.headerTextColor,
      },
    }
  }
  changeTemplateType = () => {
    const newHistory = this.state.history
    this.setState({
      ...this.state,
      vertical: !this.state.vertical,
      history: [...this.state.history, { vertical: this.state.vertical }],
      stepsBack: 0,
    })
  }

  undoHistoryStep = () => {
    const lastStep = this.state.history[this.state.history.length - 1]
    const newHistory = [...this.state.history]
    newHistory.pop()
    let stepsBack = this.state.stepsBack
    this.setState({
      ...this.state,
      history: newHistory,
      ...lastStep,
      stepsBack: stepsBack,
    })
  }
  redoHistoryStep = () => {
    // let stepsBack = this.state.stepsBack
    // --stepsBack
    // const lastStep = this.state.history[this.state.history.length - this.state.stepsBack]
    // console.log(lastStep)
    // this.setState({ ...this.state, ...lastStep, stepsBack: stepsBack })
  }

  changeBorderWidth = (event) => {
    const newHistory = this.state.history
    this.setState({
      ...this.state,
      border: { ...this.state.border, width: event.target.value },
      stepsBack: 0,
      history: [...this.state.history, { border: { ...this.state.border } }],
    })
  }

  changeBorderColor = (color) => {
    const newHistory = this.state.history
    this.setState({
      ...this.state,
      stepsBack: 0,
      border: { ...this.state.border, color: color.hex },
      history: [...this.state.history, { border: { ...this.state.border } }],
    })
  }
  changeHeaderBorderRadius = (event) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      headerBorderRadius: event.target.value,
      history: [...this.state.history, { headerBorderRadius: this.state.headerBorderRadius }],
    })
  }
  changeHeaderBackground = (color) => {
    // const newHistory = this.state.history
    this.setState({
      ...this.state,
      stepsBack: 0,
      headerBackground: color.hex,
      history: [...this.state.history, { headerBackground: this.state.headerBackground }],
    })
  }
  changeHeaderPatternColor = (color) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      headerPatternColor: color.hex,
      history: [...this.state.history, { headerPatternColor: this.state.headerPatternColor }],
    })
  }
  changeHeaderPattern = (pattern) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      headerPattern: pattern,
      history: [...this.state.history, { headerPattern: this.state.headerPattern }],
    })
  }
  changeFooterBackground = (color) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      footerBackground: color.hex,
      history: [...this.state.history, { footerBackground: this.state.footerBackground }],
    })
  }
  changeFooterPattern = (pattern) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      footerPattern: pattern,
      history: [...this.state.history, { footerPattern: this.state.footerPattern }],
    })
  }
  changeFooterPatternColor = (color) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      footerPatternColor: color.hex,
      history: [...this.state.history, { footerPatternColor: this.state.footerPatternColor }],
    })
  }
  changeFooterBorderRadius = (event) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      footerBorderRadius: event.target.value,
      history: [...this.state.history, { footerBorderRadius: this.state.footerBorderRadius }],
    })
  }
  changeButtonBack = (color) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      button: { ...this.state.button, background: color.hex },
      history: [...this.state.history, { button: { ...this.state.button } }],
    })
  }
  changeButtonBorderColor = (color) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      button: { ...this.state.button, borderColor: color.hex },
      history: [...this.state.history, { button: { ...this.state.button } }],
    })
  }
  changeButtonBorderRadius = (event) => {
    /* const newHistory = this.state.history.slice(
      0,
      this.state.history.length - (this.state.stepsBack - 1)
    ) */
    this.setState({
      ...this.state,
      stepsBack: 0,
      button: { ...this.state.button, borderRadius: event.target.value },
      history: [...this.state.history, { button: { ...this.state.button } }],
    })
  }
  render() {
    /*horiz-templ is a custom selector put in index */
    return (
      <div className='w-full h-full flex flex-col lg:flex-row'>
        {!this.state.vertical && (
          <div className='w-full relative rounded-2xl overflow-hidden'>
            <div
              className='mx-auto  horizontal-template  flex rounded-2xl flex-col p-0 overflow-hidden mb-10'
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
              <section className='horizontal-ratio w-full  flex flex-grow bg-gray-700 '>
                <iframe
                  className='absolute top-0 w-full h-full border-none'
                  src='https://www.youtube.com/embed/KS9fsToCwWo'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </section>
              <HorizontalFooter
                footerBorderRadius={this.state.headerBorderRadius}
                footerPatternColor={this.state.footerPatternColor}
                footerPattern={this.state.footerPattern}
                button={this.state.button}
                textColor={this.state.footerTextColor}
                background={this.state.footerBackground}
              />
            </div>
          </div>
        )}
        {this.state.vertical && (
          <div
            className='vertical-template mx-auto h-auto max-h-full flex rounded-2xl flex-col p-0 overflow-hidden'
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
              sideBackground={this.state.footerBackground}
              button={this.state.button}
            />
          </div>
        )}
        <TemplateEditor
          state={this.state}
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
          changeButtonBorderColor={this.changeButtonBorderColor}
          changeButtonBorderRadius={this.changeButtonBorderRadius}
        />
      </div>
    )
  }
}
