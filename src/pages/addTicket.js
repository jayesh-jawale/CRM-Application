import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { PageBreadCrumb } from "./dashboard";
import { AddNewTicket } from "../components/AddNewTicket";

export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddNewTicket />
        </Col>
      </Row>
    </Container>
  );
};