import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './index.module.styl'

export default ({ data }) => (
  <div className={styles.container}>
    <section className={styles.pane1}>
      <section className={styles.pane1_textBox}>
        <p>
          <em>Ethereum wallet</em> and <em>Dapp browser</em> for your <em className={styles.em2}>desktop</em> and <em className={styles.em2}>mobile</em>.
        </p>
        <a className={styles.button} href="/download">Download now</a>
      </section>
      <section className={styles.pane1_imageBox}>
        <Img sizes={data.placeIt.childImageSharp.sizes} />
      </section>
    </section>
  </div>
)

export const query = graphql`
  query indexImages {
    placeIt: file(relativePath: { eq: "images/placeit.png" }) {
      childImageSharp {
        sizes(maxWidth: 640, maxHeight: 480) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
