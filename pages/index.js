import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, brands } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {brands.map((brand, k) => (
              <li key={k}>
                <h2>{brand.name}</h2>
                <p>{brand.description}</p>
                <p>{brand.image}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}