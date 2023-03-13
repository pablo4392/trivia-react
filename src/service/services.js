import axios from "axios";

class Services {
    static category() {
        const categories = axios({
            method: 'GET',
            url:"https://opentdb.com/api_category.php"
        })

        return categories
    }

    static trivia(amount, categ, difficulty, typ) {
        const promiseTrivia = axios({
            method: 'GET',
            url: `https://opentdb.com/api.php?amount=${amount}&category=${categ}&difficulty=${difficulty}&type=${typ}`
        })

        return promiseTrivia
    }
}

export default Services