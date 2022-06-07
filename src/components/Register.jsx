import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <div className='container shadow my-5'>
            <div className='row justify-content-end'>
                <div className='col-md-5 d-flex flex-column align-items-center justify-content-center text-white form order-2'>
                    <h1 className='display-4 fw-bolder'> Hello, Friend </h1>
                    <p className='lead text-center '> Enter Your Detail To Register </p>
                    <h5 className='mb-4'> OR </h5>
                    <NavLink to='/login' className="btn btn-outline-light rounded-pill pb-2 w-50"> Iniciar Sesion </NavLink>
                </div>
                <div className='col-md-6 p-5'>
                    
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"> Tu Nombre </label>
                            <input type="text" class="form-control" id="name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"> Tu Email </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text"> No compartiremos tu email con nadie mas. </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"> Contraseña </label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1"> Acepto los terminos y condiciones. </label>
                        </div>
                        <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill"> Registrarse </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register