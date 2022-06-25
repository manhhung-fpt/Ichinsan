
import React from "react";
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Table,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Pagination,
  PaginationLink,
  PaginationItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,

} from "reactstrap";
import axios from 'axios';
import { useEffect } from "react";
import Select from "react-select";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
var selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" },
];

function AdminProjectCategory() {
  const [modalNotice, setModalNotice] = React.useState(false);
  const [modalEdit, setModalEdit] = React.useState(false);
  const [pCategory, setPCaTegory] = React.useState([]);
  const toggleModalNotice = () => {
    setModalNotice(!modalNotice);
  };
  const toggleModalEdit = () => {
    setModalEdit(!modalEdit);
  };
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/projectcategories`)
      .then((res) => {
        const data = res.data;
        setPCaTegory(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12" >
            <Card>

              <CardHeader>
                <CardTitle tag="h4">Project Category</CardTitle>
                <Breadcrumbs aria-label="breadcrumb" style={{ padding: '20px' }}>
                  <Link underline="hover" color="inherit" href="/admin/admin-category-home">
                    Category Home
                  </Link>
                  <Typography color="text.primary">Category Project</Typography>
                </Breadcrumbs>
                <Row>
                  <Col xs={12} md={8} size="sm"  >
                  <Col xs={12} md={2} size="sm">
                    <Button color="info" onClick={toggleModalNotice} style={
                      {

                        fontSize: "10px",

                      }
                    }>
                      + Category
                      <span className="btn-label">
                        <i className="now-ui-icons arrows-1_minimal-right" />
                      </span>

                    </Button>
                  </Col>
                  </Col>
                  <Col Col xs={12} md={4} size="sm" >
                  <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      placeholder="Result of Page"
                      name="singleSelect"
                      value={singleSelect}
                      options={selectOptions}
                      onChange={(value) => setSingleSelect(value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} size="sm">

                  </Col>
                  <Col xs={12} md={1} size="sm"></Col>
                  <Col xs={12} md={3} size="sm">

                    <Modal
                      isOpen={modalNotice}
                      toggle={toggleModalNotice}
                      className="modal-notice text-center"
                    >
                      <ModalHeader style={{ width: '150%' }} toggle={toggleModalNotice}>
                        Add Category
                      </ModalHeader>
                      <ModalBody>
                        <Row>
                          <Col md="12">
                            <Card>
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
                                          onChange={e => setCount(e.target.value.length)}
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col md='9'></Col>
                                    <Col md='3'>{count}/500</Col>
                                  </Row>
                                </Form>
                              </CardBody>
                            </Card>
                          </Col>

                        </Row>
                      </ModalBody>
                      <ModalFooter className="justify-content-center">
                        <Row>
                          <Col md="6">
                            <Button color="primary" onClick={toggleModalNotice} style={
                              {

                                fontSize: "10px",

                              }
                            }>



                              Cancel
                            </Button>
                          </Col>
                          <Col md="6">
                            <Button color="info" style={
                              {

                                fontSize: "10px",

                              }
                            }>
                              Add
                            </Button>
                          </Col>
                        </Row>
                      </ModalFooter>
                    </Modal>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">#</th>
                      <th>Category Name</th>
                      <th>Description</th>

                      <th className="text-right">Status</th>
                      <th className="text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    pCategory.map((category, index) => {
                      return (
                      <tr>
                        <td className="text-center">{index + 1}</td>
                        <td>{category.name}</td>
                        <td>
                          {category.description}
                        </td>
                        <td className="text-right">
                          <Switch defaultValue={false} />
                        </td>
                        <td className="text-right btns-mr-5">

                          <Button onClick={toggleModalEdit} color="primary" className="btn-round" style={
                            {

                              fontSize: "10px",

                            }
                          }>
                            <i className="now-ui-icons ui-2_settings-90" /> Edit
                          </Button>
                          <Modal
                            isOpen={modalEdit}
                            toggle={toggleModalEdit}
                            className="modal-notice text-center"
                          >
                            <ModalHeader style={{ width: '150%' }} toggle={toggleModalEdit}>
                              Edit Category
                            </ModalHeader>
                            <ModalBody>
                              <Row>
                                <Col md="12">
                                  <Card>
                                    <CardBody>
                                      <Form>
                                        <Row>
                                          <Col className="pr-1" md="6">
                                            <FormGroup>
                                              <label>Category Name</label>
                                              <Input
                                                defaultValue={category.name}
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
                                                defaultValue={category.description}
                                                rows="4"
                                                type="textarea"
                                                onChange={e => setCount(e.target.value.length)}
                                              />
                                            </FormGroup>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col md='9'></Col>
                                          <Col md='3'>{count}/500</Col>
                                        </Row>
                                      </Form>
                                    </CardBody>
                                  </Card>
                                </Col>
                              </Row>
                            </ModalBody>
                            <ModalFooter className="justify-content-center">
                              <Row>
                                <Col md="6">
                                  <Button color="primary" onClick={toggleModalEdit} style={
                                    {

                                      fontSize: "10px",

                                    }
                                  }>
                                    Cancel
                                  </Button>
                                </Col>
                                <Col md="6">
                                  <Button color="info" style={
                                    {

                                      fontSize: "10px",

                                    }
                                  }>
                                    Edit
                                  </Button>
                                </Col>
                              </Row>
                            </ModalFooter>
                          </Modal>
                        </td>
                      </tr>);
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AdminProjectCategory;