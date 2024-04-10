import React from 'react';
import { Checkbox, Grid, Stack, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const StyledCheckBoxInput = styled(Checkbox)(() => ({
    '& .MuiSvgIcon-root': {
        fontSize: 20
    }
}))

function TileorThumbnail({ name, options, defaultIds, onChange, error, ...props }) {

    let [data, setData] = React.useState([])

    //defaut Ids    
    const [selectedIds, setSelectedIds] = React.useState([])

    //handling select and unselect of data
    const handleSelect = (e, id) => {
        if (!selectedIds.includes(id)) {
            setSelectedIds([...selectedIds, id]);
            onChange(e, props.othAttr?.type, name, [
                ...selectedIds,
                id,
            ]);
        } else {
            setSelectedIds(selectedIds.filter((value, index) => value !== id));
            onChange(
                e,
                props.othAttr?.type,
                name,
                selectedIds.filter((value, index) => value !== id)
            );
        }
    }

    React.useEffect(() => {
        if (props.dataSourceUrl) {
            fetchTileData()
        } else {
            setData(options)
        }
    }, [props.dataSourceUrl])

    //Store Schema and defaultIds in local state
    React.useEffect(() => {
        setSelectedIds(defaultIds ? defaultIds : [])
    }, [defaultIds])

    React.useEffect(() => {
        setData(options)
    }, [options])

    const fetchTileData = async () => {
        if (props.dataSourceUrl) {
            let res = await fetch(props.dataSourceUrl)
                .catch((error) => {
                    console.log(error);
                    setError('API Fetch Error')
                });
            if (res) {
                data = await res.json();
            }
            setData(data)
        }
    }

    return (
        <>
            <Stack spacing={2}>
                {data.map((item, i) => (
                    <div key={i}>
                        <Card
                            sx={{ cursor: 'pointer', border: selectedIds.includes(item.id) ? '1px solid #00805a' : '' }}
                            onClick={(e) => handleSelect(e, item.id)}
                            className={error ? 'img-button-item-error' : ""}
                        >
                            <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ minHeight: '25vh' }} spacing={2}>
                                <Grid item xs={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <StyledCheckBoxInput checked={selectedIds.includes(item.id) ? true : false} color='primary' />
                                </Grid>
                                <Grid item xs={3} >
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
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.name ? item.name : item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Grid> 
                            </Grid>
                        </Card>
                    </div>
                ))}
                <Box sx={{ mt: 2 }}>
                    {error && <Typography variant='subtitle1' error={error}>{ error }</Typography>}
                </Box>
            </Stack>
        </>
    )
}

export default TileorThumbnail