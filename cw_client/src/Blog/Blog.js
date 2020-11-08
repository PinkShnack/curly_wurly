import React from "react";
import "./Blog.css";
import BlogCards from "./BlogCards";
import Categories from '../shared/categories'
import { Col, Row } from "react-bootstrap";

export default function Blog() {
  return (
    <div className="Blog">
      <Row style={{ paddingTop: '48px' }}>
        <Col><Categories></Categories></Col>
        <Col sm={8}><BlogCards></BlogCards></Col>
      </Row>
    </div>
  );
}