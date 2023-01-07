import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'


function Header() {

  const navOptions = [
    { options: "Home", path: "/" },
    { options: "Refactor", path: "/component/pages/Refractor" },
    { options: "Details", path: "/component/pages/Details" }]
  return (
    <div className={style.wrapper}>
      {
        navOptions.map(({ options, path }) => (
          <Link className={style.link} to={path}>
          <p className={style.option}>{options}</p>
          </Link>))
      }

    </div>
  )
}

export default Header
