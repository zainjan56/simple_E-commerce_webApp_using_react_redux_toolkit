import React from "react";
import { useEffect, useState } from "react";
import ButtonItem from "./ButtonItem";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Products = (props) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const cardData = await response.json();
    setData(cardData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Row xs={1} md={4} className="g-3">
      {data.map((item) => (
        <Col>
            <Card id="myCard">
              <Card.Img variant="top" src={item.image} className="image" />
              <Card.Body>
                <Card.Title id="title">{item.title}</Card.Title>
                <p className="price">
                  <b>${item.price}</b>
                </p>
                  <ButtonItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    description={item.description}
                  />
              </Card.Body>
            </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Products;
