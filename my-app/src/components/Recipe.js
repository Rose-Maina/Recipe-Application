import React, { useState } from "react";
import { Modal, show, Button } from "react-bootstrap";

const Recipe = ({ title, image, ingredients }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="col">
      <div className="recipe">
        <div className="recipe-body">
          <h1>{title}</h1>
          <img className="image" src={image} alt="" />
          <button type="button" className="btn btn-primary" onClick={handleShow}>
            View Ingredients'
          </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
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
