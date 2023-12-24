import React from 'react'
import Header from '../Nav/Header'
import './admin.css'

function Admin() {
  return (
    <>
    <Header/>
    <div className="Admin">
    <div className="Admin-header">
        <h1>Welcome to DailySamadhan Admin Pannel</h1>
        <div className="table">
            <table>
                <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>State</th>
                <th>Type of Dispute</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>Phone No </td>
                        <td>State</td>
                        <td>Type Of Dispute</td>

                    </tr>
                </tbody>
                {/* <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Staet</th>
                        <th>Type of Dispute</th>
                    </tr>
                </tfoot> */}
            </table>
        </div>
    </div>
    </div>
    </>
  )
}

export default Admin