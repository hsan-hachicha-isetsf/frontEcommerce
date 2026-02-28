import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
  const handleDelete=async(id)=>{
    try {
        await axios.delete(`http://localhost:3000/api/articles/${id}`)      
        getArticles() // Refresh the list after deletion
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <div className="container"> 
<div > 
<nav className="navbar navbar-expand-lg navbar-dark bg-success"> 
<div className="container-fluid"> 
<Link className="btn btn-outline-light" to="/articles/add"> 
Ajouter article 
</Link> 
</div> 
</nav> 
</div> 
<div className="py-4"> 
<table className="table border shadow"> 
<thead> 
<tr> 
<th scope="col">Image</th> 
<th scope="col">Référence</th> 
<th scope="col">Désignation</th> 
<th scope="col">Quantité Stock</th> 
<th scope="col">Prix</th> 
<th scope="col">View</th> 
<th scope="col">Modifier</th> 
<th>Supprimer</th> 
</tr> 
</thead> 
<tbody> 
{articles.map((art, index) => ( 
<tr key={art._id}> 
<td><img src={art.imageart} width={80} height={80}/></td> 
 
 
              <td>{art.reference}</td> 
              <td>{art.designation}</td> 
              <td>{art.qtestock}</td> 
              <td>{art.prix}</td> 
 
              <td> 
                <Link 
                  className="btn btn-primary btn-sm" 
                  to={`/articles/view/${art._id}`} 
                > 
                  Consulter 
                </Link> 
                </td> 
                <td> 
                <Link 
                  className="btn btn-outline-primary btn-sm" 
                  to={`/articles/edit/${art._id}`} 
                > 
                  Modifier 
                </Link> 
                </td> 
                <td> 
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => handleDelete(art._id)} 
                > 
                  Supprimer 
                </button> 
              </td> 
            </tr> 
          ))} 
        </tbody> 
      </table> </div> 
  </div> 
         
  )
}

export default Listarticles
