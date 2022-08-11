import axios from "axios";

function Temp(){
    const options = {
    method: 'GET',
    url: 'https://airport-info.p.rapidapi.com/airport',
    headers: {
        'X-RapidAPI-Host': 'airport-info.p.rapidapi.com',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export default Temp;