import React from 'react';
import { useAppContext } from '../config/Context';

const LogInPage = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className='login__page'>
            <input type="text" />
            <input type="text" />
            <button></button>
        </div>
    )
}

export default LogInPage