import axios from 'axios'
import consts from '../consts'

export function getSummary() {
    const request = axios.get(`${consts.API_URL}/rendimentos/summary`)
    return {
        type: 'RENDIMENTO_SUMMARY_FETCHED',
        payload: request
    }
}