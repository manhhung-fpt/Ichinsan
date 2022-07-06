
import React from "react";
import Switch from "react-bootstrap-switch";
import Datetime from "react-datetime";
import { useEffect } from "react";
import { storage } from "Firebase";
import { ref, uploadBytes, getDownloadURL, getBytes } from "firebase/storage";
import { async } from "@firebase/util";

// reactstrap components
import {
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { useHistory } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import moment from "moment";
import Docxtemplater from "docxtemplater";
import JSZip from "jszip";

function CustomerAddArticle(props) {
  const projectId = props.location.search.split("=")[1];
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [singleSelect1, setSingleSelect1] = React.useState(null);
  const [singleFileName, setSingleFileName] = React.useState("");
  const [singleFileName1, setSingleFileName1] = React.useState("");

  const [singleFile, setSingleFile] = React.useState(null);
  const [singleFile1, setSingleFile1] = React.useState(null);
  const [openedCollapses, setOpenCollapses] = React.useState(["collapseOne"]);
  const [hTabs, sethTabs] = React.useState("ht1");
  const [vTabs, setvTabs] = React.useState("vt1");
  const [vTabsIcons, setvTabsIcons] = React.useState("vti1");
  const [pageSubcategories, setpageSubcategories] = React.useState("ps1");
  const singleFileRef = React.useRef();
  const PizZip = require('pizzip')
  const [fileURL, setFileURL] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [languageFrom, setLanguageFrom] = React.useState("");
  const [languageCodeFrom, setLanguageCodeFrom] = React.useState("");
  const [languageTo, setLanguageTo] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [deadLine, setDeadline] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [language, setLanguageList] = React.useState([])
  const [countWord, setCountWord] = React.useState(0);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    setCount1(event.target.value.length);
  };

  const onChangeLanguageFrom = (e) => {
    setLanguageFrom(e.target.value)
    setLanguageCodeFrom(e.target.key)
    console.log(languageCodeFrom);
  }
  const onChangeLanguageTo = (e) => {
    setLanguageTo(e.target.value)
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
    setCount2(e.target.value.length)

  }

  const handleSubmit = () => {
    const fileRef = ref(storage, `originalArticles/${singleFileName}`)
    getDownloadURL(fileRef).then((response) => {
      setFileURL(response)
    })
    // add article service
    var axios = require('axios');
    var data = JSON.stringify({
      "projectId": projectId,
      "name": title,
      "languageFrom": languageFrom,
      "languageTo": languageTo,
      "description": description,
      "originalContent": fileURL,
      "deadline": moment(deadLine).format('YYYY-MM-D'),
      "numberOfWords": countWord,
      "fee": countWord/500
    });

    var config = {
      method: 'post',
      url: 'https://api-dotnet-test.herokuapp.com/api/articles',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  let history = useHistory();
  const addSingleFile = async (e, type) => {
    setSingleFile(null);
    setSingleFileName("");
    e.preventDefault();
    let fileNames = "";
    let files = e.target.files;
    let file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = async (e) =>{
      const content = e.target.result;
    var doc = new Docxtemplater(new PizZip(content), {delimiters: {start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j'}});
    var text = doc.getFullText();
    setCountWord(text.length)
    }
    
    
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
    }
    setSingleFile(file);
    setSingleFileName(fileNames);
    const fileRef = ref(storage, `originalArticles/${fileNames}`)
    uploadBytes(fileRef, file).then((res) => {
      getDownloadURL(res.ref).then((response) => {
        setFileURL(response)
      })
    })
  };
  
  const onClickBack = () => {
    history.push("/admin/customer-arti-detail");
  }
  const handleSingleFileInput = (e) => {
    singleFileRef.current.click(e);
  };
  useEffect(() => {
    var axios = require('axios');
    var data = '';
    var config = {
      method: 'get',
      url: 'https://api-dotnet-test.herokuapp.com/api/languages',
      headers: {},
      data: data
    };
    axios(config)
      .then(function (response) {
        setLanguageList(response.data)
        console.log(response.data[0].name)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12" >
            <Card>
              <CardHeader>
                <Button onClick={onClickBack} style={
                  {

                    fontSize: "10px",

                  }
                }>
                  <span className="btn-label">
                    <i className="now-ui-icons arrows-1_minimal-left" />
                  </span>
                  Back
                </Button>
              </CardHeader>

              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Tittle
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <FormGroup>
                      <Input
                        cols="80"
                        placeholder="Here can be your tittle"
                        rows="4"
                        type="textarea"
                        onChange={handleChangeTitle}
                      />
                    </FormGroup>
                    {count1}/500
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Language from
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <Select

                      sx={{ m: 1, minWidth: 500 }}
                      placeholder="Single Select"
                      name="Choose Category"
                      value={languageFrom}
                      displayEmpty
                      onChange={onChangeLanguageFrom}
                      
                    >
                      {language.map((l, index) => (
                        <MenuItem
                          key={l.code}
                          value={l.code}
                        >
                          {l.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>
              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Language to
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <Select

                      sx={{ m: 1, minWidth: 500 }}
                      placeholder="Single Select"
                      name="Choose Category"
                      value={languageTo}
                      displayEmpty
                      onChange={onChangeLanguageTo}
                    >
                      {language.map((l, index) => (
                        <MenuItem
                          key={l.code}
                          value={l.code}
                        >
                          {l.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>
              </CardBody>

              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Description
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <FormGroup>
                      <Input
                        cols="80"
                        placeholder="Here can be your description"
                        rows="4"
                        type="textarea"
                        onChange={onChangeDescription}
                      />
                    </FormGroup>
                    {count2}/500
                  </Col>
                  <Col xs={12} md={5} size="sm"  ></Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    File - allow only file types: docx, pdf
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <FormGroup className="form-file-upload form-file-simple">
                      <Input
                        type="text"
                        className="inputFileVisible"
                        placeholder="Upload File..."
                        onClick={(e) => handleSingleFileInput(e)}
                        defaultValue={singleFileName}
                      />
                      <input
                        type="file"
                        className="inputFileHidden"
                        style={{ zIndex: -1 }}
                        ref={singleFileRef}
                        onChange={(e) => addSingleFile(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={5} size="sm"  >

                  </Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Deadline Apply
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <FormGroup>
                      <Datetime
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                        value={deadLine}
                        onChange={(newValue) => {
                          setDeadline(newValue);
                      }}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={5} size="sm"  >

                  </Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Word Count
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    {countWord} words (1$ per 500 words)
                  </Col>
                  <Col xs={12} md={5} size="sm"  >

                  </Col>
                </Row>

              </CardBody>
              <CardBody>

                <Row>
                  <Col xs={12} md={2} size="sm"  >
                    Total Paid
                  </Col>
                  <Col xs={12} md={5} size="sm"  >
                    <span style={
                      {
                        color: "red",
                      }
                    }>
                      {countWord/500} $
                    </span>
                  </Col>
                  <Col xs={12} md={5} size="sm"  >

                  </Col>
                </Row>

              </CardBody>
              <CardActions disableSpacing>
                <Col md={5}>

                </Col>
                <Col md={1}>
                  <Button color="primary" className="btn-info" style={
                    {

                      fontSize: "10px",

                    }
                  }>
                    Cancel
                  </Button>
                </Col>
                <Col md={6}>
                  <Button onClick={handleSubmit} color="primary" className="btn-right" style={
                    {

                      fontSize: "10px",

                    }
                  }>

                    publish
                  </Button>
                </Col>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CustomerAddArticle;