import axios from 'axios';

axios.defaults.baseURL = 'https://anapioficeandfire.com/api/';
export default {
    getCharacter: function () {
        return axios({
                method: 'get',
                url: 'characters/583',
            })
            .then(response => response.data)
            .catch(error => error);
    }
};