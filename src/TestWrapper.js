import { useEffect } from 'react';
import { useState } from 'react';
import TestCard from './TestCard';
import axios from "axios";
function TestWrapper() {

    const [users, setUsers] = useState([]);
   
     useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/users`)
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (users.map(user => <TestCard {...user} />));

}

export default TestWrapper;