import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadCrumb } from "./dashboard";
import { AddNewTicket } from "../components/AddNewTicket";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submit request received", frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddNewTicket
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
          />
        </Col>
      </Row>
    </Container>
  );
};