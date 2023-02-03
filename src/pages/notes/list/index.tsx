import React, {useEffect, useState} from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NoteType from 'src/types/Note';
import getNotes from 'src/services/notes/getNotes';
import NotesCard from 'src/components/Notes/NoteCard';

const NotesListPage: React.FC = (): JSX.Element => {
    const [notes, setNotes] = useState([] as NoteType[]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getNotes()
        .then(e => {
            console.log('getNotes ', e);
            setNotes(e as NoteType[]);
        })
        .finally( () => {
            setLoading(false);
        });
    }, []);

    return (
        <Container>
            { loading && `Carregando as notas`}
            { !loading && notes.length === 0 && `Não há notas para exibir`}
            { !loading && notes.length > 0 && (
                <div>
                    <div>
                        <h2>{`Notas (${notes.length})`}</h2>
                    </div>
                    <Grid container spacing={3}>
                    {notes.map((el) => (
                        <Grid item xs={12} md={6} lg={4} key={el.id}>
                            <NotesCard note={el} />
                        </Grid>
                    ))}
                    </Grid>
                </div>
            )}
        </Container>
    );
};

export default NotesListPage;