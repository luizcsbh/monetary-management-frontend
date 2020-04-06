import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/rendimentos/summary`)
    return {
        type: 'RENDIMENTO_SUMMARY_FETCHED',
        payload: request
    }
}