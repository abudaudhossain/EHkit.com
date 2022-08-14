import React, { useEffect, useState } from 'react'
import Order from './Order'
import { Container, Row, Col } from 'react-bootstrap'
import { getDataLocalDB } from '../../../hooks/localDB'


const Orders = () => {
    const [orders, setOrders] = useState(getDataLocalDB("myOrder"));

    useEffect(() => {
        setOrders(getDataLocalDB("myOrder"))
    }, [])
    if (!orders) {
        return <h3 className='text-center m-5'>Oder unAvailable</h3>
    }
    return (
        <section>
            <Container>
                <Row>
                    {
                        orders.map((order, index) => {
                            return (
                                <Col sm={6} key={index}>
                                    <Order order={order} />
                                </Col>
                            )

                        })
                    }


                </Row>
            </Container>
        </section>
    )
}

export default Orders