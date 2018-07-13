import cx from 'classnames'
import React, { PureComponent } from 'react'
import Link from 'gatsby-link'

import LogoImage from '../LogoImage'
import styles from './index.module.styl'

const MENU_LINKS = [
  {
    url: '/#features',
    label: 'Features'
  },
  {
    url: '/download',
    label: 'Download'
  },
  {
    url: 'https://www.reddit.com/r/methapp/',
    label: <i className='fa fa-lg fa-reddit' />
  },
  {
    url: 'https://twitter.com/theMethApp',
    label: <i className='fa fa-lg fa-twitter' />
  },
  {
    url: 'https://github.com/meth/app',
    label: <i className='fa fa-lg fa-github' />
  },
]

export default class Header extends PureComponent {
  state = {
    menuOpen: false
  }

  render () {
    const { menuOpen } = this.state
    const { siteTitle } = this.props

    const menuLinks = MENU_LINKS.map(({ url, label }) => (
      <li key={url}><Link to={url} className={styles.link} onClick={this._toggleMenu}>{label}</Link></li>
    ))

    return (
      <div className={styles.container}>
        <Link to="/" className={styles.title}>
          <LogoImage className={styles.logo} />
          <span>{siteTitle}</span>
        </Link>
        <div className={styles.menu}>
          <div className={styles.desktop}>
            <ul className={styles.desktopMenuLinks}>{menuLinks}</ul>
          </div>
          <div className={styles.mobile}>
            <a className={styles.mobileMenuButton} onClick={this._toggleMenu}>
              <i className={cx('fa fa-lg fa-bars', { 'fa-rotate-90': menuOpen })} />
            </a>
            <ul className={menuOpen ? styles.mobileMenuLinksOpen : styles.mobileMenuLinksClosed}>
              {menuLinks}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  _toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })

    return true
  }
}
