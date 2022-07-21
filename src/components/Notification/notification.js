import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import { Col, R } from 'reactstrap';
import axios from 'axios';
import { useEffect } from 'react';


moment.updateLocale('en', {
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'Just now',
        m: 'A minute',
        mm: '%d minutes',
        h: 'An hour',
        hh: '%d hours',
        d: 'A day',
        dd: function (number) {
            if (number < 7) {
                return number + ' days'; // Moment uses "d" when it's just 1 day.
            } else {
                var weeks = Math.round(number / 7);
                return weeks + ' ' + (weeks > 1 ? 'weeks' : 'week');
            }
        },
        M: 'A month',
        MM: '%d months',
        y: 'A year',
        yy: '%d years',
    },
});

export default function Notification() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [notifications, setNotification] = React.useState([])

    useEffect(() => {
        axios
            .get(`https://api-dotnet-test.herokuapp.com/api/projects/pushnoti`)
            .then(res => {
                setNotification(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    console.log(notifications);
    const onClickView = ()=>{

    }
    const time = moment().locale('en')
    return (
        <Box sx={{ pb: 5 }} ref={ref}>
            <CssBaseline />
            <List>
                {notifications.map((notification, index) => (
                    <ListItem button onClick={(() => onClickView(notification))}  >
                        {/* <a style={{ all: "unset", cursor: "pointer" }} href={`customer-arti-detail?id=${notification.id}`}> */}
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" src={notification.image} />
                            </ListItemAvatar>
                            <ListItemText primary={<b>
                                {
                                    moment(time).locale('en').fromNow() === 'Just now ago'
                                        ? 'Just now'
                                        : moment().diff(moment(time), 'days') < 7 ?
                                            moment(time).locale('en').fromNow()
                                            : moment(time).format('DD/MM/YYYY')
                                }
                            </b>} secondary={notification.notiContent} />
                       
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

