import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Cardarticle from './Cardarticle';

const Viewarticle = () => {
    const [article, setArticle] =useState({});
    const {id} = useParams()
    const getArticle=async()=>{
        try {
            const res=await axios.get(`http://localhost:3000/api/articles/${id}`)  
     
            setArticle(res.data)
           
        } catch (error) {
            console.log(error)
        }   
    }
    useEffect(()=>{
        getArticle()
    },[])   
  return (
    <div>
      <Cardarticle article={article}/>
    </div>
  )
}

export default Viewarticle
