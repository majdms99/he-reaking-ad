import {useState} from 'react'
import {Container, Form,Col, Row} from 'react-bootstrap'


const Search = ({getQuery}) => {

    const [text ,setText] = useState('');

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto mb-4'>
                <Form>
                    <Form.Control 
                    type="text" 
                    placeholder="Search characters"
                    className='input-search'
                    value={text}
                    autoFocus
                    onChange={(e) => onChange(e.target.value)}
                    />
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Search
