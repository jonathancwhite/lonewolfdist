import React from 'react'
import { HeaderLogo } from './header/HeaderLogo'
import { NavUser } from './header/NavUser'
import { Search } from './header/Search'

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <div className="grid col-3-lg justify navUser-top">
            <HeaderLogo />
            <Search />
            <NavUser />
          </div>
          <div className="flex col-8-md justify">
            {/* Navigation */}
          </div>
        </div>
      </div>
    </>
  )
}