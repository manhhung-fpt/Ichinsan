/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Table,
  UncontrolledTooltip,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";

import Select from "react-select";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
var selectOptions = [
  { value: "No", label: "No" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" },
];
function AdminAssign() {
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12" >
            <Card>
              <CardHeader>

                <Button>
                  <span className="btn-label">
                    <i className="now-ui-icons arrows-1_minimal-left" />
                  </span>
                  Back
                </Button>
              </CardHeader>
              <CardHeader>
                <CardTitle tag="h4">Auditor's Name : John Doe</CardTitle>

                <Row>
                  <Col xs={12} md={4} size="sm">
                    
                  </Col>
                  <Col xs={12} md={1} size="sm"></Col>
                  <Col xs={12} md={3} size="sm">
                  <Button color="info">
                      <span className="btn-label">
                        <i className="now-ui-icons ui-1_simple-add" />
                      </span>
                      Assign Auditor
                    </Button>
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

                      <th>Article Name</th>
                      <th>Language</th>
                      <th>Deadline</th>
                      <th className="text-right">Status</th>
                      <th className="text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>

                      <td>Develop</td>
                      <td>English</td>
                      <td>06/08/2022 12:00 AM</td>
                      <td className="text-right">
                        <Switch defaultValue={false} />


                      </td>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>

                    </tr>
                    <tr>
                      <td className="text-center">2</td>

                      <td>Marketing</td>
                      <td>English</td>
                      <td>06/08/2022 12:00 AM</td>
                      <td className="text-right">
                        <Switch defaultValue={false} />


                      </td>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>

                      <td>Design</td>
                      <td>English</td>
                      <td>06/08/2022 12:00 AM</td>
                      <td className="text-right">
                        <Switch defaultValue={false} />


                      </td>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>

                      <td>Communication</td>
                      <td>Japanese</td>
                      <td>06/08/2022 12:00 AM</td>
                      <td className="text-right">
                        <Switch defaultValue={false} />


                      </td>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>

                      <td>Marketing</td>
                      <td>Japanese</td>
                      <td>06/08/2022 12:00 AM</td>
                      <td className="text-right">
                        <Switch defaultValue={false} />


                      </td>
                      <td className="text-center">
                        <FormGroup check>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </td>
                    </tr>

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

export default AdminAssign;