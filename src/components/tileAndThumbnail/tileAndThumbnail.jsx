import React from "react";
import { Checkbox, Grid, Stack, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
const data = [
  {
    id: 1,
    title: "Ayush",
    description:
      " Rosemount Temperature Transmitters offer innovative, industry-leading technologies engineered to accomadate tough environments and challenging applications. ",
    imageUrl:
      "https://www.emerson.com/resource/image/9241128/portrait_ratio1x1/207/207/4e379d0bdfecdc9dc9a162dabd1f254c/011724DEF921FFF3F2CA1BA57134EC32/updated%20family%20image%20transmitter.jpg"
  },
  {
    id: 2,
    title: "Ayush",
    description:
      "Rosemount Temperature Transmitters offer innovative, industry-leading technologies engineered to accomadate tough environments and challenging applications.",
    imageUrl:
      "https://www.emerson.com/resource/image/5479482/portrait_ratio3x4/375/500/e5da71aac7befa95b2df7405b801dd99/D913FCE7B8C5C551A52F2C933CA352AA/1905-coriolis-meter-micro-motion-4200.jpg%22"
  }
];

const tileAndThumbnail = () => {
  const handleSelect = () => {};

  console.log(data);
  return (
    <>
      <Stack spacing={4} style={{ margin: "4rem" }}>
        {data.map((item) => (
          <>
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={3} display={"flex"} justifyContent={"center"}>
                  <Box
                    component="img"
                    alt="auth"
                    src={item.imageUrl && item.imageUrl}
                    sx={{
                      maxWidth: 120
                    }}
                  />
                </Grid>
                <Grid item xs={7}>
                  <CardContent sx={{ m: 2 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                      <Tooltip title={"Ayush"} placement="top" arrow>
                        <IconButton>
                          <InfoIcon color="primary" />
                        </IconButton>
                      </Tooltip>
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
  );
};

export default tileAndThumbnail;
