import React from 'react'
import '../login/login.css'
const Login = () => {
    return (
        <div className='form'>
            <div className='formgroups'>

                <div className='formleft'>
                    <h4 className='formsubTittle'>
                        connect with friends and world around you on pratheesh
                    </h4>
                    <h1 className='formtittle'>
                        Pratheesh
                    </h1>
                </div>
                <div className='formright'>
                    <form>
                        <div className='formgroup'>
                            <input type="text" placeholder='E-mail or Phone number'/>
                        </div>
                        <div className='formgroup'>
                            <input type="password" placeholder='password'/>
                        </div>
                        <div className='formgroup form-btnLogin'>
                           <button>Login</button>
                        </div>
                        <div className='formgroup form-btnRegister'>
                           <button>Create New Account</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login