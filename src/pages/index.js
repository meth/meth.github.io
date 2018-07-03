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
    <section className={styles.featurePane}>
      <section className={styles.info}>
        <h2 className={styles.infoTitle}>Mnemonic-based HD Wallet</h2>
        <ul style={styles.infoList}>
          <li>Uses industry-standard BIP-44 protocol to generate Ethereum accounts from a secret <em>passphrase</em>.</li>
          <li>Never lost access - you can also access your accounts at any time from Metamask and MyEtherWallet at any time using the same passphrase.</li>
        </ul>
      </section>
      <section className={styles.screenshot}>
        <Img sizes={data.generateWalletScr.childImageSharp.sizes} />
      </section>
    </section>
    <ul>
      <li>, portable to Metamask and MyEtherWallet</li>
      <li>Secure backup and sync with client-side encryption</li>
      <li>ERC-20 token support, with ability to add and save custom tokens</li>
      <li>Deploy new contracts and interact with existing ones </li>
      <li>Multi-tab Dapp browser with bookmarks</li>
      <li>4-digit personal security code for additional security</li>
      <li>Address book</li>
      <li>Transaction history view</li>
      <li>Built-in Ethereum units converter</li>
    </ul>
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

    generateWalletScr: file(relativePath: { eq: "images/generateWalletScr.png" }) {
      childImageSharp {
        sizes(maxWidth: 270) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
