import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PAGES = [
  {
    title: "Home",
    route: "/",
    key: "nav-home"
  },
  {
    title: 'Carbon Copier',
    route: "/carbon-copier",
    key: "nav-cc"
  },
  {
    title: 'Somethings',
    route: "/somethings",
    key: "nav-somethings"
  }
]

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      {PAGES.map(page => (
        <Link
          className="nav-link"
          activeClassName="active-nav-link"
          to={page.route}
          key={page.key}
        >
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
