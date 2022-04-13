import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './POS.css';

const POS = () => {
    let i = 1;
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
                    <div className="row">
                        <div className="col-md-4">
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="1" selected>Biller 1</option>
                                <option value="2">Biller 2</option>
                                <option value="3">Biller 3</option>
                                <option value="4">Biller 3</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option value="1" selected>Warehouse 1</option>
                                <option value="2">Warehouse 2</option>
                                <option value="3">Warehouse 3</option>
                                <option value="4">Warehouse 3</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            
                            <div className="input-group">
                                <select className="form-select form-select-md " aria-label=".form-select-lg example">
                                    <option value="1" selected>Customer 1</option>
                                    <option value="2">Customer 2</option>
                                    <option value="3">Customer 3</option>
                                    <option value="4">Customer 3</option>
                                </select>
                                <button type="button" className="btn btn-outline-dark">Add +</button>
                                   
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="text" onChange={handleProductOnChange} id="productSearch" placeholder='product' className="form-control" />
                            <div className="search-wrapper w-70">
                                {
                                    searchResult.length > 0 ?
                                    <ul>
                                        {
                                            searchResult.map(product => 
                                                <li key={product.article_code} onClick={()=>addToCart(product)}> {product.EAN} - {product.name}  - ({product.article_code}) - {product.price} BDT </li>
                                            )
                                        }
                                    
                                    </ul>
                                    :
                                    ''

                                }
                            </div>
                        </div>
                        <div className="col-md-12">
                            <table className="table mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Sub-Total</th>
                                    </tr>
                                </thead>
                                <tbody className='cart-list'>
                                    {

                                        cart.map(cartItem =>
                                            <tr key={cartItem.EAN}>
                                                <th scope="row">{i++}</th>
                                                <td>{cartItem.name}</td>
                                                <td>{cartItem.price}</td>
                                                <td>1</td>
                                                <td>{cartItem.price}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <Header></Header>
                    <div className="card sticky-md-top">
                        <div className="card-body mb-5 ">
                            <h5 className="card-title">Finalize Sale</h5>
                            <hr />
                            <p className="card-text"><b>Total Item: </b> <span className='float-end'> 10</span></p>
                            <p className="card-text"><b>Total Bill: </b> <span className='float-end'> 10 BDT</span></p>
                            <p className="card-text"><b>Discount Amount: </b> <span className='float-end'> 10 BDT</span></p>
                            <p className="card-text"><b>Vat/Tax Amount: </b> <span className='float-end'> 10 BDT</span></p>
                            <p className="card-text"><b>Gross Total: </b> <span className='float-end'> 10 BDT</span></p>
                            <p className="card-text align-middle">
                                <div className="row">
                                    <div className="col-md-6"><b>Cash Received: </b></div>
                                    <div className="col-md-6"><input type="text" className='form-control float-end col-7' /></div>
                                </div>
                            </p>
                            <p className="card-text align-middle">
                                <div className="row">
                                    <div className="col-md-3"><b>Card: </b></div>
                                    <div className="col-md-5">
                                        <select className="form-select" aria-label=".form-select-lg example">
                                            <option value="1" selected>Bank 1</option>
                                            <option value="2">Bank 2</option>
                                            <option value="3">Bank 3</option>
                                            <option value="4">Bank 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4"><input type="text" className='form-control float-end col-12' /></div>
                                </div>
                            </p>
                            <p className="card-text align-middle">
                                <div className="row">
                                    <div className="col-md-3"><b>MFS: </b></div>
                                    <div className="col-md-5">
                                        <select className="form-select" aria-label=".form-select-lg example">
                                            <option value="0" selected>MFS</option>
                                            <option defaultValue="1" >Bkash</option>
                                            <option value="2">Nagod</option>
                                            <option value="3">Rocket</option>
                                            <option value="4">Upay</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4"><input type="text" className='form-control float-end col-12' /></div>
                                </div>
                            </p>
                            <p className="card-text"><b>Change Amount: </b> <span className='float-end'> 10 BDT</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POS;