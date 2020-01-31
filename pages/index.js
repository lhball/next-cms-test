import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Header from '../components/Header';

export default class Home extends Component {
  render() {
    let { title, body, links, styles} = attributes;
    console.log(attributes)
    return (
      <div className="grid-container">
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Header className="header" links={links} styles={styles} />
        <article className="article">
          <h1>{title}</h1>
          <HomeContent />
          <p>{body}</p>
        </article>
        <div className="footer">
          <p>Footer content</p>
        </div>
        <style global jsx>{`
      .menu { grid-area: menu; }
      .article { grid-area: main; }
      .footer { grid-area: footer; }

      .grid-container {
        display: grid;
        grid-template-areas:
          'header header'
          'main main'
          'footer footer';
        grid-gap: 10px;
        padding: 10px;
      }

      .grid-container > div {
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    `}
        </style>
      </div>
    )
  }
}