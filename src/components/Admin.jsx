import React from 'react'
import useFirestore from './../hooks/useFirestore';
import { useAppContext } from './../config/Context';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

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

    React.useEffect(()=>{
        if(!currentUser) navigate('/login');
    }, []);

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
            <div className='admin__side'>
                <button className='admin__btn quotes__btn'>Quotes</button>
                <button className='admin__btn msg__btn'>Messages</button>
            </div>
                <table className='admin__table'>
                    <tr>
                        <th>Company Name</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                </table>
        </section>
    )
}

export default Admin