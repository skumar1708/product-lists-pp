import React from 'react';
import Product from "../presentational/Product";


export default class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products : this.props.data
        }
    }
    render(){
        console.log("Data are ", this.state.products);
        return (
            this.state.products.map((item) => {
               return <Product key={item.id} {...item}/>;
            })
        );
    }
}