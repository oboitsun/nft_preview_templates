import React, { Component } from 'react'
import TimeLeft from './icons/timeLeft'
import Star from './icons/Star'
export default class VerticalBlock extends Component {
  render() {
    const patterns = {
      flat: {
        opacity: 1,
        background: 'transparent',
      },

      dotted: {
        opacity: 0.4,
        backgroundImage: `radial-gradient(${this.props.headerPatternColor} 1px, transparent 1px), radial-gradient(${this.props.headerPatternColor} 1px, transparent 1px)`,
        backgroundSize: '5px 5px',
        backgroundPosition: '0 0,2.5px 2.5px',
      },
      lined: {
        opacity: 0.4,
        background: `repeating-linear-gradient( 45deg, ${this.props.headerPatternColor} , ${this.props.headerPatternColor} 2px, transparent 2px, transparent 10px)`,
      },
      gradient: {
        opacity: 0.8,
        backgroundImage: `linear-gradient(180deg, ${this.props.headerPatternColor} 0%, rgba(8,19,35,0) 100%)`,
      },
    }

    return (
      <div
        style={{
          background: this.props.background,
          color: this.props.textColor,
          borderTopRightRadius: `${this.props.headerBorderRadius}px`,
          borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
        }}
        className='w-full h-full  flex  justify-between items-center relative overflow-hidden '>
        <div
          style={{ background: this.props.sideBackground }}
          className='absolute top-0 left-0 h-full w-24 bg-red-900'></div>
        <section className='vertical-ratio w-1/2 flex flex-grow bg-gray-700 ml-10 mr-10 z-10'>
          <iframe
            className='absolute top-0 w-full h-full '
            src='https://www.youtube.com/embed/tCCY31XxN_Y'
            frameBorder='0'
            allowFullScreen=''></iframe>
        </section>
        <div className='w-1/2 h-full z-10  flex flex-col  justify-between ml-2 sm:py-12 pr-2 sm:pr-5 lg:pr-10'>
          <div className='flex items-center'>
            <div className='w-10 h-10 rounded-full bg-red-400 sm:mr-5 z-10 flex-shrink-0'></div>
            <div className='flex flex-col items-start justify-between mr-auto z-10'>
              <span className='text-2xl leading-none mix-blend-difference'>Olive Allen</span>
              <span className='text-3xl text-left leading-none'>“A piece of Something”</span>
            </div>
          </div>
          <div className='flex items-center  z-10'>
            <span className='w-6 h-5 mr-1 fill-current'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.83 19.45'>
                <g id='Layer_2' data-name='Layer 2'>
                  <g id='Layer_2-2' data-name='Layer 2'>
                    <path d='M6,0A6,6,0,0,0,1.75,1.74a5.88,5.88,0,0,0,0,8.37l9.12,9.12a.77.77,0,0,0,1,0l0,0,9.14-9.11a5.88,5.88,0,0,0,0-8.37,6.05,6.05,0,0,0-8.51,0L11.41,2.9,10.26,1.74A6,6,0,0,0,6,0ZM6,1.36A4.49,4.49,0,0,1,9.19,2.69l1.7,1.7a.76.76,0,0,0,1,0l0,0L13.64,2.7A4.47,4.47,0,0,1,20,2.7a4.56,4.56,0,0,1,0,6.46c-2.87,2.86-5.73,5.73-8.6,8.58L2.82,9.15a4.56,4.56,0,0,1,0-6.46A4.49,4.49,0,0,1,6,1.36Z' />
                  </g>
                </g>
              </svg>
            </span>
            <span className='sm:text-2xl'>40</span>
          </div>
          <div className='flex flex-col justify-between z-10'>
            <div className='flex flex-col items-start mb-4'>
              <span className='font-semibold uppercase text-xl leading-none'>Category:</span>
              <span className='lowercase tracking-wide text-3xl leading-none'>sports</span>
            </div>
            <div className='flex flex-col items-start mb-4'>
              <span className='font-semibold uppercase text-xl'>highest bid:</span>
              <span className='lowercase tracking-wide text-3xl leading-none'>$3000</span>
            </div>
            <div className='flex flex-col items-start '>
              <span className='font-semibold uppercase text-xl leading-none'>series number:</span>
              <span className='lowercase tracking-wide text-3xl'>1 of 24</span>
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <span className='text-2xl tracking-tighter flex items-center mb-4'>
              <span className='w-8 h-8 mr-1'>
                <TimeLeft />
              </span>
              33 minutes left
            </span>
            <button
              style={{
                color: this.props.button.textColor,
                background: this.props.button.background,
                borderRadius: `${this.props.button.borderRadius}px`,
                border: this.props.button.border
                  ? `${this.props.button.borderWidth} solid ${this.props.button.borderColor}`
                  : 'none',
              }}
              className='uppercase outline-none border rounded-lg border-gray-900 py-5 px-10 font-semibold leading-none mb-2'>
              go to auction
            </button>
            <div className='flex items-center justify-end'>
              <Star /> <span className='ml-2 font-semibold text-xl'>@</span>
            </div>
          </div>
        </div>
        <div
          style={{
            ...patterns[this.props.headerPattern],
            borderTopRightRadius: `${this.props.headerBorderRadius}px`,
            borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
          }}
          className='w-full h-full absolute left-0 top-0 z-0'></div>
      </div>
    )
  }
}
