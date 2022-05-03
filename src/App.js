import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

//1.왼쪽에는 연락처 리스트와 검색창이 있다
//2.이름과 연락처를 추가할 수 있다
//3.리스트에 아이템이 몇개있는지 보인다
//4.사용자가 이름으로 검색할 수 있다

function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
