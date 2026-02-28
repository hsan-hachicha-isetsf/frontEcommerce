import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Listcategories from "./components/categories/Listcategories"
import Insertcategorie from "./components/categories/Insertcategorie"
import Updatecategorie from "./components/categories/Updatecategorie"
import Listscategories from "./components/scategories/Listscategories"
import Insertscategorie from "./components/scategories/Insertscategorie"
import Updatescategorie from "./components/scategories/Updatescategorie"
import Listarticles from "./components/articles/Listarticles"
import Insertarticle from "./components/articles/Insertarticle"
import Updatearticle from "./components/articles/Updatearticle"
import Menu from "./components/Menu"
import Viewarticle from "./components/articles/Viewarticle"
function App() {
  return (
    <>
   
    <Router>
      <Menu />
      <Routes>
        <Route path="/categories" element={<Listcategories />} />
        <Route path="/insertcategorie" element={<Insertcategorie />} />
        <Route path="/updatecat/:id" element={<Updatecategorie />} />

        <Route path="/scategories" element={<Listscategories />} />
        <Route path="/insertscategorie" element={<Insertscategorie />} />
        <Route path="/updatescat/:id" element={<Updatescategorie />} />

        <Route path="/articles" element={<Listarticles />} />
        <Route path="/articles/add" element={<Insertarticle />} />
        <Route path="/articles/edit/:id" element={<Updatearticle />} />
        <Route path="/articles/view/:id" element={<Viewarticle />} />
      </Routes>
    </Router>
    </>
  )
}
export default App
