import React from 'react';
import { Checkbox, Grid, Stack, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function TileorThumbnail({ options, defaultIds }) {

    const [data, setData] = React.useState([])

    //defaut Ids    
    const [selectedIds, setSelectedIds] = React.useState([])

    //handling select and unselect of data
    const handleSelect = (id) => {
        if (!selectedIds.includes(id)) {
            setSelectedIds([...selectedIds, id]);
            onChange(e, props.othAttr?.type, props.othAttr?.name, [
                ...selectedIds,
                id,
            ]);
        } else {
            setSelectedIds(selectedIds.filter((value, index) => value !== id));
            onChange(
                e,
                props.othAttr?.type,
                props.othAttr?.name,
                selectedIds.filter((value, index) => value !== id)
            );
        }
    }

    //Store Schema and defaultIds in local state
    React.useEffect(() => {
        setSelectedIds(defaultIds ? defaultIds : [])
    }, selectedIds)

    React.useEffect(() => {
        setData(options)
    }, selectedIds)

    return (
        <>
            <Stack spacing={4}>
                {data.map(item => (
                    <>
                        <Card
                            sx={{ cursor: 'pointer', border: selectedIds.includes(item.id) ? '1px solid green' : '' }}
                            onClick={() => handleSelect(item.id)}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Checkbox checked={selectedIds.includes(item.id) ? true : false} color='success' />
                                </Grid>
                                <Grid item xs={3} display={'flex'} justifyContent={'center'}>
                                    <Box
                                        component="img"
                                        alt="auth"
                                        src={item.imgUrl && item.imgUrl}
                                        sx={{
                                            maxWidth: 120,
                                        }}
                                        />
                                </Grid>
                                <Grid item xs={7}>
                                    <CardContent sx={{ m: 2 }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </>
                ))}
            </Stack>
        </>
    )
}

export default TileorThumbnail