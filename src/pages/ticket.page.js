import {Container, Row, Col, Button} from "react-bootstrap";
import { PageBreadCrumb } from "./dashboard";
import { MessageHistory } from "../components/MessageHistory";
import { UpdateTicket } from "../components/UpdateTicket";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleTicket } from "./ticketAction";
import { useDispatch, useSelector } from "react-redux";

export const Page = () => {
    // const ticket = tickets[0];

    const {tId} = useParams();
    const dispatch = useDispatch();
    const {selectedSingleTicket} = useSelector((state) => state.tickets)
    const [message, setMessage] = useState("");

    useEffect(() => {
        dispatch(fetchSingleTicket(tId));
    }, [message, tId, dispatch]);

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
                    <div className="subject">{selectedSingleTicket.subject}</div>
                    <div className="date">{selectedSingleTicket.status}</div>
                    <div className="status">{selectedSingleTicket.openedAt}</div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <Col>{selectedSingleTicket.conversations && <MessageHistory msg={selectedSingleTicket.conversations} />}</Col>
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