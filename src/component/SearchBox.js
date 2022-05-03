import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState();
  const dispatach = useDispatch();

  const searching = (e) => {
    e.preventDefault();
    dispatach({ type: "SEARCH-LIST", payload: { keyword } });
  };

  return (
    <Form onSubmit={searching}>
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="검색"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
