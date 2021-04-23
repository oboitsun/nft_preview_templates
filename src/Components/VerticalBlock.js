import React, { Component } from 'react'
import TimeLeft from './icons/timeLeft'
import Star from './icons/Star'
export default class VerticalBlock extends Component {
  constructor(props) {
    super(props)
  }
  choosePattern = (where, color) => {
    const patterns = {
      flat: {
        opacity: 1,
        background: 'transparent',
      },

      dotted: {
        opacity: 0.4,
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px), radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: '5px 5px',
        backgroundPosition: '0 0,2.5px 2.5px',
      },
      lined: {
        opacity: 0.4,
        background: `repeating-linear-gradient( 45deg, ${color} , ${color} 2px, transparent 2px, transparent 10px)`,
      },
      gradient: {
        opacity: 0.8,
        backgroundImage: `linear-gradient(180deg, ${color} 0%, rgba(8,19,35,0) 100%)`,
      },
    }
    return { ...patterns[where] }
  }
  render() {
    const headerPattern = this.choosePattern(
      this.props.headerPattern,
      this.props.headerPatternColor
    )
    const sidePattern = this.choosePattern(this.props.sidePattern, this.props.sidePatternColor)
    return (
      <div
        style={{
          background: this.props.background,
          // backgroundColor: this.props.state.border.color,
          color: this.props.textColor,
          borderTopRightRadius: `${this.props.headerBorderRadius}px`,
          borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
          // border: `${this.props.state.border.width}px solid ${this.props.state.border.color} `,
        }}
        className='vertical-template  relative overflow-hidden '>
        <div style={{ background: this.props.sideBackground }} className='h-full w-full relative'>
          <div
            style={{
              ...sidePattern,
              // borderTopRightRadius: `${this.props.headerBorderRadius}px`,
              // borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
            }}
            className='w-full h-full absolute left-0 top-0 z-0'></div>
        </div>
        <section className='vertical-ratio w-full flex z-10 relative '>
          <iframe
            title='vertical'
            className='absolute top-0 w-full h-full '
            src='https://www.youtube.com/embed/tCCY31XxN_Y'
            frameBorder='0'
            allowFullScreen=''></iframe>
        </section>
        <div className='h-full z-10 flex flex-col items-start justify-between relative pl-2 2xl:pl-10 py-2 sm:py-12 '>
          <div className='flex items-center '>
            <div className='w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-red-400 mr-1 lg:mr-2 2xl:mr-5 z-10 flex-shrink-0'></div>
            <div className='flex flex-col flex-wrap items-start justify-between mr-auto  z-10 pb-1'>
              <span className=' 2xl:text-2xl leading-none mix-blend-difference'>Olive Allen</span>
              <p className='max-w-xs text-base lg:text-xl 2xl:text-3xl text-left leading-none flex flex-wrap overflow-ellipsis'>
                “A piece of Something”
              </p>
            </div>
          </div>
          <div className='flex items-center  z-10'>
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
          <div className='flex flex-col justify-between z-10'>
            <div className='flex flex-col items-start mb-4'>
              <span className='lg:font-semibold uppercase lg:text-xl leading-none'>Category:</span>
              <span className='lowercase tracking-wide lg:text-3xl leading-none'>sports</span>
            </div>
            <div className='flex flex-col items-start mb-4'>
              <span className='lg:font-semibold uppercase lg:text-xl'>highest bid:</span>
              <span className='lowercase tracking-wide lg:text-3xl leading-none'>$3000</span>
            </div>
            <div className='flex flex-col items-start '>
              <span className='lg:font-semibold uppercase lg:text-xl leading-none'>
                series number:
              </span>
              <span className='lowercase tracking-wide lg:text-xl 2xl:text-3xl'>1 of 24</span>
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <span className=' lg:text-xl 2xl:text-2xl tracking-tighter flex items-center mb-4'>
              <span className='w-4 h-4 lg:w-8 lg:h-8 mr-1'>
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
              className='uppercase outline-none border rounded-lg z-10 border-gray-900 py-1 px-1 lg:py-2 lg:px-4 2xl:py-5 2xl:px-10 tex-sm 2xl:text-base lg:font-semibold leading-none  mb-1 lg:mb-2'>
              go to auction
            </button>
            <div className='flex items-center justify-end'>
              <Star /> <span className='ml-2 font-semibold text-sm lg:text-xl'>@</span>
            </div>
          </div>
          <div
            style={{
              ...headerPattern,
              borderTopRightRadius: `${this.props.headerBorderRadius}px`,
              borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
            }}
            className='w-full h-full absolute left-0 top-0 z-0'></div>
        </div>
      </div>
    )
  }
}
