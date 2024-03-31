import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
const HomePage = () => {
  const [auth,serAuth]=useAuth()
  return (
   <Layout title={"Shop-Now"}>
    <h1>Home Page</h1>
    <pre>{JSON.stringify(auth, null , 4)}</pre>
   </Layout>
  )
}

export default HomePage