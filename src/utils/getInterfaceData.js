
import axios from 'axios'
import requestUrl from './getRequestBaseUrl'

const getInterfaceData = () => {
    const instance = axios.create({
        baseURL: requestUrl
    })
    return instance
}

export default getInterfaceData()
