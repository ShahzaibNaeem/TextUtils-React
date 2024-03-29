import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AboutUs">{props.abouttext}</Link>
        </li> 
      </ul>

      {/* -----------------Color Pallete-------------- */}
       <div className='d-flex align-items-center mx-4'>
        <p style={{margin:'0'}}>Color Pallete:</p>
        <div className='bg-primary mx-2' style={{height:'20px',width:'30px',borderRadius:'4px',cursor:'pointer'}}onClick={()=>props.toggleMode('primary')}></div>
        <div className='bg-danger mx-2' style={{height:'20px',width:'30px',borderRadius:'4px',cursor:'pointer'}}onClick={()=>props.toggleMode('danger')}></div>
        <div className='bg-warning mx-2' style={{height:'20px',width:'30px',borderRadius:'4px',cursor:'pointer'}}onClick={()=>props.toggleMode('warning')}></div>
        <div className='bg-success mx-2' style={{height:'20px',width:'30px',borderRadius:'4px',cursor:'pointer'}}onClick={()=>props.toggleMode('success')}></div>
       </div>


     {/* --------------------------Toggle darkMode-------------- */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'dark':'light'} Mode`}</label>
      </div>
     
    </div>
  </div>
</nav>
  )
}

Navbar.defaultProps={
  title:'TextUtils',
  abouttext:'About Me',
  Home:'Home'
}

Navbar.propTypes={
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string
}