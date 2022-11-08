import axios from 'axios'
import { config } from '../../../config/default'

//create a new instance with a custom configuration, 
//generate a client for any API and reuse the configuration for any calls using the same client
const APIClient = axios.create({
  baseURL: config.publicRuntimeConfig.endpoints.basePath ,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

export default APIClient
