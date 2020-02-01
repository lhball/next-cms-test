import Markdown from 'react-markdown';
import { withoutPTags } from './utils/utils'
const ButtonBanner = ({ module, styles }) => {

  const moduleStyles = {
  };

  console.log("button", module.button)

  return (
    <>
      <div style={moduleStyles} >
        <div className="banner banner-text banner-button">
          <Markdown renderers={{paragraph: withoutPTags}}>{module.body}</Markdown>
          <a href={"http://" + module.button.href}>{
            module.button.image ?
              <img src={module.button.image} /> :
              <button>{module.button.title}</button>
          }</a>
        </div>
      </div>
      <style jsx>{`
        .banner {
          display: grid;
          grid-template-areas:
            'title image'
            'body  image'
            'button image';
          justify-content: space-evenly;
          grid-gap: 15px;
        }
        .banner-text {
          font-size: 26px;
          font-weight: 500;
          text-align: left;
          margin: 10px;
          /* border: 1px solid red; */
        }
        .banner-image {
          border: 1px solid purple;
        }
        button {
            grid-area: button;
            border-radius: 5px;
            display: inline-block;
            border: none;
            padding: 1rem 2rem;
            margin: 0;
            text-decoration: none;
            background: #ff8100;
            border: 1px solid #ff8100;
            color: #ffffff;
            font-family: sans-serif;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            transition: background 250ms ease-in-out, 
                        transform 150ms ease;
        }
        button:hover,
        button:focus {
            background: white;
            color: #ff8100;
            border: 1px solid #ff8100;
            outline-offset: -1px;
        }
        button:focus {
            outline: 1px solid #fff;
            outline-offset: -4px;
        }
        button:active {
            transform: scale(0.99);
        }
      `}
      </style>
    </>
  )
};

export default ButtonBanner;