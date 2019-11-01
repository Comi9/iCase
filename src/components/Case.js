import React, { Component } from 'react'
import { Button, Switch } from '@blueprintjs/core'
import { reactLocalStorage } from 'reactjs-localstorage'
import _ from 'lodash'

class Case extends Component {
  constructor() {
    super()

    this.getLocalStorageKeys = this.getLocalStorageKeys.bind(this)
    this.setLocalStorageKey = this.setLocalStorageKey.bind(this)
    this.handleLocalStorageKeys = this.handleLocalStorageKeys.bind(this)
    this.resetLocalStorageKeys = this.resetLocalStorageKeys.bind(this)
    this.handleSafeAreaViewChange = this.handleSafeAreaViewChange.bind(this)
    this.state = {
      safeAreaView: false
    }
  }

  componentDidMount() { this.getLocalStorageKeys() }

  resetLocalStorageKeys() { reactLocalStorage.clear() }

  getLocalStorageKeys() { this.handleLocalStorageKeys(reactLocalStorage.get('iCaseAppLocalSettings')) }

  setLocalStorageKey(key) {
    const value = !reactLocalStorage.getObject('iCaseAppLocalSettings')[key]
    reactLocalStorage.setObject('iCaseAppLocalSettings', { [key]: value })
  }

  handleLocalStorageKeys(localKeys) {
    _.each(JSON.parse(localKeys), (value, key) => {
      this.setState({ [key]: value })
    })
  }

  handleSafeAreaViewChange() {
    this.setLocalStorageKey('safeAreaView')
    this.getLocalStorageKeys()
  }

  render() {
    const _switch = (
      <>
        <Button icon="refresh" onClick={this.resetLocalStorageKeys} />
        <Switch checked={this.state.safeAreaView} label="SafeAreaView" onChange={this.handleSafeAreaViewChange} />
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
