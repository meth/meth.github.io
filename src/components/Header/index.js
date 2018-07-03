import React from 'react'
import Link from 'gatsby-link'

import LogoImage from '../LogoImage'
import styles from './index.module.styl'

export default ({ siteTitle }) => (
  <div className={styles.container}>
    <Link to="/" className={styles.title}>
      <LogoImage className={styles.logo} />
      <span>{siteTitle}</span>
    </Link>
    <div className={styles.menu}>
      <div className={styles.desktop}>
        <Link to="/" className={styles.link}>Desktop Home</Link>
      </div>
      <div className={styles.mobile}>
        <Link to="/" className={styles.link}>Mobile Home</Link>
      </div>
    </div>
  </div>
)
