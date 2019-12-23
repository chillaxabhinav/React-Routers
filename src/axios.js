import axios from 'axios';

const instance  = axios.create({
});
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

export default instance;