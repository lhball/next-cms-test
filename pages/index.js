import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerModule from '../components/BannerModule';

export default class Home extends Component {
  render() {
    let { title, body, modules, headerItems, footerItems, styles} = attributes;
    console.log(attributes)
    return (
      <div className="grid-container">
        {/* Start CMS script */}
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        {/* End CMS script */}
        <Header className="header" links={headerItems} styles={styles} />
        <div className="article">
          <h1>{title}</h1>
          <HomeContent />
          {body}
        </div>
        {
          !!modules && modules.map((module) => {
            // module = JSON.parse(module)
            // console.log(module)
            return (<BannerModule module={module} styles={styles} />)
          })
        }
        <Footer links={footerItems} styles={styles} />
        {/* Start global styling */}
        <style global jsx>{`
          .menu { grid-area: menu; }
          .article { grid-area: article; }
          .banner { grid-area: main; }
          .grid-container {
            display: grid;
            grid-column-gap: 10px;
            grid-template-areas:
              'header header header header'
              'article article article article'
              'main main main main'
              'footer footer footer footer';
            grid-gap: 10px;
            padding: 10px;
          }
          .banner img {
            max-width: 100%;
            object-fit: contain;
            height: auto;
          }
          .banner p {
            padding: 10px;
            text-align: left;
            margin: auto;
          }
          .grid-container > div {
            text-align: center;
            font-size: 30px;
            background-color: lightblue;
        `}
        </style>
        {/* End global styling */}
      </div>
    )
  }
}