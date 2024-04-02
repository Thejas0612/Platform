import React from "react";
import {Grid, Stack, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const TileAndThumbnail = (props) => {
  const [selectedIds, setSelectedIds] = React.useState();
  const handleSelect = (e, id) => {
    setSelectedIds(id);
  };

  const { schema } = props;

  return (
    <>
      <Stack spacing={4} style={{ margin: "4rem" }}>
        {schema.options.map((item) => (
          <>
            <Card
              sx={{ cursor: "pointer", border: selectedIds === item.id ? "1px solid #00805a" : "" }}
              onClick={(e) => handleSelect(e, item.id)}
            >
              <Grid container spacing={2}>
                <Grid item xs={3} display={"flex"} justifyContent={"center"}>
                  <Box
                    component="img"
                    alt="auth"
                    src={item.imgUrl && item.imgUrl}
                    sx={{
                      maxWidth: 120
                    }}
                  />
                </Grid>
                <Grid item xs={7}>
                  <CardContent sx={{ m: 2 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                      {item.tootTipEnable ? (
                        <Tooltip title={item.tootTipMessage} placement="top" arrow>
                          <IconButton>
                            <InfoIcon color="primary" />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        ""
                      )}
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

export default TileAndThumbnail;
