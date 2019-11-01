import React, { Component } from 'react'
import { Button, Switch } from '@blueprintjs/core'

const DEFAULT_LOCAL_KEYS = {
  safeAreaView: false
}

class Case extends Component {
  constructor() {
    super()

    this.handleSafeAreaViewChange = this.handleSafeAreaViewChange.bind(this)
    this.state = { ...DEFAULT_LOCAL_KEYS }
  }

  componentDidUpdate(prevProps, prevState) { localStorage.state = JSON.stringify(this.state) }

  handleSafeAreaViewChange() { this.setState({ safeAreaView: !this.state.safeAreaView }) }

  render() {
    const _switch = (
      <>
        <Button icon='refresh' />
        <Switch checked={this.state.safeAreaView} label='SafeAreaView' onChange={this.handleSafeAreaViewChange} />
      </>
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
        <div className='ringtone'></div>
        <div className='volume-up'></div>
        <div className='volume-down'></div>
        <div className='power'></div>
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
