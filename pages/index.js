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
          {
            !!modules && modules.map((module) => {
              module = JSON.parse(module)
              (<BannerModule module={module} />)
            })
          }
        </div>
        <Footer links={footerItems} styles={styles} />
        {/* Start global styling */}
        <style global jsx>{`
          .menu { grid-area: menu; }
          .article { grid-area: main; }
          .grid-container {
            display: grid;
            grid-template-areas:
              'header header header header'
              'main main main main'
              'footer footer footer footer';
            grid-gap: 10px;
            padding: 10px;
          }
          .grid-container > div {
            text-align: center;
            padding: 20px 0;
            font-size: 30px;
            background-color: lightblue;
        `}
        </style>
        {/* End global styling */}
      </div>
    )
  }
}