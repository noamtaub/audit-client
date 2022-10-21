import axios from 'axios';

export default async function getData() {
    const url = 'http://localhost:4567';
    try {
        return await axios.get(url);
    } catch (err) {
        console.log(err);
    }
}