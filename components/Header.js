import Link from 'next/link';

const Header = (links, styles) => {

  const headerStyles = {
    containerStyle: {
      padding: 0,
      backgroundColor: !!styles.backgroundColor ? styles.backgroundColor : '',
    },
    linkStyle: {
      marginRight: 15,
      fontSize: 'small',
    },
  };

  Object.keys(styles).forEach((rule) => {
    console.log(styles[rule])
  })


  console.log(links)
  console.log(styles)
  const {linkStyle, containerStyle} = headerStyles
  return (
  <div style={containerStyle}>
    {
      links.links.map((link, k) => {
        return (<Link href={link.href} >
          <a style={linkStyle}>{link.title}</a>
        </Link>)
      })
    }
    <style jsx>{`
      .header { grid-area: header; }
    `}
    </style>
  </div>
  )
};

export default Header;