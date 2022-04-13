import React from 'react';
import Icon from "react-hero-icon";

const PosCarts = ({ cart, handleProductOnChange, searchResult, addToCart }) => {
    let i = 1;
    console.log(searchResult);
    return (
        <div className="row"> 
            <div className="col-md-12">
                <input type="text" onChange={handleProductOnChange} id="productSearch" placeholder='product' className="form-control" />
                <div className="search-wrapper w-70">
                    {
                        searchResult.length > 0 ?
                            <ul>
                                {
                                    searchResult.map(product =>
                                        <li key={product.article_code} onClick={() => addToCart(product)}> {product.EAN} - {product.name}  - ({product.article_code}) - {product.price} BDT  </li>
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
                                    <td>{cartItem.price}
                                        <Icon icon="x"/>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PosCarts;