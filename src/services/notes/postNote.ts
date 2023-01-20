import { BASE_URL, POST_OPTIONS } from "src/services/api";

import NotesType from 'src/types/Notes';

const postNote = (note: NotesType) => {
    return fetch(`${BASE_URL}/notes`, { ...POST_OPTIONS, body: JSON.stringify(note)})
    .then(res => res.json())
    .then(data => {
        return data as NotesType;
    })
    .catch(error => {
        console.log(error);
    });
}

export default postNote;

