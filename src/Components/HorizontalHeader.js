import React, { Component } from 'react'

export default class HorizontalHeader extends Component {
  render() {
    const patterns = {
      flat: {
        opacity: 1,
        background: 'transparent',
      },

      dotted: {
        opacity: 1,
        backgroundImage: `radial-gradient(${this.props.headerPatternColor} 1px, transparent 1px), radial-gradient(${this.props.headerPatternColor} 1px, transparent 1px)`,
        backgroundSize: '5px 5px',
        backgroundPosition: '0 0,2.5px 2.5px',
      },
      lined: {
        opacity: 1,
        background: `repeating-linear-gradient( 45deg, ${this.props.headerPatternColor} , ${this.props.headerPatternColor} 2px, transparent 2px, transparent 10px)`,
      },
      gradient: {
        opacity: 1,
        backgroundImage: `linear-gradient(180deg, ${this.props.headerPatternColor} 0%, rgba(8,19,35,0) 100%)`,
      },
    }
    return (
      <div
        style={{
          background: this.props.background,
          color: this.props.textColor,
          borderTopRightRadius: `${this.props.headerBorderRadius}px`,
          borderTopLeftRadius: `${this.props.headerBorderRadius}px`,
        }}
        className='w-full p-2 sm:py-12 sm:px-10 flex justify-between items-center relative '>
        <div className='w-5 h-5 lg:w-16 lg:h-16 rounded-full bg-red-400 sm:mr-5 z-10'></div>
        <div className='flex flex-col items-start mr-auto z-10'>
          <span className='lg:text-2xl leading-none'>Olive Allen</span>
          <span className='lg:text-3xl leading-none'>“A piece of Something”</span>
        </div>
        <div className='flex items-center self-end  z-10'>
          <span className='w-3 h-2 lg:w-6 lg:h-5 mr-1 fill-current'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.83 19.45'>
              <g id='Layer_2' data-name='Layer 2'>
                <g id='Layer_2-2' data-name='Layer 2'>
                  <path d='M6,0A6,6,0,0,0,1.75,1.74a5.88,5.88,0,0,0,0,8.37l9.12,9.12a.77.77,0,0,0,1,0l0,0,9.14-9.11a5.88,5.88,0,0,0,0-8.37,6.05,6.05,0,0,0-8.51,0L11.41,2.9,10.26,1.74A6,6,0,0,0,6,0ZM6,1.36A4.49,4.49,0,0,1,9.19,2.69l1.7,1.7a.76.76,0,0,0,1,0l0,0L13.64,2.7A4.47,4.47,0,0,1,20,2.7a4.56,4.56,0,0,1,0,6.46c-2.87,2.86-5.73,5.73-8.6,8.58L2.82,9.15a4.56,4.56,0,0,1,0-6.46A4.49,4.49,0,0,1,6,1.36Z' />
                </g>
              </g>
            </svg>
          </span>
          <span className='lg:text-2xl'>40</span>
        </div>
        <div
          style={{
            ...patterns[this.props.headerPattern],
            borderTopRightRadius: `${this.props.headerBorderRadius}px`,
            borderTopLeftRadius: `${this.props.headerBorderRadius}px`,
          }}
          className='w-full h-full absolute left-0 top-0 z-0'></div>
      </div>
    )
  }
}
