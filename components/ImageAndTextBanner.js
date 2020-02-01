import Markdown from 'react-markdown';

const ImageAndTextBanner = ({module, styles}) => {

  const bannerStyles = {
  };

  // console.log(type, body, image, styles)

  return (
    <>
      <div className="" style={bannerStyles} >
          <div className="banner banner-text">
            <Markdown>{module.body}</Markdown>
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
          /* border: 1px solid red; */
        }
        .banner-image {
          /* border: 1px solid purple; */
        }
      `}
      </style>
    </>
  )
};

export default ImageAndTextBanner;