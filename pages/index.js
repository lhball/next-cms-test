import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Header from '../components/Header';

export default class Home extends Component {
  render() {
    let { title, body, links, styles} = attributes;
    console.log(attributes)
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Header links={links} styles={styles} />
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <p>{body}</p>
        </article>
      </>
    )
  }
}