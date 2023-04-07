import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Logo from '../assets/Logo.png'
import { styled } from '@mui/material/styles'
export const Products: React.FC = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',

        color: theme.palette.text.secondary,
    }))
    const Row: React.FC = () => {
        return (
            <>
                <Grid item xs={1}>
                    <Item>
                        <img src={Logo} style={{ width: 80 }}></img>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
            </>
        )
    }
    return (
        <>
            <Box margin={2}>
                <h2> Productos </h2>
            </Box>
            <Grid container spacing={2} padding={1}>
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
            </Grid>
        </>
    )
}
