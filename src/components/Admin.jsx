import React from 'react'

const Admin = () => {
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