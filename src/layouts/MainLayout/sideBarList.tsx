import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export const sideBarListA = [
    {
        text: 'Main Page',
        linkTo: '/',
        icon: <InboxIcon />
    },
    {
        text: 'Create Note',
        linkTo: '/create',
        icon: <InboxIcon />
    },
    {
        text: 'Dashboard',
        linkTo: '/dashboard',
        icon: <InboxIcon />
    },
    {
        text: 'Not Found',
        linkTo: '/something-else',
        icon: <InboxIcon />
    },
    {
        text: 'Abount',
        linkTo: '/about',
        icon: <InboxIcon />
    },
];

export const sideBarListB = [
    {
        text: 'List Accounts',
        linkTo: '/account/',
        icon: <MailIcon />
    },
    {
        text: 'View Account',
        linkTo: '/account/1',
        icon: <MailIcon />
    },
    {
        text: 'Add Account',
        linkTo: '/account/add',
        icon: <MailIcon />
    },
];