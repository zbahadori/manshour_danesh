import axios from 'axios';
import Cookies from 'universal-cookie';



const API_URL = "https://manshour.herokuapp.com/";

const cookies = new Cookies();

class AuthService {

    login(phone_number, referencePhoneNumber) {
        return axios({
            url: API_URL + '/api/auth/login-start',
            method: "POST",

            data: {
                phone_number,
                referencePhoneNumber
            }
        })
            .then(response => {
                if (response.data.accesToken) {
                    cookies.set('phone_number', { path: '/' }, JSON.stringify(response.data));


                }
                return response.data
            })



    }
    logout() {
        cookies.remove('phone_number');


    }

    rejister(phoneNumber, referencePhoneNumber) {
        return axios({
            url: API_URL + "api/auth/register-start",
            method: "POST",

            data: {
                phone_number: phoneNumber,
                reference_phone_number: referencePhoneNumber
                    ? referencePhoneNumber
                    : null,
            },
        })


    }

    getCurrentUser() {
        return JSON.parse(cookies.get('phone_number'))
    }


}

export default AuthService;