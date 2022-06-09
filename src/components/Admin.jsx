import React, { useContext, useState } from 'react'
import useFirestore from './../hooks/useFirestore';
import { useAppContext } from './../config/Context';
import { useNavigate } from 'react-router-dom';
import useReviews from '../hooks/useReviews';

const Admin = () => {
    const [display,setDisplay]=useState('quotes');
    const { docs, loading } = useFirestore('orders');
    const { docs: messages, loading: messagesLoading } = useFirestore('messages');
    const { docs: reviews } = useFirestore('reviews');
    const { deleteOrder } = useAppContext();
    const { deleteMessage } = useAppContext();
    const { AcceptReview } = useAppContext();
    const { DeleteReview } = useAppContext();
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
                <h3 className='admin__heading'>Admin Panel : {display}</h3>
            </div>
            <div className="admin__content">
                <div className='admin__side'>
                    <div className="admin__section">
                        <button className={display =='quotes' ? 'admin__btn quotes__btn active__display' :'admin__btn'} onClick={()=>setDisplay('quotes')}>Quotes</button>
                        <button className={display=='messages'?'admin__btn msg__btn active__display' :'admin__btn'} onClick={()=>setDisplay('messages')}>Messages</button>
                        <button className={display=='reviews'?'admin__btn msg__btn active__display' :'admin__btn'} onClick={()=>setDisplay('reviews')}>Reviews</button>
                    </div>
                    <button className='admin__btn logout__btn'onClick={handleLogout}>Log out</button>
                </div>
                      {display === 'quotes' &&
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
                                    <td>{doc.companyName}</td>
                                    <td>{doc.name}</td>
                                    <td>{doc.email}</td>
                                    <td>{doc.PhoneNumber}</td>
                                    <td>{doc.additionalInfo}</td>
                                    <td className='delete__btn__col'><button className='admin__btn' onClick={()=>handleOrderDelete(doc.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    }
                    {display =='messages' && 
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
                    }
                    
                        {display =='reviews' && 
                        <table className='admin__table'>
                        <thead>
                              <th>Name</th>
                              <th>Comment</th>
                              {/* <th>Date</th> */}
                              <th>Accept</th>
                              <th>Delete Message</th>
                          </thead>
                          <tbody>
                        {reviews.map(review =>(
                            <tr key={review.id}>
                                <td>{review.name}</td>
                                <td>{review.comment}</td>
                                <td>{Math.floor(review.timeStamp.seconds)}</td>
                                <td>{review.accepted == false && <button  className="delete__btn__col"onClick={()=>AcceptReview(review.id)}>Accept</button>}</td>
                                <td className='delete__btn__col'><button className='admin__btn' onClick={()=>DeleteReview(review.id)}>Delete</button></td>
                            </tr>

                        ))}
                    </tbody>
                    </table>
                }           
            </div>
        </section>
    )
}

export default Admin