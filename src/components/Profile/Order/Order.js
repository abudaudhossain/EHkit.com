import React from 'react'
import "./Order.css"

const Order = ({order}) => {
    if(!order){
        return;
    }
    return (
        <div className="order-card popular-pack-block">
            <div className="img-container">
                <img src={order.product.image} alt='img' className='img-thumbnail' height={100} />
            </div>
            <div className="item-container ms-3">
                <h4>Product Name: {order.product.title}</h4>
                <p>Total Quantity: <span className='value'>{order.quantity}</span></p>
                <p>Total Price: <span className='value'>{order.totalPrice} Tk</span></p>
                <p>Order Status: <span className='value'>{order.status} </span></p>
                
            </div>
        </div>
    )
}

export default Order