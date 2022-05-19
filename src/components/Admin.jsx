import React, { useState } from 'react'
import useFirestore from './../hooks/useFirestore';
import { useAppContext } from './../config/Context';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [display,setDisplay]=useState('quotes');
    const [messageOpen, setMessageOpen] = useState('');

    const { docs, loading } = useFirestore('orders');
    const { docs: messages, loading: messagesLoading } = useFirestore('messages');
    const { currentUser, logout } = useAppContext();
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(!currentUser) navigate('/login');
    }, [currentUser]);

    async function handleLogout(){
        await logout();
    }

    if(loading || messagesLoading){
        return(
            <div>
                <p>loading...</p>
            </div>
        )
    }

    return (
        <section className='admin'>
            <div className='admin__header'>
                <h3 className='admin__heading'>Admin Panel</h3>
            </div>
            <div className="admin__content">
                <div className='admin__side'>
                    <div className="admin__section">
                        <button className='admin__btn quotes__btn' onClick={()=>setDisplay('quotes')}>Quotes</button>
                        <button className='admin__btn msg__btn' onClick={()=>setDisplay('messages')}>Messages</button>
                    </div>
                    <button className='admin__btn logout__btn'onClick={handleLogout}>Log out</button>
                </div>
                      {display === 'quotes' ?
                    <table className='admin__table'>
                        <thead>
                            <th>Location</th>
                            <th>Company Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Additional info</th>
                        </thead>
                        <tbody>
                            {docs.map(doc=>(
                                <tr key={doc.id}>
                                    <td>{doc.location}</td>
                                    <td>{doc.CompanyName}</td>
                                    <td>{doc.name}</td>
                                    <td>{doc.email}</td>
                                    <td>{doc.PhoneNumber}</td>
                                    <td>{doc.additionalInfo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    // <table className='admin__table'>
                    //   <thead>
                    //         <th>Email</th>
                    //         <th>Name</th>
                    //         <th>Messages</th>
                    //     </thead>
                    //     <tbody>
                    // {messages.map(message=>(
                    //         <tr key={message.id}>
                    //             <td>{message.email}</td>
                    //             <td>{message.name}</td>
                    //             <td>{message.message}</td>
                    //         </tr>
                    //         ))
                    //     }
                    // </tbody>
                    // </table>
                    <div className='messages'>
                        {messages.map(message=>(
                            <div 
                                className='message__btn'
                                onClick={()=>setMessageOpen(old => old === message.id ? '' : message.id)}
                            >
                                <div style={{display: 'flex'}}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <h3>Email: </h3>
                                        <p>{message.email}</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <h3>Password: </h3>
                                        <p>{message.name}</p>
                                    </div>
                                </div>
                                {messageOpen === message.id && 
                                    <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                        <h3>message: </h3>
                                        <p>{message.message}</p>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                }           
            </div>
        </section>
    )
}

export default Admin