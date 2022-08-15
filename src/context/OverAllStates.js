import React, { useState } from "react";
import StatesContext from "./StatesContext";
const OverAllStates = (props) => {

    const initialState = {
        chat: false,
        cart: false,
        userProfile: false,
        notification: false
    }

    const [activeMenu, setActiveMenu] = useState(true)
    const [clicked, setClicked] = useState(initialState)
    const [themeMenu, setThemeMenu] = useState(false)
    const [currentColor, setCurrentColor] = useState('#1A97F5')
    const [currentMode, setCurrentMode] = useState('light')

    const [chatOpen, setChatOpen] = useState(false)
    const [notificationOpen, setNotificationOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)


 

    const setMode = (e) => {

        setCurrentMode(e.target.value)

        localStorage.setItem('colorMode', e.target.value)

    }

    const setTheme = (color) => {

        setCurrentColor(color)

        localStorage.setItem('themeMode', color)

        setThemeMenu(false)

    }

    return (
        <StatesContext.Provider value={{
            activeMenu, setActiveMenu,
            clicked, setClicked,
            themeMenu, setThemeMenu, setTheme,
            currentColor, setCurrentColor,
            currentMode, setCurrentMode, setMode,
            chatOpen, setChatOpen,
            notificationOpen, setNotificationOpen,
            profileOpen, setProfileOpen,
            cartOpen, setCartOpen
        }}>
            {props.children}
        </StatesContext.Provider>
    )
}
export default OverAllStates;