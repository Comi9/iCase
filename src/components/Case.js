import React, { Component } from 'react'

class Case extends Component {
  render() {
    const iCase = (
      <div className='phone'>
        <div className='notch'><div className='notch-top-left-corner'></div><div className='notch-top-right-corner'></div></div>
        <div className='view safe-area'>
          <div className='scroll-view'>
            <div className='content'>
            </div>
          </div>
        </div>
        <div className='button'></div>
      </div>
    )
    return iCase
  }
}

export default Case
