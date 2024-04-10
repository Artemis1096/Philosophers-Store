import React from 'react'
import Layout from '../../components/Layout/Layout.js'
import AdminMenu from '../../components/Layout/AdminMenu.js'
import { useAuth } from '../../context/auth.js'
import '../../styles/Admin.css'

const AdminDashboard = () => {
  const [auth]=useAuth()
  return (
    <Layout>
        <div className='m-3 p-3 dashboard-main'>
          <div className='row'>
            <div className='col-md-3 side-menu'>
              <AdminMenu />
            </div>
            <div className='col-md-9 dashboard-textarea'>
              <div className='card admin-text'>
                <h1>Admin Name : {auth?.user?.name}</h1>
                <h1>Admin Email : {auth?.user?.email}</h1>
                <h1>Admin Contact : {auth?.user?.phone}</h1>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default AdminDashboard