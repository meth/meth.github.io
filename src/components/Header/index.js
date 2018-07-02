import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.styl'

const Header = ({ siteTitle }) => (
  <div className={styles.outer}>
    <div className={styles.inner}>
      <h1 className={styles.title}>
        <Link to="/" className={styles.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
