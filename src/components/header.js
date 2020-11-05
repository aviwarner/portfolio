import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const PageHeader = styled.header`
  margin: 0 auto; 
  margin-bottom: 1.45rem;
  max-width: 960px;
`

const NavBar = styled.div`
  margin: 0 auto;
  max-width: 960;
  display: flex;
  flex-direction: row;
`

const NavItem = styled.div`
  margin: 0;
  padding-right: 0.5rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const PAGES = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: 'Work',
    route: "/work"
  },
  {
    title: 'Writing',
    route: "/writing"
  }
]

const Header = ({ siteTitle }) => (
  <PageHeader>
    <NavBar>
      {PAGES.map(page => (
        <NavItem>
          <NavLink to={page.route}>
            {page.title}
          </NavLink>
        </NavItem>
      ))}
    </NavBar>
  </PageHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
