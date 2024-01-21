import React from 'react'
import { Col } from 'react-bootstrap'

const Card = ({ title, description,src }) => {
  return (
    <>
      <Col md={6} lg={4}>
        <div className="card bg-danger" style={{ "height" : "100%"}}>
            <img src={src} className="card-img-top p-3" alt="..." style={{height:250}} />
            <div className="card-body p-4">
                <h5 className="card-title">{title.slice(0,50)}...</h5>
                <p className="card-text">{description.slice(0,131)}</p>
            </div>
        </div>

      </Col>
    </>
  )
}

export default Card
