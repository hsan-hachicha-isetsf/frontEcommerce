import axios from "axios"
import { useEffect, useState } from "react"

const Listscategories = () => {
  const[scat,setScat] = useState([])
  const getScategories=async()=>{
    try {
      const res=await axios.get("http://localhost:3000/api/scategories")
      setScat(res.data) 
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getScategories()
  },[])
  return (
    <div>
      <h1>Liste des sous-catégories</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom sous-catégorie</th>
            <th>Image </th>
            
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            scat.map((sc,index)=>
              <tr key={index}>
                <td>{sc.nomscategorie}</td>
                <td><img src={sc.imagescategorie} alt={sc.nomscategorie} width="100"/></td>
               
                <td><button className="btn btn-warning btn-sm">Update</button></td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr>  
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Listscategories
