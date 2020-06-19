import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function authHeader() {
    const phne_number = JSON.parse(cookies.get('phne_number'))

    if (phne_number && phne_number.accesToken) {
        return { 'x-access-token': phne_number.accesToken }
    } else {
        return
    }


}

