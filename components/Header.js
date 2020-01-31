import Link from 'next/link';

const Header = (links, styles) => {

  const linkStyle = {
    marginRight: 15
  };

  Object.keys(styles).forEach((rule) => {
    console.log(styles[rule])
  })


  console.log(links, styles)
  return (
  <div>
    {
      !!links && Object.values(links).map((link, k) => {
        !!link ?
        <Link href={link.href} >
          <a style={linkStyle}>{link.title}</a>
        </Link> : null
      })
    }
  </div>
  )
};

export default Header;