import React, { Component } from 'react'
import TimeLeft from './icons/timeLeft'
import Star from './icons/Star'
export default class HorizontalFooter extends Component {
  render() {
    const patterns = {
      flat: {
        opacity: 1,
        background: 'transparent',
      },

      dotted: {
        opacity: 0.5,
        backgroundImage: `radial-gradient(${this.props.footerPatternColor} 1px, transparent 1px), radial-gradient(${this.props.footerPatternColor} 1px, transparent 1px)`,
        backgroundSize: '5px 5px',
        backgroundPosition: '0 0,2.5px 2.5px',
      },
      lined: {
        opacity: 1,
        background: `repeating-linear-gradient( 45deg, ${this.props.footerPatternColor} , ${this.props.footerPatternColor} 2px, transparent 2px, transparent 10px)`,
      },
      gradient: {
        opacity: 1,
        backgroundImage: `linear-gradient(180deg, ${this.props.footerPatternColor} 0%, rgba(8,19,35,0) 100%)`,
      },
    }
    return (
      <div
        style={{
          background: this.props.background,
          color: this.props.textColor,
          borderBottomLeftRadius: `${this.props.footerBorderRadius}px`,
          borderBottomRightRadius: `${this.props.footerBorderRadius}px`,
        }}
        className='w-full p-2 lg:py-5 lg:px-7  2xl:px-14 2xl:py-10 flex justify-between rounded-b-md relative z-10'>
        <div className='flex flex-col lg:justify-between z-10'>
          <div className='flex flex-col items-start mb-4'>
            <span className='lg:font-semibold uppercase 2xl:text-xl leading-none'>Category:</span>
            <span className='lowercase tracking-wide 2xl:text-3xl leading-none'>sports</span>
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-left lg:font-semibold uppercase leading-none lg:text-xl'>
              highest bid:
            </span>
            <span className='lowercase tracking-wide 2xl:text-3xl leading-none'>$3000</span>
          </div>
        </div>
        <div className='flex flex-col lg:justify-between z-10'>
          <div className='flex flex-col items-start '>
            <span className='text-left lg:font-semibold uppercase 2xl:text-xl leading-none'>
              series number:
            </span>
            <span className='lowercase tracking-wide 2xl:text-3xl leading-none'>1 of 24</span>
          </div>
          <div className='flex flex-col items-start'>
            <span className='lg:text-xl 2xl:text-2xl tracking-tighter flex items-center'>
              <span className='w-4 h-4 lg:w-8 lg:h-8 mr-1'>
                <TimeLeft />
              </span>
              33 minutes left
            </span>
          </div>
        </div>
        <div className='flex flex-col lg:justify-between  items-end z-10'>
          <div className='flex items-center justify-end'>
            <Star /> <span className='ml-2 font-semibold lg:text-xl'>@</span>
          </div>
          <button
            style={{
              color: this.props.button.textColor,
              background: this.props.button.background,
              borderRadius: `${this.props.button.borderRadius}px`,
              border: this.props.button.border
                ? `${this.props.button.borderWidth} solid ${this.props.button.borderColor}`
                : 'none',
            }}
            className='uppercase outline-none border rounded-lg border-gray-900 py-1 px-2 2xl:py-5 2xl:px-10 font-semibold leading-none'>
            go to auction
          </button>
        </div>
        <div
          style={{
            ...patterns[this.props.footerPattern],
            borderBottomLeftRadius: `${this.props.footerBorderRadius}px`,
            borderBottomRightRadius: `${this.props.footerBorderRadius}px`,
          }}
          className='w-full h-full absolute left-0 top-0 z-0'></div>
      </div>
    )
  }
}
