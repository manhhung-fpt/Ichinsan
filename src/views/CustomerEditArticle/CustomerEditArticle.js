
import React from "react";
import Switch from "react-bootstrap-switch";
import Datetime from "react-datetime";
import { useEffect } from "react";
import axios from "axios";
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import { countries } from 'country-data';
import { storage } from "Firebase";
import { ref, uploadBytes, getDownloadURL, getBytes } from "firebase/storage";
import Docxtemplater from "docxtemplater";
import moment from "moment";

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
var selectOptions = [
  { value: "English", label: "English" },
]; var selectOptions1 = [

  { value: "Japanese", label: "Japanese" },
];

function CustomerEditArticle(props) {
  const articleId = props.location.search.split("=")[1];
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [singleSelect1, setSingleSelect1] = React.useState(null);
  const [singleFileName, setSingleFileName] = React.useState("");
  const [singleFileName1, setSingleFileName1] = React.useState("");
  const [language, setLanguageList] = React.useState([])

  const [singleFile, setSingleFile] = React.useState(null);
  const singleFileRef = React.useRef();
  const [articles, setArticle] = React.useState([])
  const [languageFrom, setLanguageFrom] = React.useState("");
  const [languageTo, setLanguageTo] = React.useState("");
  const [countryLanguage, setCountryLanguage] = React.useState("")
  const [countryLanguage1, setCountryLanguage1] = React.useState("")
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const PizZip = require('pizzip')
  const [countWord, setCountWord] = React.useState(0);
  const [description, setDescription] = React.useState("")
  const [fee, setFee] = React.useState(0);
  const [articlesTitle, setArticleTtile]= React.useState("")
  const [deadline, setDeadline] = React.useState("")
  const [fileURL, setFileURL] = React.useState("")

  let history = useHistory();
  const CountryLanguage = require('@ladjs/country-language');
  const addSingleFile = (e, type) => {
    setSingleFile(null);
    setSingleFileName("");
    e.preventDefault();
    let fileNames = "";
    let files = e.target.files;
    let file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = async (e) => {
      const content = e.target.result;
      var doc = new Docxtemplater(new PizZip(content), { delimiters: { start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j' } });
      var text = doc.getFullText();
      setCountWord(text.length)
      setFee(text.length/500)
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
  const handleSubmit = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "name": articlesTitle,
      "languageFrom": languageFrom,
      "languageTo": languageTo,
      "description": description,
      "originalContent": singleFileName? singleFileName : articles.originalContent,
      "deadline": moment(deadline).format('YYYY-MM-D'),
      "numberOfWords": countWord,
      "fee":  countWord/500
    });
    var config = {
      method: 'put',
      url: `https://api-dotnet-test.herokuapp.com/api/articles/${articleId}`,
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
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
    setCount2(e.target.value.length)

  }
  const [count, setCount] = React.useState(0);
  const onClickBack = () => {
    history.push("/admin/customer-recruitment-detail");
  }
  const onClickDone = () => {
    history.push("/admin/customer-progress-article");
  }
  const onClickCancel = () => {
    history.push("/admin/customer-progress-article");
  }
  const handleSingleFileInput = (e) => {
    singleFileRef.current.click(e);
  };
  const onChangeLanguageFrom = (e) => {
    setLanguageFrom(e.target.value)
  }
  const onChangeLanguageTo = (e) => {
    setLanguageTo(e.target.value)
  }
  const onChangeTitle = (e) =>{
    setArticleTtile(e.target.value)
    setCount(e.target.value.length)
  }

  useEffect(() => {
    axios
      .get(`https://api-dotnet-test.herokuapp.com/api/articles/${articleId}`)
      .then((res) => {
        const data = res.data;
        setArticle(data)
        getLanguageName(data.languageFrom)
        getLanguageName1(data.languageTo)
        setCount(data.name.length)
        setCount2(data.description.length)
        setCountWord(data.numberOfWords)
        setFee(data.fee)
        setLanguageFrom(data.languageFrom)
        setLanguageTo(data.languageTo)
        setArticleTtile(data.name)
        setDescription(data.description)
        setSingleFileName(data.originalContent)
        setDeadline(moment(data.deadline).format("DD/MM/YYYY, h:mm:ss a"))
        
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  const getLanguageName = (code) => {
    CountryLanguage.getCountry(code, function (err, country) {
      if (err) {
        console.log(err);
      } else {
        const languagesInGB = country.languages;
        let languageFrom = languagesInGB[0].name
        setCountryLanguage(languageFrom)
      }
    });

  }
  const getLanguageName1 = (code) => {
    CountryLanguage.getCountry(code, function (err, country) {
      if (err) {
        console.log(err);
      } else {
        const languagesInGB = country.languages;
        let languageTo = languagesInGB[0].name
        setCountryLanguage1(languageTo)
      }
    });
  }

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
                        defaultValue={articlesTitle}
                        placeholder="Here can be your tittle"
                        rows="4"
                        type="textarea"
                        onChange={onChangeTitle}
                      />
                    </FormGroup>
                    {count}/500
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
                      <MenuItem hidden value="">
                        {countryLanguage}
                      </MenuItem>
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
                      defaultValue=""
                      value={languageTo}
                      displayEmpty
                      onChange={onChangeLanguageTo}

                    >
                      <MenuItem hidden value="">
                        {countryLanguage1}
                      </MenuItem>
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
                        defaultValue={description}
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
                    <FormGroup
                    
                    >
                      <Datetime
                       
                     inputProps={{ placeholder: "Datetime Picker Here",
                                     value: deadline
                      }}
                      onChange={(newValue) => {
                        setDeadline(moment(newValue).format("DD/MM/YYYY, h:mm:ss a"));
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
                      {fee}
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
                  <Button onClick={onClickCancel} className="btn-info" color="primary" style={
                    {

                      fontSize: "10px",

                    }
                  }>
                    Cancel
                  </Button>
                </Col>
                <Col md={6}>
                  <Button onClick={handleSubmit} className="btn-right" color="primary" style={
                    {

                      fontSize: "10px",

                    }
                  }>

                    Done
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

export default CustomerEditArticle;