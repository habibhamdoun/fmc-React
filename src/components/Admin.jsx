import React, { useContext, useState } from 'react'
import useFirestore from './../hooks/useFirestore';
import { useAppContext } from './../config/Context';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [display,setDisplay]=useState('quotes');
    const [messageOpen, setMessageOpen] = useState('');

    const { docs, loading } = useFirestore('orders');
    const { docs: messages, loading: messagesLoading } = useFirestore('messages');
    const { deleteOrder } = useAppContext();
    const { deleteMessage } = useAppContext();
    const { currentUser, logout } = useAppContext();
    const navigate = useNavigate();
    async function handleOrderDelete(id){
        await deleteOrder(id)
    }
    async function handleMessageDelete(id){
        await deleteMessage(id)
    }
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
                            <th>Delete Order</th>
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
                                    <td className='delete__btn__col'><button className='admin__btn' onClick={()=>handleOrderDelete(doc.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    <table className='admin__table'>
                      <thead>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Messages</th>
                            <th>Delete Message</th>
                        </thead>
                        <tbody>
                    {messages.map(message=>(
                            <tr key={message.id}>
                                <td>{message.email}</td>
                                <td>{message.name}</td>
                                <td>{message.message}</td>
                                <td className='delete__btn__col'><button className='admin__btn' onClick={()=>handleMessageDelete(message.id)}>Delete</button></td>
                            </tr>
                            ))
                        }
                    </tbody>
                    </table>
                    // <div className='messages'>
                    //     {messages.map(message=>(
                    //         <div 
                    //             className='message__btn'
                    //             onClick={()=>setMessageOpen(old => old === message.id ? '' : message.id)}
                    //         >
                    //             <div  className="message__item">
                    //                 <div className='message__content'>
                    //                     <h6 className='message__title'>Email : </h6>
                    //                     <span className='message'>{message.email}</span>
                    //                 </div>
                    //                 <div  className="message__content">
                    //                     <h6 className='message__title'>Name : </h6>
                    //                     <span className='message'>{message.name}</span>
                    //                 </div>
                    //             </div>
                    //             <button className='btn message__delete' onClick={()=>handleMessageDelete(message.id)}>Delete</button>
                    //             {messageOpen === message.id && 
                    //                 <div  className="message__content--msg">
                    //                     <h6 className='message__title'>message: </h6>
                    //                     <span className='message'>{message.message}</span>
                    //                 </div>
                    //             }
                    //         </div>
                    //     ))}
                    // </div>
                }           
            </div>
        </section>
    )
}

export default Admin