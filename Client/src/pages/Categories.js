import React,{useState,useEffect} from 'react'
import useCategory from '../hooks/useCategory.js'
import Layout from '../components/Layout/Layout.js'
import { Link } from 'react-router-dom'
import '../styles/Categories.css'

const Categories = () => {
  const categories = useCategory()
  return (
    <Layout title={'All Categories'}>
        <div className='category-box'>
            <div>
                {categories.map((c)=>(
                    <div className='category-cards' key={c._id}>
                        <Link to={`/category/${c.slug}`} className='btn btn-primary'>{c.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default Categories;