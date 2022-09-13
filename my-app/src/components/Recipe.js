import React, { useState } from "react";
import { Modal, show, Button } from "react-bootstrap";

const Recipe = ({ title, image, ingredients }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
      <div className="col">
        <div className='card' style={{width: 25 + 'rem'}}>
      <div className="card text-center bg-secondary mb-3">
        <div className="card-body">
          <h1>{title}</h1>
          <img className="image" src={image} alt="" />
          <div className="card-body">
          <button type="button" className="btn btn-primary" onClick={handleShow}>
            View Ingredients'
          </button>
      </div>
      </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>{title}</h1>
                    <img className="image" src={image} alt="" />
                    <ul className="ingredient">
                    {ingredients.map((ingredient) => (
                        <li className="ingredient-container">{ingredient.text}</li>
                    ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
          </div>
      </div>
    </div>
  
  );
};

export default Recipe;
