import React, { Component } from 'react';
import axios from 'axios';
import api_key from '../../.env';

axios.defaults.headers.common['x-api-key']=api_key
const api = axios.create({
    baseURL: `https://api.thecatapi.com/v1/`+api_key,
})

class Api extends Component {

    state = {
        course: []
    }

    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({course: res.data})
        })
    }
}

export default Api;