import React from 'react';
import NoteType from 'src/types/Note';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { yellow, green, pink, blue, deepOrange, deepPurple } from '@mui/material/colors';

interface Props {
    note: NoteType;
}

const NotesCard: React.FC<Props> = ({note}): JSX.Element => {

    const getCategoryStyle = () => {
        let color : string = blue[500];
        if (note.category === 'work') color = yellow[700];
        if (note.category === 'money') color = green[500];
        if (note.category === 'todos') color = pink[500];
        if (note.category === 'reminders') color = deepOrange[500];

        return {
            backgroundColor: color
        };
    };

    return (
        <div style={{marginTop: '10px'}}>
            <Card elevation={1}>
                <CardHeader
                    title={note.title}
                    subheader={note.category}
                    avatar={
                        <Avatar style={getCategoryStyle()}>
                        {String(note.category[0]).toUpperCase()}
                        </Avatar>
                    }
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        { note.details }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NotesCard;