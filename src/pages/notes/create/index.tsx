import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import NoteType from 'src/types/Note';
import CategoryType from 'src/types/Category';
import postNote from 'src/services/notes/postNote';
import getCategories from 'src/services/categories/getCategories';

import Copyright from 'src/components/Copyright';

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
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
                Criar nota
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <TextField
                    required
                    id="title"
                    name="title"
                    label="Título"
                    fullWidth
                    variant="standard"
                    value={note.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
                <Textarea
                    minRows={10}
                    placeholder="Corpo da nota…"
                    value={note.details}
                    onChange={(e) => handleChange('details', e.target.value)}    
                />
                </Grid>
                <Grid item xs={9} md={9} sm={12}>
                    <Select
                        variant="outlined"
                        color="primary"
                        name="category"
                        id="category"
                        placeholder='Escolha a categoria'
                        value={note.category}
                        onChange={(e: any) => handleChange('category', e.target.value as string)}
                    >
                        {categories.map((ele) => (
                            <Option value={ele.slug} key={ele.slug}>{ele.name}</Option>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <input type="submit" value="Salvar" disabled={loading} />
                    <br />
                    {loading && 'salvando'}
                </Grid>
            </Grid>
            </form>
        </Paper>
      </Container>
    );
};

export default NoteCreatePage;