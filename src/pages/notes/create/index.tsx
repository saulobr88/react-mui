import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import NoteType from 'src/types/Note';
import CategoryType from 'src/types/Category';
import postNote from 'src/services/notes/postNote';
import getCategories from 'src/services/categories/getCategories';

const defaultValues: NoteType = {
    title: '',
    details: '',
    category: '',
};

const NoteCreatePage: React.FC = (): JSX.Element => {
    const [note, setNote] = useState(defaultValues as NoteType);
    const [categories, setCategoires] = useState([] as CategoryType[]);
    const [newNote, setNewNote] = useState(defaultValues as NoteType);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getCategories()
            .then((result) => {
                setCategoires(result as CategoryType[]);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleChange = (field: string, value: string) => {
        setNote(s => ({ ...s, [field]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // console.log('Salvar nota ', note);

        postNote(note)
            .then((data) => {
                console.log(data);
                setNewNote(data as NoteType);
                return data;
            })
            .then((data) => {
                setLoading(false);
                const localData = data as NoteType;
                if (localData.id) {
                    console.log('vai navegar para a página com a nota ');
                    navigate("/");
                } else {
                    console.log('o finally testa false para note.id');
                    console.log(newNote);
                }
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
                    <select
                        name="category"
                        id="category"
                        placeholder='Escolha a categoria'
                        value={note.category}
                        onChange={(e) => handleChange('category', e.target.value)}
                    >
                        {categories.map((ele) => (
                            <option value={ele.slug} key={ele.slug}>{ele.name}</option>
                        ))}
                    </select>
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