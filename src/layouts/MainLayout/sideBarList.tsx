import InboxIcon from '@mui/icons-material/MoveToInbox';
import CreateIcon from '@mui/icons-material/Create';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const sideBarListA = [
    {
        text: 'Main Page',
        linkTo: '/',
        icon: <InboxIcon />
    },
    {
        text: 'Create Note',
        linkTo: '/create',
        icon: <CreateIcon />
    },
    {
        text: 'Dashboard',
        linkTo: '/dashboard',
        icon: <DashboardIcon />
    },
    {
        text: 'Not Found',
        linkTo: '/something-else',
        icon: <BrowserNotSupportedIcon />
    },
    {
        text: 'Abount',
        linkTo: '/about',
        icon: <InfoIcon />
    },
];

export const sideBarListB = [
    {
        text: 'List Accounts',
        linkTo: '/account/',
        icon: <PeopleIcon />
    },
    {
        text: 'View Account',
        linkTo: '/account/1',
        icon: <AccountBoxIcon />
    },
    {
        text: 'Add Account',
        linkTo: '/account/add',
        icon: <PersonAddIcon />
    },
];