import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import appVersion from 'src/utils/getAppVersion';

const Copyright = (props: any) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'. '}({appVersion})
      </Typography>
    );
};

export default Copyright;