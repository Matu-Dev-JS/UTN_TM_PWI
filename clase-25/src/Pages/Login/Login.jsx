import React, { useState } from 'react'

const Login = () => {

    const initialState = {username: '', password: ''}
    const initialStateErrors = {
        username: [],
        password: []
    } 
    const [loginForm, setLoginForm] = useState(initialState)
    const [errors, setErrors] = useState(initialStateErrors)
    const handleChangeValue = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }
    const validateLength = (value, length) => {
        return value < length
    }

    const validateUsernameLength = (value) => {

        return validateLength(value.length, 10)
    }

    const ERRORS = {
        USERNAME_LENGTH:  { text: 'tu nombre de usuario debe tener mas de 10 caracteres', id: 1, validate: validateUsernameLength},
    }

 
    const findError = (from, id_error) => {
        return errors[from].find(error => error.id == id_error)
    }
    
    const validateError = (from, errorToValidate)  => {
        if( findError(from ,errorToValidate.id)){

            if(!errorToValidate.validate(loginForm[from])){
                const newUsernameErrors = errors[from].filter(error => error.id != errorToValidate.id)
                setErrors({...errors, [from]: newUsernameErrors})
            }
        }
        else{
            
            if(errorToValidate.validate(loginForm[from])){
                setErrors({...errors, [from]: [...errors[from], errorToValidate]})
            }
        }
    }

    const  handleAbortInput = () => {
        console.log(loginForm)
        console.log(errors)
        validateError('username', ERRORS.USERNAME_LENGTH)
        
    }
  return (
    <main>
        <h1>Iniciar sesion</h1>
        <form>
            <div>
                <label htmlFor='username'>Nombre de usuario:</label>
                <input 
                    type="text" 
                    placeholder='joedoe' 
                    id='username' 
                    name='username' 
                    onChange={handleChangeValue} 
                    value={loginForm.username} 
                    onBlur={handleAbortInput}
                />
                {
                    errors.username.length > 0 && 
                    errors.username.map((error, index) => (<span key={index}>{error.text}</span>) )
                }

            </div>
            <div>
                <label htmlFor='password'>Contraseña:</label>
                <input 
                    type="password" 
                    placeholder='joedoe123' 
                    id='password' 
                    name='password' 
                    onChange={handleChangeValue} 
                    value={loginForm.password}
                />
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </main>
  )
}

export default Login