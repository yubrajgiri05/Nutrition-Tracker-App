import React from 'react'
import { Col } from 'react-bootstrap'

const Card = ({ title, description,src }) => {
  return (
    <>
      <Col md={6} lg={4}>
        <div className="card" >
            <img src={src} className="card-img-top" alt="..." style={{height:250}} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>

      </Col>
    </>
  )
}

export default Card
