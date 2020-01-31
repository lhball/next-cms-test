const BannerModule = ({module}, styles) => {
  console.log(module)
  const { type, body, image } = module ? module : { type: null, body: null, image: null };

  const bannerStyles = {
  };

  console.log(type, body, image, styles)

  return (
    <>
      <div className="" style={bannerStyles} >
          <div className="banner banner-text">
            {/* <h5>A placeholder title that probably spans more than 1 line at least.</h5> */}
            {/* <img src="https://cdn4.calligaris.com/fileadmin/Materiale/Home/HP_2_Living_Mies.jpg" /> */}
            {body}
            {image}
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

export default BannerModule;