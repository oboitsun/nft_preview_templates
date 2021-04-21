import React, { Component } from 'react'
import '../styles/horizontal-template.css'
import HorizontalHeader from './HorizontalHeader'
import HorizontalFooter from './HorizontalFooter'
import TemplateEditor from './TemplateEditor'
export default class HorizontalTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      history: [],
      fontFamily: 'Barlow',
      headerTextColor: 'black',
      footerTextColor: this.headerTextColor,
      headerBackground: 'turquoise',
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
  saveEditingStep = (whatChanged, changes) => {
    this.setState({
      ...this.state,
      history: [...this.state.history, { [whatChanged]: changes }],
    })
  }
  undoHistoryStep = () => {
    console.log('whoop')

    const lastStep = this.state.history[this.state.history.length - 1]
    const newHistory = [...this.state.history]
    newHistory.pop()
    console.log(lastStep, newHistory)
    this.setState({ ...this.state, ...lastStep, history: newHistory })
  }

  changeBorderWidth = (event) => {
    this.setState({
      ...this.state,
      border: { ...this.state.border, width: event.target.value },
      history: [...this.state.history, { border: { ...this.state.border } }],
    })
    // this.saveEditingStep('border', { ...this.state.border, width: event.target.value })
  }
  changeHeaderBackground = (color) => {
    this.setState({
      ...this.state,
      headerBackground: color.hex,
      history: [...this.state.history, { headerBackground: this.state.headerBackground }],
    })
    // this.saveEditingStep('headerBackground', color.hex)
  }

  changeFooterBackground = (color) => {
    this.setState({
      ...this.state,
      footerBackground: color.hex,
      history: [...this.state.history, { footerBackground: this.state.footerBackground }],
    })
    // this.saveEditingStep('footerBackground', color.hex)
  }
  changeBorderColor = (color) => {
    this.setState({
      ...this.state,
      border: { ...this.state.border, color: color.hex },
      history: [...this.state.history, { border: { ...this.state.border } }],
    })
    // this.saveEditingStep('border', { ...this.state.border, color: color.hex })
  }
  // changeButtonBorderColor = (color) => {
  //   this.setState({ ...this.state, button: { ...this.state.button, borderColor: color.hex } })
  // }
  changeButtonBack = (color) => {
    this.setState({
      ...this.state,
      button: { ...this.state.button, background: color.hex },
      history: [...this.state.history, { button: { ...this.state.button } }],
    })
    // this.saveEditingStep('button', { ...this.state.button, background: color.hex })
  }

  render() {
    /*horiz-templ is a custom selector put in index */
    return (
      <>
        <div
          className='mx-auto w-1/2 horiz-templ flex rounded-2xl flex-col p-0 overflow-hidden'
          style={{
            backgroundColor: this.state.border.color,
            fontFamily: this.state.fontFamily,
            border: `${this.state.border.width}px solid ${this.state.border.color} `,
          }}>
          <HorizontalHeader
            textColor={this.state.headerTextColor}
            background={this.state.headerBackground}
          />
          <section className='w-full h-96 flex flex-grow bg-gray-700 '></section>
          <HorizontalFooter
            button={this.state.button}
            textColor={this.state.footerTextColor}
            background={this.state.footerBackground}
          />
        </div>
        <TemplateEditor
          state={this.state}
          saveEditingStep={this.saveEditingStep}
          stepBack={this.undoHistoryStep}
          changeHeaderTextColor={this.changeHeaderTextColor}
          changeHeaderBackground={this.changeHeaderBackground}
          changeBorderColor={this.changeBorderColor}
          changeBorderWidth={this.changeBorderWidth}
          changeFooterBackground={this.changeFooterBackground}
          changeFooterTextColor={this.changeFooterTextColor}
          changeButtonBorderWidth={this.changeButtonBorderWidth}
          changeButtonBorderColor={this.changeButtonBorderColor}
          changeButtonBack={this.changeButtonBack}
          changeButtonTextColor={this.changeButtonTextColor}
        />
      </>
    )
  }
}
