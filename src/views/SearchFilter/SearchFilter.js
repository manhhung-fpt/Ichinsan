
import React, { useEffect, useState } from "react";
import axios from 'axios';
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

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
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
import { flexbox } from "@mui/system";
import User from "views/Pages/UserPage";
function SearchFilter() {
    const [articles, setArticle] = React.useState([]);
    const [categorys, setCategory] = React.useState([]);
    useEffect(() => {
        var axios = require('axios');
        var data = '';
        var config = {
            method: 'get',
            url: 'https://62a586f2b9b74f766a3afda9.mockapi.io/api/projectDetails/Category',
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
            url: 'https://62a586f2b9b74f766a3afda9.mockapi.io/api/projectDetails/articles',
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

    const handleChange2 = (event) => {
        const {name ,checked } = event.target;
        if(name === "selectAll"){
            let tempCategory = categorys.map((category) => {return{...category, isChecked:checked }})
            setCategory(tempCategory);
        }else{
            let tempCategory = categorys.map((category) =>
            category.categoryName === name ? {...category, isChecked: checked} : category
            )
            setCategory(tempCategory);
        }
    };
    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {categorys.map((category, index) => (
                <FormControlLabel
                label={category.categoryName}
                name={category.categoryName}
                control={<Checkbox checked={category?.isChecked || false} onChange={handleChange2} />}
            />

            ))}
        </Box>
    );
    console.log(articles);
    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row >

                    <Col xs={12} md={9}

                    >
                        {articles.map((article, index) => (
                            <Col md={3}

                            >
                                <a classname="card" href="" >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle style={{
                                                marginLeft: "",
                                                color: "green",
                                            }}>
                                                <CategoryIcon></CategoryIcon>
                                                {article.articelName}</CardTitle>
                                        </CardHeader>

                                        <CardHeader>
                                            <CardTitle tag="h4" style={{
                                                color: "green",
                                                marginTop: "-10px",
                                            }}>{article.title}</CardTitle>
                                            <CardTitle style={{
                                                marginLeft: "",
                                                color: "red",
                                            }}>
                                                <AttachMoneyIcon></AttachMoneyIcon>
                                                {article.salary}</CardTitle>
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
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                <div >
                                    <FormControlLabel
                                        label="All"
                                        name ="selectAll"
                                        control={
                                            <Checkbox
                                                onChange={handleChange2}
                                            />
                                        }
                                    />
                                    <div style={{ overflowY: 'scroll', scrollBehavior: 'smooth', height: 200 }}> {children}</div>

                                </div>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Button className="btn btn-primary btn-block btn-round" >Apply</Button>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Button className="btn btn-block btn-round btn-info" >Reset</Button>
                                    </Col>
                                </Row>

                            </CardBody>

                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    );
}

export default SearchFilter;