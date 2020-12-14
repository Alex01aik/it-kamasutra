import * as axios from 'axios';

const baseUrl = 'http://localhost:3001/users';

export const usersAPI ={
        getUsers(){
        return axios.get(baseUrl,
            {
                withCredentials: true
            })
            .then(response => response.data);
    }
}
