import React, { useState } from 'react'
import './navbar.css'
function Navbar() {

  // nav-bar using bootstrap and some custom styles
  return (
    <div className="glassy sticky-top" >
      <nav class="navbar navbar-expand-lg navbar-light  " style={{ width: "70vw", margin: '0 auto' }}>
        <div class="container-fluid">
          < a class="navbar-brand" href="/" >
            <img src='Meta-Symbol.png' alt="" className="navbar-logo" />
            <span style={{ fontWeight: '600' }}> Meta-Currency </span>
          </a >
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <div class="d-flex justify-content-center">
              <ul class="navbar-nav">
                <li class="nav-item p-2 d-flex justify-content-center">
                  <a class="nav-link" href="/calc">Calculator</a>
                </li>
                <li class="nav-item p-2 d-flex justify-content-center">
                  <a class="nav-link" href="/chart">Visualiser</a>
                </li>
                <li class="nav-item p-2 d-flex justify-content-center" >
                  <a class="nav-link" href="#">Signup</a>
                </li>
                <li class="nav-item p-2 d-flex justify-content-center" >
                  <a class="nav-link" href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default Navbar