import axios from 'axios'

const APIUrl = 'http://localhost:3000/api/travels'

let getTravels = () => {
   return axios.get(APIUrl)
}   

export default {getTravels}