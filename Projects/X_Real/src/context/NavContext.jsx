import React, { createContext } from 'react'
import { useState } from 'react'
export const NavbarContext = createContext()

const NavContext = ({ children }) => {
    const [navOpen, setNavOpen] = useState(true)

    return (
        <div>
            <NavbarContext.Provider value={[navOpen, setNavOpen]}>
                {children}
            </NavbarContext.Provider>

        </div>
    )
}

export default NavContext
