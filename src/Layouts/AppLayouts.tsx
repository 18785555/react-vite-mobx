import AppSidebar from "./Sidebar/AppSidebar"
import AppHeader from "./Header/AppHeader"
import Info from '../components/Info'
import { useState } from "react"
import { Outlet } from 'react-router-dom'
import MassegeBox from "../components/maibox/MassegeBox"
function AppLayouts() {
    const [active,setActive]=useState<boolean>(false)
    const [darkTheme,setDarkTheme]=useState<boolean>(false)
    const getClassName = (item:boolean)=>{
        setActive((active)=>active=item)
    }
    const dark_theme = (item:boolean)=>{
        setDarkTheme(item)
    }
  return (
      <body className={darkTheme?'no-loader dark-theme ':'no-loader'}>
        <div className= {active?'connect-container align-content-stretch d-flex flex-wrap compact-sidebar':'connect-container align-content-stretch d-flex flex-wrap'}>
            <AppSidebar getActive={getClassName}/>
            <MassegeBox></MassegeBox>
            <div className="page-container ">
                <AppHeader getDarkTheme={dark_theme} ></AppHeader>
                <div className="page-content">
                    <Info></Info>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
      </body>
      
  )
}
export default AppLayouts
