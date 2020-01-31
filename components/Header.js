import Link from 'next/link';

const Header = (links, styles) => {

  const linkStyle = {
    marginRight: 15
  };

  Object.keys(styles).forEach((rule) => {
    console.log(styles[rule])
  })


  console.log(links)
  console.log(styles)
  return (
  <div className="i-exist">
    {
      links.links.map((link, k) => {
        return (<Link href={link.href} >
          <a style={linkStyle}>{link.title}</a>
        </Link>)
      })
    }
  </div>
  )
};

export default Header;