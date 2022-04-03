import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadCrumb } from "./dashboard";
import { SearchForm } from "../components/SearchForm";
import { TicketTable } from "./dashboard";

import {useDispatch} from "react-redux";
import {fetchAllTickets} from "./ticketAction";

import { Link } from "react-router-dom";

export const TicketLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};