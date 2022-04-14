import {Form, Button} from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { replySingleTicket } from "../pages/ticketAction";
import { Alert } from 'react-bootstrap';

export const UpdateTicket = ({_id}) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const {user: {user}} = useSelector((state) => state.user)

    const handleOnChange = (e) => {
        setMessage(e.target.value);
     }
 
     const handleOnSubmit = (e) => {
         e.preventDefault();

         const msgObj = {
            sender: user.name,
            message,
        }
           dispatch(replySingleTicket(_id, msgObj));
           setMessage("");
       };

        // const {replyMessage} = useSelector((state) => state.tickets)

    return (
        // <div>
        //     {replyMessage && <Alert variant='success'>{replyMessage}</Alert>}

            <Form onSubmit={handleOnSubmit}>
            <Form.Label>
                Reply
            </Form.Label>
            <Form.Text>Please reply your message here or update the ticket</Form.Text>
            <Form.Control
                value={message}
                onChange={handleOnChange}
                as="textarea"
                row="5"
                name="detail"
            />
            <div className="text-right mt-3 mb-3">
            <Button variant="outline-info" type="submit">
                Reply
            </Button>
            </div>
        </Form>
        // </div>
    )
}

UpdateTicket.propTypes = {
    _id: PropTypes.string.isRequired,
  };