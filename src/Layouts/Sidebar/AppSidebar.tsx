import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function ReactComponent(props:any){
    const [active,setActive]=useState<boolean>(false)
    const [styleOpen,setStyleOpen]=useState<boolean>(false)
    const [componentsOpen,setComponentsOpen]=useState<boolean>(false)
    const [activePage,setActivePage]=useState<number>(0)
    const navigate=useNavigate()
    const {getActive}=props
    const sidebarOpen=(witch:string)=>{
        switch(witch){
            case 'sidebar':
                setActive(!active)
                getActive(active)
                return
            case 'style':
                setStyleOpen(!styleOpen)
                return
            case 'component':
                setComponentsOpen(!componentsOpen)
                return
        }
    }
    const onClickPages = (item:number)=>{
        switch(item){
            case 0:
            setActivePage((activePage)=>activePage=item)
            navigate('calendar')
            return
            case 1:
            setActivePage((activePage)=>activePage=item)
            navigate('todo')
            return
            case 2:
            setActivePage((activePage)=>activePage=item)
            // navigate('dashboard')
            return  
            case 3:
            setActivePage((activePage)=>activePage=item)
            navigate('maibox')
            return 
            case 4:
            setActivePage((activePage)=>activePage=item)
            navigate('dashboard')
            return 
            case 5:
            setActivePage((activePage)=>activePage=item)
            return
            case 6:
            setActivePage((activePage)=>activePage=item)
            return
            case 7:
            setActivePage((activePage)=>activePage=item)
            return
            case 8:
            setActivePage((activePage)=>activePage=item)
            return
            case 9:
            setActivePage((activePage)=>activePage=item)
            return
            case 10:
            setActivePage((activePage)=>activePage=item)
            return
            case 11:
            setActivePage((activePage)=>activePage=item)
            return
            case 12:
            setActivePage((activePage)=>activePage=item)
            return
            case 13:
            setActivePage((activePage)=>activePage=item)
            return
            case 14:
            setActivePage((activePage)=>activePage=item)
            return
        }
    }
    return (
            <div className="page-sidebar">
                <div className="logo-box">
                    <a href="#" className="logo-text">Connect</a>
                    <a href="#" id="sidebar-close">
                        <i className="material-icons">close</i></a> 
                        <a onClick={()=>sidebarOpen('sidebar')} href="#" id="sidebar-state">
                            <i className="material-icons">adjust</i>
                            <i className="material-icons compact-sidebar-icon">panorama_fish_eye</i></a>
                    </div>
                <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '250px',}}><div className="page-sidebar-inner slimscroll" style={{overflow: 'hidden', width:' auto', height:' 250px'}}>
                    <ul className="accordion-menu">
                        <li className="sidebar-title">
                            Content
                        </li>
                        <li className={activePage===0?'active-page':''} onClick={()=>onClickPages(0)}>
                            <a href="javascript:;"><i className="material-icons-outlined">home</i>Calendar</a>
                        </li>
                        <li className={activePage===1?'active-page':''} onClick={()=>onClickPages(1)}>
                            <a href="javascript:;"><i className="material-icons-outlined">layers</i>Todo</a>
                        </li>
                        <li className={activePage===2?'active-page':''} onClick={()=>onClickPages(2)}>
                            <a href="javascript:;"><i className="material-icons-outlined">create</i>New Page</a>
                        </li>
                        <li className={activePage===3?'active-page':''} onClick={()=>onClickPages(3)}>
                            <a href="javascript:;"><i className="material-icons">copyright</i>Maibox</a>
                        </li>
                        <li className={activePage===4?'active-page':''} onClick={()=>onClickPages(4)}>
                            <a href="javascript:;"><i className="material-icons-outlined">contact_support</i>Dashboard</a>
                        </li>
                        <li className="sidebar-title">
                            UI Elements
                        </li>
                        <li className={styleOpen?'open':''}>
                            <a onClick={()=>sidebarOpen('style')} href="#"><i className="material-icons">text_format</i>Styles<i className="material-icons has-sub-menu">add</i></a>
                            <ul className="sub-menu" style={{display: styleOpen?'block':'none'}}>
                                <li>
                                    <a href="styles-typography.html">Typography</a>
                                </li>
                                <li>
                                    <a href="styles-code.html">Code</a>
                                </li>
                                <li>
                                    <a href="styles-tables.html">Tables</a>
                                </li>
                                <li>
                                    <a href="styles-icons.html">Icons</a>
                                </li>
                            </ul>
                        </li>
                        <li className={componentsOpen?'open':''}>
                            <a onClick={()=>sidebarOpen('component')} href="#"><i className="material-icons">apps</i>Components<i className="material-icons has-sub-menu">add</i></a>
                            <ul className="sub-menu transitions" style={{display:componentsOpen?'block':'none'}}>
                                <li>
                                    <a href="ui-alerts.html">Alerts</a>
                                </li>
                                <li>
                                    <a href="ui-badge.html">Badge</a>
                                </li>
                                <li>
                                    <a href="ui-breadcrumb.html">Breadcrumb</a>
                                </li>
                                <li>
                                    <a href="ui-buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="ui-card.html">Card</a>
                                </li>
                                <li>
                                    <a href="ui-collapse.html">Collapse</a>
                                </li>
                                <li>
                                    <a href="ui-dropdowns.html">Dropdowns</a>
                                </li>
                            </ul>
                        </li>
                        <li className={activePage===9?'active-page':''} onClick={()=>onClickPages(9)}>
                            <a href="#"><i className="material-icons">card_giftcard</i>Extended</a>
                        </li>
                        <li className={activePage===10?'active-page':''} onClick={()=>onClickPages(10)}>
                            <a href="#"><i className="material-icons">bar_chart</i>Charts</a>
                        </li>
                        <li className={activePage===11?'active-page':''} onClick={()=>onClickPages(11)}>
                            <a href="#"><i className="material-icons">input</i>Forms</a>
                        </li>
                        <li className={activePage===12?'sidebar-title active-page':'sidebar-title'} onClick={()=>onClickPages(12)}>
                            Other
                        </li>
                        <li className={activePage===13?'active-page':''} onClick={()=>onClickPages(13)}>
                            <a href="#"><i className="material-icons">bookmark_border</i>Documentation</a>
                        </li>
                        <li className={activePage===14?'active-page':''} onClick={()=>onClickPages(14)}>
                            <a href="#"><i className="material-icons">access_time</i>Change Log</a>
                        </li>
                    </ul>
                </div><div className="slimScrollBar style"></div><div className="slimScrollRail style1" ></div></div>
            </div>
            
    )
}
export default ReactComponent