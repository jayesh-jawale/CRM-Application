import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tickets from "../../src/data/ticket.json";
import { Table } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";  // To access whole global state
import { LinkContainer } from "react-router-bootstrap";

import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <Container>
    <Row>
        <Col>
          <PageBreadCrumb page="Dashboard" />
        </Col>
    </Row>
    <Row>
        <Col className="text-center mt-5 mb-2">
        <Link to="/add-ticket">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export const TicketTable = () => {
  const {searchTicketList} = useSelector((state) => state.tickets);

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {searchTicketList.length ? (
            searchTicketList.map((row) => (
              <tr key={row._id}>
                <td>{row._id}</td>
                <td>
                  <Link to={`/tickets/${row._id}`}>{row.subject}</Link>
                </td>
                <td>{row.status}</td>
                <td>{row.openedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No ticket show{" "}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  };

 export const PageBreadCrumb = ({ page }) => {
  return (
    <Breadcrumb>
      <LinkContainer to="/">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};