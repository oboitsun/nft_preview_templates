import React, { Component } from 'react'
import TimeLeft from './icons/timeLeft'
export default class HorizontalFooter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        style={{ background: this.props.background, color: this.props.textColor }}
        className='w-full sm:px-14 sm:py-12 flex justify-between rounded-b-md'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col items-start '>
            <span className='font-semibold uppercase text-xl'>Category:</span>
            <span className='lowercase tracking-wide text-3xl'>sports</span>
          </div>
          <div className='flex flex-col items-start'>
            <span className='font-semibold uppercase text-xl'>highest bid:</span>
            <span className='lowercase tracking-wide text-3xl'>$3000</span>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col items-start '>
            <span className='font-semibold uppercase text-xl'>series number:</span>
            <span className='lowercase tracking-wide text-3xl'>1 of 24</span>
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-2xl tracking-tighter flex items-center'>
              <span className='w-8 h-8 mr-1'>
                <TimeLeft />
              </span>
              33 minutes left
            </span>
          </div>
        </div>
        <div className='self-end'>
          <button
            style={{
              color: this.props.button.textColor,
              background: this.props.button.background,
              border: this.props.button.border
                ? `${this.props.button.borderWidth} solid ${this.props.button.borderColor}`
                : 'none',
            }}
            className='uppercase outline-none border rounded-lg border-gray-900 py-5 px-10 font-semibold leading-none'>
            go to auction
          </button>
        </div>
      </div>
    )
  }
}
