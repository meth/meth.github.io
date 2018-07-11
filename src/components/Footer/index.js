import React from 'react'
import Link from 'gatsby-link'

import LogoImage from '../LogoImage'
import styles from './index.module.styl'

export default ({ siteTitle }) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <ul className={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/download">Download</Link></li>
      </ul>
      <div className={styles.copyright}>
        Cooked by <a href="https://twitter.com/hiddentao">@hiddentao</a>
      </div>
    </div>
    <div className={styles.right}>
      <span>Find us on:</span>
      <ul className={styles.social}>
        <li>
          <a href="https://github.com/meth/app">
            <i className='far fa-lg fa-github' />
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/r/methapp/">
            <i className='far fa-lg fa-reddit' />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/theMethApp">
            <i className='far fa-lg fa-twitter' />
          </a>
        </li>
      </ul>
    </div>
  </div>
)
