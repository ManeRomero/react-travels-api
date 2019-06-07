import axios from 'axios'

const APIUrl = 'http://localhost:3000/api/travels'

let getTravels = () => {
   return axios.get(APIUrl)
}

let postTravel = (insert) => {
   return axios.post(APIUrl, insert)
}

export default {
   getTravels,
   postTravel
}