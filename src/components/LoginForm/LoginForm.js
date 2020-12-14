import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field
                    name="login"
                    placeholder="Login"
                    component="input"/>
            </div>
            <div>
                <Field
                    name="password"
                    placeholder="Password"
                    component="input" />
            </div>
            <div>
                <Field
                name="rememberMe"
                type="checkbox"
                component="input" />
            </div>
            <button>Log In</button>
        </form>
)}

const ReduxLoginForm = reduxForm({form: 'login'}) (LoginForm)

export default ReduxLoginForm;