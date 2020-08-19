import axios from 'axios';
export const getRemoteList = () => {


    return  axios.get("http://localhost:8000/api/users", )
        .then(function (response){
            return response.data;
            }
        )
        .catch(error => {
            console.log(error);
        })

}
