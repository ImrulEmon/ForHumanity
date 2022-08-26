import React from 'react';
import Card from 'react-bootstrap/Card';


const SingleBlog = (props) => {
    //console.log(blog)
    let variant='Secondary'
    const{blog,title,writer}=props.blog;
    return (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="mb-2"
        >
          <Card.Header>{writer}</Card.Header>
          <Card.Body className='py-3'>
            <Card.Title>{title} </Card.Title>
            <Card.Text className='my-3'>
              {blog}
            </Card.Text>
          </Card.Body>
        </Card>
    );
};

export default SingleBlog;