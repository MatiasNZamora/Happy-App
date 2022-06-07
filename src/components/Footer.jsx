import React from 'react'

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
                                    <a to='#' className='nav-link p-0 text-white'> Home </a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'> Feactures </a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'> About </a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'> FAQs </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='col-2'>
                            <h5> Section </h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'> Home </a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'> Feactures </a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'> About </a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'> FAQs </a>
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
                                <a className='link-light' to='#'><i className='fa fa-instagram fa-2x'/></a>
                            </li>
                            <li className='ms-3'>
                                <a className='link-light' to='#'><i className='fa fa-facebook fa-2x'/></a>
                            </li>
                            <li className='ms-3'>
                                <a className='link-light' to='#'><i className='fa fa-twitter fa-2x'/></a>
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
