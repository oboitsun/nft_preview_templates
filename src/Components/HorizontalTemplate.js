import React, { Component } from 'react'
import '../styles/horizontal-template.css'
import HorizontalHeader from './HorizontalHeader'
import HorizontalFooter from './HorizontalFooter'
import TemplateEditor from './TemplateEditor'
export default class HorizontalTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontFamily: 'Barlow',
      headerTextColor: '#408ce0',
      footerTextColor: '#408ce0',
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
        textColor: '#6940e0',
      },
    }
  }
  chageFontFamily = () => {
    this.setState({ ...this.state, fontFamily: 'sans-serif' })
  }

  changeBorderWidth = (event) => {
    this.setState({
      ...this.state,
      border: { ...this.state.border, width: event.target.value },
    })
  }
  changeBorderColor = (color) => {
    this.setState({ ...this.state, border: { ...this.state.border, color: color.hex } })
  }
  changeButtonBorderWidth = (event) => {
    this.setState({
      ...this.state,
      button: { ...this.state.button, borderWidth: `${event.target.value}px` },
    })
  }
  changeButtonBorderColor = (color) => {
    this.setState({ ...this.state, button: { ...this.state.button, borderColor: color.hex } })
  }
  changeButtonBack = (color) => {
    this.setState({ ...this.state, button: { ...this.state.button, background: color.hex } })
  }
  changeButtonTextColor = (color) => {
    console.log(color)
    this.setState({ ...this.state, button: { ...this.state.button, textColor: color.hex } })
  }
  changeHeaderTextColor = (color) => {
    this.setState({ ...this.state, headerTextColor: color.hex })
  }
  changeHeaderBackground = (color, pattern = false) => {
    console.log(color)
    if (pattern) {
      console.log(pattern)
      return this.setState({ ...this.state, headerBackground: color })
    }
    if (!pattern) {
      return this.setState({ ...this.state, headerBackground: color.hex })
    }
  }
  changeFooterTextColor = (color) => {
    this.setState({ ...this.state, footerTextColor: color.hex })
  }
  changeFooterBackground = (color, props) => {
    this.setState({ ...this.state, footerBackground: color.hex })
  }

  render() {
    console.log(this.state.border.width)
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
