import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import FinalizeSale from './Parts/FinalizeSale';
import PosCarts from './Parts/PosCarts';
import PosHeader from './Parts/PosHeader';
import './POS.css';

const POS = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // console.log(products)

    const handleProductOnChange = (e) => {
        const pCode = e.target.value;

        const searchProducts = ()=>{
            let result = [];
            for(const product of products){
                const articleCode = product.article_code;
                if(product.name.toLowerCase().includes(pCode) || product.EAN.startsWith(pCode) || articleCode.toString().startsWith(pCode)){
                    result.push(product)
                }
            }
            if(pCode !=='') {
                return result
            }else{
               return [];
            }
            
        }
        setSearchResult(searchProducts());

        const getProduct = products.find(({ EAN }) => EAN === pCode) ||products.find(({ articleCode }) => articleCode === parseInt(pCode))// //  
        if (getProduct) {
            const newCart = [...cart, getProduct];
            setCart(newCart);
            setSearchResult([]);
            e.target.value = '';

            
        }

        console.log(pCode);
        console.log(getProduct);

    }


    const addToCart = product => {
        const newCart = [...cart, product];
            setCart(newCart);
            const searchField = document.getElementById('productSearch');
            searchField.value = '';
            setSearchResult([]);
    }    
    console.log(cart);

    return (
        <div className='container-fluid mt-4'>
            <div className="row">
                <div className="col-md-9">
                    <PosHeader></PosHeader>
                    <PosCarts cart={cart} handleProductOnChange={handleProductOnChange} searchResult={searchResult} addToCart={addToCart}></PosCarts>
                </div>
                <div className="col-md-3">
                    <Header></Header>
                    <FinalizeSale></FinalizeSale>
                </div>
            </div>
        </div>
    );
};

export default POS;