import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className='footer text-white'>
            <div className='container'>
                <footer className='py-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <h4> Happy Art </h4>
                        </div>

                        <div className='col-2'>
                            <h5> Section </h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'>
                                    <NavLink to='/home' className='nav-link p-0 text-white'> Inicio </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='/service' className='nav-link p-0 text-white'> Servicios </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='/about' className='nav-link p-0 text-white'> Nosotros </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-white'> FAQs </NavLink>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='col-2'>
                            <h5> Section </h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-white'> Home </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-white'> Feactures </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-white'> About </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-white'> FAQs </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className='col-4 offset-1'>
                            <form>
                                <h5> Subcribe to our newletters </h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className='d-flex w-100 grap-2'>
                                    <label htmlFrom='newletter1' className='visually-hidden'> Email Address </label>
                                    <imput
                                        id='newletter1'
                                        type='text'
                                        className='form-control'
                                        placeholder='Email address'
                                    />
                                    <button className='btn btn-primary rounded-pill mx-2 px-4' type='button'> Subcribe </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between pt-4 mt-4 border-top'>
                        <p> 2022 Company, Inc. all rigths reserved. </p>
                        <ul className='list-unstyled d-flex'>
                            <li className='ms-3'>
                                <NavLink className='link-light' to='https://www.instagram.com/matynzamora/'><i className='fa fa-instagram fa-2x'/></NavLink>
                            </li>
                            <li className='ms-3'>
                                <NavLink className='link-light' to='https://www.facebook.com/matias.zamora.5688/'><i className='fa fa-facebook fa-2x'/></NavLink>
                            </li>
                            <li className='ms-3'>
                                <NavLink className='link-light' to='https://www.linkedin.com/in/matiasnzamora/'><i className='fa fa-linkedin fa-2x'/></NavLink>
                            </li>
                            <li className='ms-3'>
                                <NavLink className='link-light' to='/'><i className='fa fa-whatsapp fa-2x'/></NavLink>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </footer>
    </div>
  )
}

export default Footer
