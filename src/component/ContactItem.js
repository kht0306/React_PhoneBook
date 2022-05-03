import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactItem = ({ name, phoneNumber, filteredList, setFilteredList }) => {
  const dispatch = useDispatch();
  const deletePhoneNumber = (phoneNumber) => {
    let deleteList = filteredList.filter(
      (item, index) => item.phoneNumber !== phoneNumber
    );
    console.log(deleteList);
    dispatch({ type: "DELETE_CONTACT", payload: { deleteList } });
  };
  return (
    <Row>
      <Col lg={2}>
        <img
          width={60}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
          alt=""
        />
      </Col>
      <Col lg={8}>
        <div>{name}</div>
        <div>{phoneNumber}</div>
      </Col>
      <Col>
        <Button lg={2} onClick={() => deletePhoneNumber(phoneNumber)}>
          삭제
        </Button>
      </Col>
    </Row>
  );
};

export default ContactItem;
