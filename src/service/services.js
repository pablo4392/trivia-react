import axios from "axios";

class Services {
    static category() {
        const categories = axios({
            method: 'GET',
            url:"https://opentdb.com/api_category.php"
        })

        return categories
    }

    static trivia(amo, cat, dif, typ) {
        const promiseTrivia = axios({
            method: 'GET',
            url: `https://opentdb.com/api.php?amount=${amo}&category=${cat}&difficulty=${dif}&type=${typ}`
        })

        return promiseTrivia
    }
}

export default Services