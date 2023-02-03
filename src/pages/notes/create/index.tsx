import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { grey } from '@mui/material/colors';

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
                    <FormControl fullWidth>
                        <TextareaAutosize
                            placeholder='Corpo da nota...'
                            style={{ padding: '15px', border: 'solid 1px gray' }}
                            minRows={10}
                            value={note.details}
                            onChange={(e) => handleChange('details', e.target.value)}    
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{background: grey[50], px: 1}}>Escolha a categoria</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            variant="outlined"
                            color="primary"
                            name="category"
                            id="category"
                            value={note.category}
                            onChange={(e: SelectChangeEvent) => {handleChange('category', e.target.value as string)}}
                        >
                            {categories.map((ele) => (
                                <MenuItem value={ele.slug} key={ele.slug}>{ele.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" type="submit" disabled={loading}>
                        Salvar
                    </Button>
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