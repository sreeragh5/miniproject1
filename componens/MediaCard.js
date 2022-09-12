import React from 'react';
import Card from 'react-bootstrap/Card';


function MediaCard({title,Subtitle}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{Subtitle}</Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
        <Card.Link href="#">Apply</Card.Link>
        <Card.Link href="#">Cancel</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MediaCard