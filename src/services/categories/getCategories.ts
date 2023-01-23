import { BASE_URL, GET_OPTIONS } from "src/services/api";

import CategoryType from 'src/types/Category';

const getCategories = () => {
    return fetch(`${BASE_URL}/categories`, GET_OPTIONS)
    .then(res => res.json())
    .then(data => {
        return data as CategoryType[];
    })
    .catch(error => {
        console.log(error);
    });
}

export default getCategories;

