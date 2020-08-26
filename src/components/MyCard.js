import React from 'react';
import { Card,Button } from 'react-bootstrap'


const MyCard = props => {
    const { name, description, imgUrl, url } = props
    return (<Card style={{ width: '100%', minHeight: '160px' }}>
        {imgUrl && (<Card.Img as="img" variant="top" className="img-block" src={imgUrl} />)} 
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-ell">
                {description || ' '}
            </Card.Text>
            <Button variant="primary" href={url} target="blank">Go</Button>
        </Card.Body>
    </Card>)
}

export default MyCard