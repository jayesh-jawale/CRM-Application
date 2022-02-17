import {Container, Row, Col, Button} from "react-bootstrap";
import { PageBreadCrumb } from "./dashboard";
import tickets from "../../src/data/ticket.json";
import { MessageHistory } from "../components/MessageHistory";
import { UpdateTicket } from "../components/UpdateTicket";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Page = () => {
    // const ticket = tickets[0];

    const {tId} = useParams();
    const [message, setMessage] = useState("");
    const [ticket, setTicket] = useState("");

    useEffect(() => {
        for (let i = 0; i < tickets.length; i++) {
            if(tickets[i].id == tId) {
                setTicket(tickets[i])
                continue;
            }
        }
    }, [message, tId]);

    const handleOnChange = (e) => {
       setMessage(e.target.value);
    }

    const handleOnSubmit = () => {
        alert("Form submited!");
      };

    return (
        <Container>
            <Row>
                <Col>
                 <PageBreadCrumb page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div className="subject">{ticket.subject}</div>
                    <div className="date">{ticket.status}</div>
                    <div className="status">{ticket.addedAt}</div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
                </Col>
            </Row>
        </Container>
    )
}