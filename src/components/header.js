import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PAGES = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: 'Carbon Copier',
    route: "/carbon-copier"
  }
]

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      {PAGES.map(page => (
        <Link className="nav-link" to={page.route}>
          {page.title}
        </Link>
      ))}
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
