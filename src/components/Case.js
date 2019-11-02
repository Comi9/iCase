import React, { Component } from 'react'
import { Button, Switch } from '@blueprintjs/core'
import _ from 'lodash'

const ICASE_DEFAULT_LOCAL_KEYS = {
  safeAreaView: false
}

class Case extends Component {
  constructor() {
    super()

    this.handleSafeAreaViewChange = this.handleSafeAreaViewChange.bind(this)
    this.handleLocalStorageReset = this.handleLocalStorageReset.bind(this)
    this.state = { ...ICASE_DEFAULT_LOCAL_KEYS }
  }

  componentDidMount() {
    if (_.isEmpty(localStorage.ICASE_LOCAL_KEYS)) {
      localStorage.ICASE_LOCAL_KEYS = JSON.stringify(this.state)
    } else {
      this.setState({ ...JSON.parse(localStorage.ICASE_LOCAL_KEYS) })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (_.differenceWith(this.state, prevState, _.isEqual)) { localStorage.ICASE_LOCAL_KEYS = JSON.stringify(this.state) }
  }

  handleSafeAreaViewChange() { this.setState({ safeAreaView: !this.state.safeAreaView }) }

  handleLocalStorageReset() {
    localStorage.ICASE_LOCAL_KEYS = JSON.stringify(ICASE_DEFAULT_LOCAL_KEYS)
    this.setState({ ...JSON.parse(localStorage.ICASE_LOCAL_KEYS) })
  }

  render() {
    const _switch = (
      <>
        <Button icon='refresh' onClick={this.handleLocalStorageReset} />
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
        <div className='button' />
        <div className='ringtone' />
        <div className='volume-up' />
        <div className='volume-down' />
        <div className='power' />
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
