import 'whatwg-fetch'
import React, { PureComponent } from 'react'
import Link from 'gatsby-link'

import styles from './download.module.styl'

const OS_NAMES_ICONS = {
  mac: {
    label: 'Mac',
    icon: 'apple'
  },
  win: {
    label: 'Windows',
    icon: 'windows'
  },
  linux: {
    label: 'Linux',
    icon: 'linux'
  },
  ios: {
    label: 'iOS',
    icon: 'mobile'
  },
  android: {
    label: 'Android',
    icon: 'android'
  }
}


export default class DownloadPage extends PureComponent {
  state = {
    loading: true
  }

  componentDidMount () {
    fetch('https://sync.meth.app/appUpdates')
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          data
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: `Unable to fetch app download info (${error}). Please try again later!`
        })
      })
  }

  render () {
    return (
      <div className={styles.container}>
        <h1>Download</h1>
        {this._renderContent()}
      </div>
    )
  }

  _renderContent () {
    const { loading, error, data } = this.state

    if (loading) {
      return (
        <div className={styles.loading}>
          <i className='fa fa-spinner fa-spin fa-3x fa-fw' />
        </div>
      )
    }

    if (error) {
      return (
        <div className={styles.error}>{`${error}`}</div>
      )
    }

    const os = this._getOperatingSystem()

    let specificLink
    if (os && data[os]) {
      specificLink = this._renderButton(data, os)
    }

    return (
      <div className={styles.downloadButtons}>
        {os ? (
          specificLink
        ) : (
          <p className={styles.unableToDetermineOs}>
            We can't tell what operating system you are using. Please choose the correct link below!
          </p>
        )}
        <div className={styles.buttonRow}>
          {Object.keys(data).map(key => (
            os && key === os ? null : this._renderButton(data, key)
          ))}
        </div>
      </div>
    )
  }

  _renderButton (data, os) {
    const { label, icon } = OS_NAMES_ICONS[os]
    const { version, updateUrl } = data[os]

    return (
      <a key={label} href={data[os].updateUrl} className={styles.button}>
        <i className={`fa fa-${icon}`} />
        <span className={styles.os}>{label}</span>
        <span className={styles.version}>v{version}</span>
      </a>
    )
  }

  _getOperatingSystem () {
    const { userAgent, platform } = (typeof window !== undefined ? window.navigator : {})

    if (platform && userAgent) {
      const sanitizedPlatform = platform.toLowerCase()
      const sanitizedUserAgent = userAgent.toLowerCase()

      if (0 <= sanitizedPlatform.indexOf('win')) {
        return 'win'
      } else if (0 <= sanitizedPlatform.indexOf('mac')) {
        return 'mac'
      } else if (0 <= sanitizedPlatform.indexOf('ip')) {
        return 'ios'
      } else if (0 <= sanitizedUserAgent.indexOf('android')) {
        return 'android'
      } else if (0 <= sanitizedUserAgent.indexOf('linux')) {
        return 'linux'
      }
    }

    return null
  }
}
