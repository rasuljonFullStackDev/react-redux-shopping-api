import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/action/productAction';
import ProductCard from './ProductCard';
import ClipLoader from "react-spinners/ClimbingBoxLoader";
const ProductList = () => {
    
 const dispatch = useDispatch()
 const [load,setLoad] = useState(true);
    const fetchProducts  = async () =>{
            const res = await axios.get('https://fakestoreapi.com/products')
            .catch((err)=>{
                console.log(err);
            })
            console.log(res.data);
            if(res.status===200){
                dispatch(setProducts(res.data))
                setLoad(false)
            document.body.style.position = ''
            }
    }
    useEffect(()=>{
        document.body.style.position = 'fixed'
        fetchProducts()
    },[])
    return (
        <div>
            <div className={load  ? "load" : "load activ"}>
            <ClipLoader  color='cyan' size={30} />
   
            </div>
            <ProductCard/>
            
        </div>
    )
}

export default ProductList