import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.styl'

const IndexPage = () => (
  <div className={styles.container}>
    <section className={styles.pane1}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </section>
  </div>
)

export default IndexPage
