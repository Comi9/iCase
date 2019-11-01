import React, { Component } from 'react'
import { Switch } from '@blueprintjs/core'

class Case extends Component {
  constructor() {
    super()

    this.handlePublicChange = this.handlePublicChange.bind(this)
    this.state = { safeAreaView: false }
  }

  handlePublicChange() { this.setState({ safeAreaView: !this.state.safeAreaView }) }

  render() {
    const _switch = (
      <Switch checked={this.state.safeAreaView} label="SafeAreaView" onChange={this.handlePublicChange} />
    )

    const iCase = (
      <div className='phone'>
        <div className='notch'><div className='notch-top-left-corner'></div><div className='notch-top-right-corner'></div></div>
        <div className={this.state.safeAreaView ? 'view safe-area' : 'view'}>
          <div className='scroll-view'>
            <div className='content'>
              <h2 className='ff-r'>Content</h2>
            </div>
          </div>
        </div>
        <div className='button'></div>
      </div>
    )

    return (
      <>
        {_switch}
        {iCase}
      </>
    )
  }
}

export default Case
