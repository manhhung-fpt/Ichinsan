
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
function AdminFeedBackCategory() {
    const [modalNotice, setModalNotice] = React.useState(false);
    const [modalEdit, setModalEdit] = React.useState(false);
    const toggleModalNotice = () => {
        setModalNotice(!modalNotice);
    };
    const toggleModalEdit = () => {
        setModalEdit(!modalEdit);
    };
    const [singleSelect, setSingleSelect] = React.useState(null);
    const [multipleSelect, setMultipleSelect] = React.useState(null);
    const [count, setCount] = React.useState(0);

    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col md="12" >
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Feedback Category</CardTitle>
                                <Breadcrumbs aria-label="breadcrumb" style={{ padding: '20px' }}>
                                    <Link underline="hover" color="inherit" href="/admin/admin-category-home">
                                        Category Home
                                    </Link>
                                    <Typography color="text.primary">Category Feedback</Typography>
                                </Breadcrumbs>
                                <Row>
                                    <Col xs={12} md={8} size="sm"  >
                                        Sort :
                                    </Col>
                                    <Col Col xs={12} md={4} size="sm" >

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
                                    <Col xs={12} md={4} size="sm">
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
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td>User Guides</td>
                                            <td>
                                                <Pagination>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            <span aria-hidden="true" >
                                                                This impressive paella is a perfect party dish and a fun meal...
                                                                <i
                                                                    className="fa fa-angle-double-right"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
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
                                        </tr>
                                        <tr>
                                            <td className="text-center">2</td>
                                            <td>Maintenance Manuals</td>

                                            <td>
                                                <Pagination>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            <span aria-hidden="true" >
                                                                This impressive paella is a perfect party dish and a fun meal...
                                                                <i
                                                                    className="fa fa-angle-double-right"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
                                            </td>
                                            <td className="text-right">
                                                <Switch defaultValue={false} />


                                            </td>
                                            <td className="text-right btns-mr-5">

                                                <Button color="primary" className="btn-round" style={
              {
               
                fontSize: "10px",
               
              }
            }>
                                                    <i className="now-ui-icons ui-2_settings-90" /> Edit
                                                </Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">3</td>
                                            <td>Handbooks</td>
                                            <td>
                                                <Pagination>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            <span aria-hidden="true" >
                                                                This impressive paella is a perfect party dish and a fun meal...
                                                                <i
                                                                    className="fa fa-angle-double-right"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
                                            </td>

                                            <td className="text-right">
                                                <Switch defaultValue={false} />


                                            </td>
                                            <td className="text-right btns-mr-5">

                                                <Button color="primary" className="btn-round" style={
              {
               
                fontSize: "10px",
               
              }
            }>
                                                    <i className="now-ui-icons ui-2_settings-90" /> Edit
                                                </Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">4</td>
                                            <td>API Documentation</td>
                                            <td>
                                                <Pagination>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            <span aria-hidden="true" >
                                                                This impressive paella is a perfect party dish and a fun meal...
                                                                <i
                                                                    className="fa fa-angle-double-right"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
                                            </td>

                                            <td className="text-right">
                                                <Switch defaultValue={false} />


                                            </td>
                                            <td className="text-right btns-mr-5">

                                                <Button color="primary" className="btn-round" style={
              {
               
                fontSize: "10px",
               
              }
            }>
                                                    <i className="now-ui-icons ui-2_settings-90" /> Edit
                                                </Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">5</td>
                                            <td>Webpages</td>
                                            <td>
                                                <Pagination>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            <span aria-hidden="true" >
                                                                This impressive paella is a perfect party dish and a fun meal...
                                                                <i
                                                                    className="fa fa-angle-double-right"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
                                            </td>

                                            <td className="text-right">
                                                <Switch defaultValue={false} />


                                            </td>
                                            <td className="text-right btns-mr-5">

                                                <Button color="primary" className="btn-round" style={
              {
               
                fontSize: "10px",
               
              }
            }>
                                                    <i className="now-ui-icons ui-2_settings-90" /> Edit
                                                </Button>

                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </CardBody>
                            <CardHeader>
                                <Row>
                                    <Col xs={12} md={5} size="sm">

                                    </Col>
                                    <Col xs={12} md={5} size="sm"></Col>
                                    <Col xs={12} md={2} size="sm">
                                        <Button color="info" style={
              {
               
                fontSize: "10px",
               
              }
            }>
                                            Add Auditor
                                            <span className="btn-label">
                                                <i className="now-ui-icons arrows-1_minimal-right" />
                                            </span>

                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardHeader>
                                <Row>
                                    <Col xs={12} md={4} size="sm">

                                    </Col>
                                    <Col xs={12} md={1} size="sm"></Col>
                                    <Col xs={12} md={3} size="sm">
                                        <Pagination>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    <span aria-hidden="true">
                                                        <i
                                                            className="fa fa-angle-double-left"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem active>
                                                <PaginationLink href="#">2</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">3</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#">
                                                    <span aria-hidden="true">
                                                        <i
                                                            className="fa fa-angle-double-right"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </Col>
                                    <Col xs={12} md={4} size="sm">

                                    </Col>
                                </Row>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default AdminFeedBackCategory;