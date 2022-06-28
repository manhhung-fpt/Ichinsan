
import React, { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// reactstrap components
import {
    Card,
    CardHeader,
    CardTitle,
    Row,
    Col,
    CardBody,
    Button,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader";
// core components
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/scrollbar/scrollbar.scss'; // Scrollbar module
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/effect-fade/effect-fade.scss'; // Pagination module
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ReactCountryFlag from "react-country-flag"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
function SearchFilter() {
    const [articles, setArticle] = React.useState([]);
    const [languageList, setLanguageList] = React.useState([]);
    const [category, setCategory] = React.useState([]);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [languageName, setLanguageName] = React.useState([]);
    const [salaryFrom, setSalaryFrom] = React.useState('');
    const [salaryTo, setSalaryTo] = React.useState('');
    const [dateRange, setDateRange] = React.useState(null);
    const [deadLine, setDeadline] = React.useState(null);

    useEffect(() => {
        var axios = require('axios');
        var data = '';
        var config = {
            method: 'get',
            url: 'https://api-dotnet-test.herokuapp.com/api/projectcategories',
            headers: {},
            data: data
        };
        axios(config)
            .then(function (response) {
                setCategory(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

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
    //Handle Submit
    const handleSubmit = event => {
        setArticle([]);
        event.preventDefault();
        console.log('personName', personName);
        console.log('personName', languageName);
        console.log('personName', salaryFrom);
        console.log('personName', salaryTo);
        var axios = require('axios');
        var data = '';

        var categoryName = personName.length > 0 ? '&category=' + personName : '';
        var language = languageName.length > 0 ? '&language=' + languageName : '';
        var sFrom = salaryFrom ? '&from=' + salaryFrom : '';
        var sTo = salaryTo ? '&to=' + salaryTo : '';
        var datePost = dateRange ? '&datePost=' + moment(dateRange).format('YYYY-MM-D')  : '';
        var deadline = deadLine ? '&deadline=' + moment(deadLine).format('YYYY-MM-D')  : '';
        

        var config = {
            method: 'get',
            url: 'https://api-dotnet-test.herokuapp.com/api/articles?pageNumber=1' + categoryName + language + sFrom + sTo + datePost + deadline,
            data: data
        };

        axios(config)
            .then(function (response) {
                setArticle(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeSalaryFrom = (event) => {
        setSalaryFrom(event.target.value);
    };

    const handleChangeSalaryTo = (event) => {
        setSalaryTo(event.target.value);
    };

    const handleChangeLanguage = (event) => {
        const {
            target: { value },
        } = event;
        setLanguageName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const onClickReset = () => {
        setPersonName([]);
        setLanguageName([]);
        setSalaryFrom('');
        setSalaryTo('');
        setDateRange(null);
        setDeadline(null);
    };


    useEffect(() => {
        var axios = require('axios');
        var data = '';

        var config = {
            method: 'get',
            url: 'https://api-dotnet-test.herokuapp.com/api/articles?pageNumber=1',
            headers: {},
            data: data
        };

        axios(config)
            .then(function (response) {
                setArticle(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row >

                    <Col xs={12} md={9}

                    >
                        <Row>
                            {articles.map((article, index) => (
                                <Col md={4} style={{
                                    marginBottom: '30px',
                                }}
                                >
                                    <a classname="card" href="" >
                                        <Card>
                                            <CardHeader>
                                                <CardTitle style={{
                                                    marginLeft: "",
                                                    color: "green",
                                                }}>
                                                    <CategoryIcon></CategoryIcon>
                                                    {article.categoryName}</CardTitle>
                                            </CardHeader>

                                            <CardHeader>
                                                <CardTitle tag="h4" style={{
                                                    color: "green",
                                                    marginTop: "-10px",
                                                }}>{article.projectName}</CardTitle>
                                                <CardTitle style={{
                                                    marginLeft: "",
                                                    color: "red",
                                                }}>
                                                    <AttachMoneyIcon></AttachMoneyIcon>
                                                    {article.fee}</CardTitle>
                                                <CardTitle style={{
                                                    marginLeft: "",
                                                    color: "red",
                                                }}>
                                                    <ReactCountryFlag
                                                        countryCode={article.languageFrom}
                                                        svg
                                                        style={{
                                                            width: '2em',
                                                            height: '2em',
                                                        }}
                                                        title="US"
                                                    />
                                                    <ArrowRightAltIcon></ArrowRightAltIcon>
                                                    <ReactCountryFlag
                                                        countryCode={article.languageTo}
                                                        svg
                                                        style={{
                                                            width: '2em',
                                                            height: '2em',
                                                        }}
                                                        title="US"
                                                    />
                                                </CardTitle>

                                            </CardHeader>

                                            <div class="go-corner" href="#">
                                                <div class="go-arrow">
                                                    →
                                                </div>
                                            </div>

                                        </Card>
                                    </a>
                                </Col>
                            ))};
                        </Row>
                    </Col>
                    <Col xs={12} md={3}
                    >
                        <Card>

                            <CardHeader>
                                <CardTitle style={{
                                    marginLeft: "",
                                    color: "black",
                                }}>
                                    <CategoryIcon></CategoryIcon>
                                    Filter With Category</CardTitle>
                            </CardHeader>
                            <CardBody>

                                <form onSubmit={handleSubmit}>
                                    <div >
                                        <div style={{ overflowY: 'scroll', scrollBehavior: 'smooth', height: 400 }}>

                                            <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
                                            <Select
                                                labelId="demo-multiple-chip-label"
                                                id="demo-multiple-chip"
                                                sx={{ m: 1, width: 250 }}
                                                multiple
                                                displayEmpty
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                                renderValue={(selected) => (
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                        {selected.map((value) => (
                                                            <Chip key={value} label={value} />
                                                        ))}
                                                    </Box>
                                                )}
                                                MenuProps={MenuProps}
                                            >
                                                {category.map((c) => (
                                                    <MenuItem
                                                        key={c.name}
                                                        value={c.name}
                                                        style={getStyles(c.name, personName, theme)}
                                                    >
                                                        {c.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <InputLabel id="demo-multiple-chip-label">Language</InputLabel>
                                            <Select
                                                labelId="demo-multiple-chip-label"
                                                id="demo-multiple-chip"
                                                sx={{ m: 1, width: 250 }}
                                                multiple
                                                displayEmpty
                                                value={languageName}
                                                onChange={handleChangeLanguage}
                                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                                renderValue={(selected) => (
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                        {selected.map((value) => (
                                                            <Chip key={value} label={value} />
                                                        ))}
                                                    </Box>
                                                )}
                                                MenuProps={MenuProps}
                                            >
                                                {languageList.map((l, index) => (
                                                    <MenuItem
                                                        key={l.name}
                                                        value={l.code}
                                                        style={getStyles(l.name, languageName, theme)}
                                                    >
                                                        {l.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <Row>
                                                <Col xs={12} md={5}>
                                                    <InputLabel id="demo-simple-select-helper-label">Salary from</InputLabel>
                                                    <TextField
                                                        id="outlined-name"
                                                        variant="filled"
                                                        value={salaryFrom}
                                                        displayEmpty
                                                        onChange={handleChangeSalaryFrom}
                                                        sx={{ m: 1, width: 90 }}
                                                    />
                                                </Col>
                                                <Col xs={12} md={2}   >
                                                    <InputLabel id="demo-simple-select-helper-label" sx={{ marginTop: 7 }}>TO</InputLabel>
                                                </Col>
                                                <Col xs={12} md={5}>
                                                    <InputLabel id="demo-simple-select-helper-label">Salary to</InputLabel>
                                                    <TextField
                                                        id="outlined-name"
                                                        variant="filled"
                                                        value={salaryTo}
                                                        displayEmpty
                                                        onChange={handleChangeSalaryTo}
                                                        sx={{ m: 1, width: 90 }}
                                                    />
                                                </Col>
                                            </Row>
                                            <InputLabel id="demo-simple-select-helper-label">Date Post</InputLabel>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                sx={{ m: 1, width: 250 }}
                                                    label="Basic example"
                                                    value={dateRange}
                                                    onChange={(newValue) => {
                                                        setDateRange(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField sx={{ m: 1, width: 250 }} {...params} />}
                                                />
                                            </LocalizationProvider>
                                            
                                            <InputLabel id="demo-simple-select-helper-label">Deadline Range</InputLabel>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                sx={{ m: 1, width: 250 }}
                                                    label="Basic example"
                                                    value={deadLine}
                                                    onChange={(newValue) => {
                                                        setDeadline(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField  {...params} />}
                                                />
                                            </LocalizationProvider>
                                        </div>

                                    </div>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Button type="submit" className="btn btn-primary btn-block btn-round"  >Apply</Button>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Button className="btn btn-block btn-round btn-info" onClick={onClickReset} >Reset</Button>
                                        </Col>
                                    </Row>
                                </form>

                            </CardBody>

                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    );
}

export default SearchFilter;