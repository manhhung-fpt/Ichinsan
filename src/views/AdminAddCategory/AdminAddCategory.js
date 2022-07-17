
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function AdminAddCategory() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Add Category</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Category Name</label>
                        <Input
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2">
                      <Button color="primary" style={
                        {

                          fontSize: "10px",

                        }
                      }>

                        <span className="btn-label">
                          <i className="now-ui-icons ui-1_simple-remove" />
                        </span>
                        Cancel
                      </Button>
                    </Col>
                    <Col md="10">
                      <Button color="info" style={
                        {

                          fontSize: "10px",

                        }
                      }>
                        <span className="btn-label">
                          <i className="now-ui-icons ui-1_check" />
                        </span>
                        Add Auditor
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default AdminAddCategory;
