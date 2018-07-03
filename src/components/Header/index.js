import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.styl'

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <Link to="/" className={styles.title}>
      {siteTitle}
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

export default Header
