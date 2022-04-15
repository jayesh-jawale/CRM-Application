import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
// import PropTypes from "prop-types";
import { addNewTicket } from "../pages/ticketAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const AddNewTicket = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const {user: {user}} = useSelector((state) => state.user)
  const { isLoading, successMessage, error} = useSelector((state) => state.newTicket)

  const initialFrmDt = {
    subject: "",
    issueDate: "",
    message: "",
  };

  const [frmData, setFrmData] = useState(initialFrmDt);

  useEffect(() => {}, [frmData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    dispatch(addNewTicket({...frmData, sender: user.name}));
    alert('Created')
    history.push('/tickets')
  };
  return (
    <div className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Text Area</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="5"
            value={frmData.message}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Add
        </Button>
      </Form>
    </div>
  );
};

// AddNewTicket.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   frmDt: PropTypes.object.isRequired,
// };