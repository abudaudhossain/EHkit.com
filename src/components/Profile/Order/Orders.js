import React, { useEffect, useState } from 'react'
import Order from './Order'
import { Container, Row, Col } from 'react-bootstrap'
import { getDataLocalDB } from '../../../hooks/localDB'


const Orders = () => {
    const [orders, setOrders] = useState(getDataLocalDB());

    useEffect(() => {
        setOrders(getDataLocalDB())
    }, [getDataLocalDB()])

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