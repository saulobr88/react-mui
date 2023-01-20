import { BASE_URL, GET_OPTIONS } from "src/services/api";

import NotesType from 'src/types/Notes';

const getNotes = () => {
    return fetch(`${BASE_URL}/notes`, GET_OPTIONS)
    .then(res => res.json())
    .then(data => {
        return data as NotesType[];
    })
    .catch(error => {
        console.log(error);
    });
}

export default getNotes;

