import React, { useEffect } from 'react'
import { getAllProducts, addCart } from '../../redux/actions/products'
import {connect} from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Home.scss';
const Home = (props) => {
    useEffect(() => {
        getAllProducts()
        .catch(console.error)
    }, [])
    return (
        <div className="products">
            {props.products?.map(product=><div className="product" key={product._id}>
                <span>{product.name}</span>
                <span>{product.price} €</span>
                <img src={product.image_path} alt=""/>
                <ShoppingCartOutlined onClick={addCart.bind(this,product)}/>
            </div>)}
        </div>
    )
}
const mapStateToProps = ({product}) => ({products:product.products})
export default connect(mapStateToProps)(Home)
