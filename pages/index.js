import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModuleContent from '../components/ModuleConent';

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
        <div className="main">
          <div className="modules-container">
            {
              !!modules && modules.map((module) => {
                // module = JSON.parse(module)
                // console.log(module)
                return (<ModuleContent module={module} styles={styles} />)
              })
            }
          </div>
        </div>
        <Footer links={footerItems} styles={styles} />
        {/* Start global styling */}
        <style global jsx>{`
          .menu { grid-area: menu; }
          .main { grid-area: main; }
          /* .banner { grid-area: main; } */
          .grid-container {
            display: grid;
            grid-auto-rows: auto;
            grid-auto-columns: auto;
            grid-template-areas:
              'header'
              'main'
              'footer';
            grid-gap: 10px;
            padding: 10px;
          }
          .banner img {
            max-width: 50vw;
            object-fit: contain;
            height: auto;
          }
          .banner-button img {
            grid-area: image;
          }
          .banner-button p {
            grid-area: body;
          }
          .banner p {
            text-align: left;
          }
          .banner p,
          .banner h2,
          .banner img {
            margin: auto;
            margin-left: 0;
          }
          .grid-container > div {
            text-align: center;
            /* background-color: lightblue; */
            /* border: 1px solid orange; */
          }
          .modules-container {
            display: grid;
            grid-gap: 50px;
          }
        `}
        </style>
        {/* End global styling */}
      </div>
    )
  }
}