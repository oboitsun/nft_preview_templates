changeButtonBorderWidth = (event) => {
  this.setState({
    ...this.state,
    button: { ...this.state.button, borderWidth: `${event.target.value}px` },
  })
  this.saveEditingStep('button', { ...this.state.button, borderWidth: `${event.target.value}px` })
}

changeButtonTextColor = (color) => {
  this.setState({ ...this.state, button: { ...this.state.button, textColor: color.hex } })
}

changeHeaderTextColor = (color) => {
  this.setState({ ...this.state, headerTextColor: color.hex })
}
changeFooterTextColor = (color) => {
  this.setState({ ...this.state, footerTextColor: color.hex })
}
