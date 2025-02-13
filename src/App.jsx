import { useState } from 'react'
import Blogcreate from './Blogcreate'
import BlogList from './BlogList'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import ShowBlog from './ShowBlog'
import Home from './Home'
import Layout from './Layout'
import SerDoc from './SerDoc'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Blogcreate/>}/>
          <Route path="/set" element={<SerDoc/>}/>
          <Route path="/list" element={<BlogList/>}/>
          <Route path="/blog/:id" element={<ShowBlog/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
