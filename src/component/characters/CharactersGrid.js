import React from 'react'
import {Container,Row, Col, Spinner} from 'react-bootstrap'
import CardItem from './CardItem'

const CharactersGrid = ({item, isLoding}) => {
    return (
        isLoding ? <Spinner animation="border" variant="light" className='spinner' />
        : <Container>
            <Row>
                {item.map(ite => {
                    return(
                    <Col lg={3} sm={6} xs={12}>
                        <CardItem key={ite.cher_id} ite={ite}/>
                     </Col>
                    )
                })} 
            </Row>
        </Container>
    )
}

export default CharactersGrid
