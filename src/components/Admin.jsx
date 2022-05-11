import React, { useState } from 'react'
import useFirestore from './../hooks/useFirestore';
import { useAppContext } from './../config/Context';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [display,setDisplay]=useState('quotes');
    // hol henne el orders objects, el loading bisir false bas yousalo el data, shaklon hek bi koub: 
    // docs = [
    //  {
    //     location: ..., 
    //     companyName: ..., 
    //     email: ..., 
    //     name: ..., 
    //     PhoneNumber: ..., 
    //     additionalInfo: ...,
    //     timeStamp: ...,
    //  },
    //  {
    //     ...
    //  },
    //  ...
    // ]
    const { docs, loading } = useFirestore('orders');

    // hay same thing, bas el data chakla 8er: { email, name, message} kmn hay array of objects, ana 8ayyartella esma men docs la messages 3ashen ma ysir fi conflict 
    const { docs: messages, loading: messagesLoading } = useFirestore('messages');

    // hay betkoun null eza ma fi user
    const { currentUser} = useAppContext();
    const navigate = useNavigate();
    const { logout } = useAppContext()
    React.useEffect(()=>{
        if(!currentUser) navigate('/login');
    }, []);
    async function handleLogout(){
        await logout;
        
    }
    // eza ba3d ma fi data 7ottelle loading, bas ba3ed momkin ykoub ma fi data, so ma tensa t2ello eno ma fi data ena el arrays fadyin
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
                    {docs.map(doc=>{
                            <tbody>
                                <td>{doc.location}</td>
                                <td>{doc.CompanyName}</td>
                                <td>{doc.name}</td>
                                <td>{doc.PhoneNumber}</td>
                                <td>{doc.email}</td>
                                <td>{doc.additionalInfo}</td>
                            </tbody>

                        })
                    }
                    </table>
                    :
                    <table className='admin__table'>
                      <thead>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Messages</th>
                        </thead>
                    {messages.map(message=>{
                            <tbody>
                            <td>{message.email}</td>
                            <td>{message.name}</td>
                            <td>{message.message}</td>
                        </tbody>
                        })
                    }
                    </table>
                }           
            </div>
        </section>
    )
}

export default Admin