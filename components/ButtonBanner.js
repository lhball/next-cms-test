import Markdown from 'react-markdown';

const ButtonBanner = ({ module, styles }) => {

  const bannerStyles = {
  };

  const {button, body} = module;
  console.log(button, body, styles)

  return (
    <>
      <div className="" style={bannerStyles} >
        <div className="banner banner-text">
          <Markdown>{body}</Markdown>
          <a key={k} href={"http://" + button.href} style={headerLink}>{
            button.image ?
              <img style={headerLinkImage} src={button.image} /> :
              <button>{button.title}</button>
          }</a>
        </div>
      </div>
      <style jsx>{`
        .banner {
          display: grid;
          grid-template-areas: 'title image';
          justify-content: space-evenly;
          grid-gap: 15px;
        }
        .banner-text {
          font-size: 26px;
          font-weight: 500;
          text-align: left;
          margin: 10px;
          border: 1px solid red;
        }
        .banner-image {
          border: 1px solid purple;
        }
      `}
      </style>
    </>
  )
};

export default ButtonBanner;