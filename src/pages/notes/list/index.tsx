import React, {useEffect, useState} from 'react';
import NoteType from 'src/types/Notes';

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
        <>
            { loading && `Carregando as notas`}
            { !loading && notes.length === 0 && `Não há notas para exibir`}
            { !loading && notes.length > 0 && 
            <div>
                <div>
                    <h2>{`Notas (${notes.length})`}</h2>
                </div>
                <div>
                    {notes.map((el) => (<NotesCard note={el} key={el.id} /> ))}
                </div>
            </div>
            }
        </>
    );
};

export default NotesListPage;