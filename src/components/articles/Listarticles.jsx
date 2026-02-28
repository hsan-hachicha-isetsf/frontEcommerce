import axios from "axios"
import { useEffect, useState } from "react"

const Listarticles = () => {
  const[articles,setArticles]=useState([])
  const getArticles=async()=>{
    try {
      const res=await axios.get("http://localhost:3000/api/articles")
      setArticles(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getArticles()
  },[])
  return (
    <div>
      Liste des articles
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Reférence</th>
            <th>Désignation</th>
            <th>Marque</th>
            <th>Prix</th>
            <th>Qté Stock</th>
            <th>Image</th>
            <th>Sous catégorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
         {
            articles.map((art,index)=>  
            <tr key={index}>
              <td>{art.reference}</td>
              <td>{art.designation}</td>
              <td>{art.marque}</td>
              <td>{art.prix}</td>
              <td>{art.qtestock}</td>
              <td><img src={art.imageart} alt={art.designation} width="100"/></td>
              <td>{art.scategorieID.nomscategorie}</td>
              <td><button className="btn btn-warning btn-sm">Update</button></td>
              <td><button className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
         )}
        </tbody>
      </table>
    </div>
  )
}

export default Listarticles
