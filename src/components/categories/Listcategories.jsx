import axios from "axios"
import { useEffect, useState } from "react"

const Listcategories = () => {

    const[categ,setCateg]=useState([])
    //méthode pour récupérer la liste des catégories
    const getCategories=async()=>{
        try {
            const res=await axios.get("http://localhost:3000/api/categories")
            setCateg(res.data)
           
        } catch (error) {
           console.log(error) 
        }
    }
useEffect(()=>{
    getCategories()
},[])
/*const handleDelete=async(id)=>{
    try {
        await axios.delete(`http://localhost:3000/api/categories/${id}`)    
        getCategories() // Refresh the list after deletion
  } catch (error) {
    console.log(error)
  }
}*/
  return (
    <div>
      Liste des catégories
      <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom catégorie</th>
                <th>Image catégorie</th>
                <th>Update</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            {
                categ.map((cat,index)=>
                <tr key={index}>
                    <td>{cat._id}</td>
                    <td>{cat.nomcategorie}</td>
                    <td><img src={cat.imagecategorie} alt={cat.nomcategorie} width="100"/></td>
                    <td><button className="btn btn-warning btn-sm">Update</button></td>
                    <td><button className="btn btn-danger btn-sm" >Delete</button></td>
                </tr>
           ) }
        </tbody>
      </table>
    </div>
  )
}

export default Listcategories
