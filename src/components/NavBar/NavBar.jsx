// import './NavBar.css';
// import React, { useState, useRef, useEffect } from 'react';
// import { Nav, NavDropdown } from 'react-bootstrap';

// export default function NavBar(){

//     const [navbarCollapsed, setNavbarCollapsed] = useState(true);
//     const navbarRef = useRef();

//     const handleToggle = () => {
//     setNavbarCollapsed(!navbarCollapsed);
//     };

//     const handleOutsideClick = (event) => {
//     if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setNavbarCollapsed(true);
//     }
//     };

//     useEffect(() => {
//     if (!navbarCollapsed) {
//         document.addEventListener('click', handleOutsideClick);
//     }

//     return () => {
//         document.removeEventListener('click', handleOutsideClick);
//     };
//     }, [navbarCollapsed]);

//     return (
//     <nav id="mainNavbar" className="navbar navbar-expand-lg bg-body-tertiary" ref={navbarRef}>
//         <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//             <img src="./tennisLogo.png" alt="Logo" width="50" height="55" className="d-inline-block align-text-top" />
//             Break Point
//         </a>
//         <button className="navbar-toggler" type="button" onClick={handleToggle} aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'} justify-content-end`} id="navbarNavAltMarkup">
//             <ul className="navbar-nav">
//             <li className="nav-item">
//                 <a className="nav-link" href="/events">Events</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="/restaurant">Restaurant</a>
//             </li>
//             <NavDropdown title="School" id="school-dropdown">
//             <NavDropdown.Item href="/school/courses">Courses</NavDropdown.Item>
//             <NavDropdown.Item href="/school/staff">Staff</NavDropdown.Item>
//             {/* <NavDropdown.Item href="/school/about">About</NavDropdown.Item> */}
//             </NavDropdown>
//             </ul>
//         </div>
//         </div>
//     </nav>
//     );
// }