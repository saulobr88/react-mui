import React from 'react';
import NoteType from 'src/types/Notes';

interface Props {
    note: NoteType;
}

const NotesCard: React.FC<Props> = ({note}): JSX.Element => {
    return (
        <div style={{marginTop: '10px'}}>
            <h3>{note.title}</h3>
            <p>
                {note.details}
            </p>
        </div>
    );
};

export default NotesCard;