import React, {useState} from 'react';
import NoteType from 'src/types/Notes';
import postNote from 'src/services/notes/postNote';

const defaultValues: NoteType = {
    title: '',
    details: '',
    category: '',
};

const NoteCreatePage: React.FC = (): JSX.Element => {
    const [note, setNote] = useState(defaultValues as NoteType);
    const [loading, setLoading] = useState(false);

    const handleChange = (field: string, value: string) => {
        setNote(s => ({ ...s, [field]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        console.log('Salvar nota ', note);

        postNote(note)
            .then((data) => {
                console.log(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div>
            <div>
                <h2>Criar nota</h2>
            </div>
            <div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="title"
                        id="title"
                        placeholder='título da nota'
                        value={note.title}
                        onChange={(e) => handleChange('title', e.target.value)}
                    />
                    <br />
                    <textarea
                        name="details"
                        id="details"
                        cols={30}
                        rows={10}
                        placeholder='corpo da nota'
                        value={note.details}
                        onChange={(e) => handleChange('details', e.target.value)}
                    ></textarea>
                    <br />
                    <input type="submit" value="Salvar" disabled={loading} />
                    <br />
                    {loading && 'salvando'}
                </form>
            </div>
        </div>
    );
};

export default NoteCreatePage;