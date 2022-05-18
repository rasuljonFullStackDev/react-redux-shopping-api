import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './container/Header';
import ProductList from './container/ProductList';
import ProductDeteils from './container/ProductDeteils';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/productdetil/:id' element={<ProductDeteils/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App