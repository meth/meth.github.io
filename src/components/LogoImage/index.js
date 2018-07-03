import React from 'react'
import cx from 'classnames'

import styles from './index.module.styl'

export default ({ className }) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.image} />
  </div>
)
