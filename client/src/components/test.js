import React, {Component} from 'react'
import Axios from 'axios';

class Test extends Component {

    async componentDidMount(){
        const message = {
            text: 'this is a messsage from the client',
            name: 'Kim K'
        }

        const response = await Axios.post('/api/send-message', message);
        console.log('Send Message Response:', response)
        // const response = await Axios.get('/api/test');

        // console.log('Test Response', response)

        // const user = await Axios.get('/api/user');
        // console.log('User Response', user);
    }

    render(){
        return(
            <div>
                <h1>test component</h1>
            </div>
        );
    }
}

export default Test;