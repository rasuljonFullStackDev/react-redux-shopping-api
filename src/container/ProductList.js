import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/action/productAction';
import ProductCard from './ProductCard';
const ProductList = () => {
    
 const dispatch = useDispatch()
    const fetchProducts  = async () =>{
            const res = await axios.get('https://fakestoreapi.com/products')
            .catch((err)=>{
                console.log(err);
            })
            console.log(res.data);
            dispatch(setProducts(res.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    return (
        <div>
            <ProductCard/>
            
        </div>
    )
}

export default ProductList