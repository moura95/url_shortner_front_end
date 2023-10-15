// @ts-nocheck
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3000';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

async function getallUrls() {
    try {
        const response = await axios.get(baseUrl, { headers });
        return response.data;
    } catch (error) {
        throw error
    }
}


async function deleteGoly(id) {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`, { headers });
        return response;
    } catch (error) {
        throw error
    }
}

async function createUrl(url) {
    try {
        const response = await axios.post(baseUrl, url, { headers });
        return response.data;
    } catch (error) {
        throw error
    }
}
export { getallUrls, deleteGoly, createUrl };
