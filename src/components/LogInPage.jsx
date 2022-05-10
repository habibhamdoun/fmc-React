import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../config/Context';

const LogInPage = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { logIn, currentUser } = useAppContext();
    const [err, setErr] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(currentUser) navigate('/admin');
    }, [currentUser]);

    async function handleClick(){
        setErr(false);
        try {
            await logIn(email, password);
        } catch(e) {
            // lezim t5alle el error msg dynamic, tesla22a el error w t2ello shou sar, 8ayir el boolean w 3mala enta :) ****
            setErr(true);
            console.log('error: ' + e.message);
        }
    }

    return (
        <div className='login__page'>
            <div className='login__content'>
                {err && <p className='err__msg'>An Error occured, please try again later.</p>}
                <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='login__input'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='login__input'
                />
                <button
                    className='login__button'
                    onClick={handleClick}
                    disabled={!email || !password}
                >
                    Log In
                </button>
            </div>
        </div>
    )
}

export default LogInPage