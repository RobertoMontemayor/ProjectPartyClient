import { Grid } from '@mui/material'
import React from 'react'
import Header from '../organisms/header.component'

const Root: React.FC = () => {
    return (
        <Grid
            container
            sx={{
                border: 0,
                width: '100%',
                display: 'flex',
            }}
        >
            <Header />
        </Grid>
    )
}
export default Root
