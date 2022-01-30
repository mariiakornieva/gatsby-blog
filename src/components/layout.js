import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const Layout = ({ location, title, children }) => {
  const header = (
    <>
      <span className="header-links">
        <Link className="header-link header-link-home" to="/">
          <img src={logo} className="header-link-logo" alt="Mariia Kornieva" />
          {(title &&
            <span className="header-link-title">{title}</span>
          )}
        </Link>
      </span>

      <span className="header-links">
        <Link className="header-link" to="/about">
          About
        </Link>

        <Link className="header-link" to="/blog">
          Blog
        </Link>

        {/* <Link className="header-link" to="/projects">
          My Projects
        </Link> */}
      </span>
    </>
  );

  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
      <main className="main-content">{children}</main>
      <footer className="global-footer">
        {'© '}{new Date().getFullYear()}{', Built with ❤️ by Mariia Kornieva'}
      </footer>
    </div>
  )
}

export default Layout
