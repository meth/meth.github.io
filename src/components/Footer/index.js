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

      </div>
    </div>
    <div className={styles.right}>
      <ul className={styles.social}>
        <li>
          <Link to="https://www.reddit.com/r/methapp/">
            <i className='far fa-lg fa-reddit' />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/theMethApp">
            <i className='far fa-lg fa-twitter' />
          </Link>
        </li>
      </ul>
    </div>
  </div>
)
