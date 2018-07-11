import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './index.module.styl'


export default ({ data }) => (
  <div className={styles.container}>
    <section className={styles.pane1}>
      <section className={styles.pane1_textBox}>
        <p>
          <em>Ethereum wallet</em> and <em>Dapp browser</em> for your <em className={styles.em2}>desktop</em> and <em className={styles.em2}>mobile</em>
        </p>
        <a className={styles.button} href="/download">Download now</a>
      </section>
      <section className={styles.pane1_imageBox}>
        <Img sizes={data.xpApp.childImageSharp.sizes} />
      </section>
    </section>
    <section className={styles.featurePaneRight}>
      <section className={styles.info}>
        <h2 className={styles.infoTitle}>HD wallet and tokens</h2>
        <ul className={styles.infoList}>
          <li>Generate account addresses using industry standard <a href="https://github.com/ethereum/EIPs/issues/84">BIP-44</a> protocol.</li>
          <li>Supports <a href="https://github.com/meth/app/blob/master/src/config/tokens.json">comprehensive list</a> of ERC-20 tokens as your own custom tokens.</li>
          <li>Never lose access - use your passphrase with Metamask and MyEtherWallet.</li>
        </ul>
      </section>
      <section className={styles.screenshot}>
        <Img sizes={data.xpWallet.childImageSharp.sizes} />
      </section>
    </section>
    <section className={styles.featurePaneLeft}>
      <section className={styles.info}>
        <h2 className={styles.infoTitle}>All networks supported</h2>
        <ul className={styles.infoList}>
          <li>Connect to main network, all public test networks, as well as custom private networks.</li>
          <li>Advanced network detection based on blockchain state.</li>
        </ul>
      </section>
      <section className={styles.screenshot}>
        <Img sizes={data.xpNetworks.childImageSharp.sizes} />
      </section>
    </section>
    <section className={styles.featurePaneRight}>
      <section className={styles.info}>
        <h2 className={styles.infoTitle}>Full smart contract support</h2>
        <ul className={styles.infoList}>
          <li>Deploy smart contracts to any chain and easily save the contract address for later use.</li>
          <li>Use the friendly UI to interact with any contract on any chain.</li>
        </ul>
      </section>
      <section className={styles.screenshot}>
        <Img sizes={data.xpContracts.childImageSharp.sizes} />
      </section>
    </section>
    <section className={styles.featurePaneLeft}>
      <section className={styles.info}>
        <h2 className={styles.infoTitle}>Multi-tab browser with bookmarks</h2>
        <ul className={styles.infoList}>
          <li>Run multiple Dapps simultaneously with tabbed browing.</li>
          <li>Save your favourite Dapps as bookmarks.</li>
        </ul>
      </section>
      <section className={styles.screenshot}>
        <Img sizes={data.xpBrowser.childImageSharp.sizes} />
      </section>
    </section>
    <section className={styles.featurePaneRight}>
      <section className={styles.info}>
        <h2 className={styles.infoTitle}>Address book </h2>
        <ul className={styles.infoList}>
          <li>Add contract and account addresses to your own personal address book.</li>
          <li>Save time later on by looking up addresses instead of typing them out.</li>
        </ul>
      </section>
      <section className={styles.screenshot}>
        <Img sizes={data.xpAddressBook.childImageSharp.sizes} />
      </section>
    </section>
    <section className={styles.featurePaneLeft}>
      <section className={styles.info}>
        <h2 className={styles.infoTitle}>Transaction history</h2>
        <ul className={styles.infoList}>
          <li>View your per-network transaction history for all transactions created in Meth.</li>
          <li>Instantly access detailed transaction information on <a href="http://etherscan.io/">Etherscan</a>.</li>
        </ul>
      </section>
      <section className={styles.screenshot}>
        <Img sizes={data.xpTransactions.childImageSharp.sizes} />
      </section>
    </section>
    <section className={styles.featurePaneRight}>
      <section className={styles.info}>
        <h2 className={styles.infoTitle}>Secure cross-device sync</h2>
        <ul className={styles.infoList}>
          <li>All data is sync-ed in real-time to your other devices.</li>
          <li>Strong client-side encryption (AES-256-GCM) applied prior to sync - no one else can ever read your data.</li>
        </ul>
      </section>
      <section className={styles.screenshot}>
        <Img sizes={data.xpSync.childImageSharp.sizes} />
      </section>
    </section>
    <section className={styles.downloadPane}>
      <h2>What are you waiting for!?</h2>
      <a className={styles.button} href="/download">Download now</a>
    </section>
  </div>
)

export const query = graphql`
  query indexImages {
    xpApp: file(relativePath: { eq: "images/xp_app.png" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    xpWallet: file(relativePath: { eq: "images/xp_wallet.png" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    xpNetworks: file(relativePath: { eq: "images/xp_networks.png" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    xpContracts: file(relativePath: { eq: "images/xp_contracts.png" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    xpBrowser: file(relativePath: { eq: "images/xp_browser.png" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    xpSync: file(relativePath: { eq: "images/xp_sync.png" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    xpAddressBook: file(relativePath: { eq: "images/xp_addressbook.png" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    xpTransactions: file(relativePath: { eq: "images/xp_transactions.png" }) {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
