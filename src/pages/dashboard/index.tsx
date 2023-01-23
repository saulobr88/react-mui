import React, {useEffect, useState} from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Copyright from 'src/components/Copyright';


const DashboardPage: React.FC = (): JSX.Element => {
    return (
        <>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} lg={9} md={8}>
                        <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                        >
                        Charts
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} lg={3} md={4}>
                        <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                        >
                        Deposits
                        </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        Orders
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default DashboardPage;