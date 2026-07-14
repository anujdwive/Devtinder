/* eslint-disable no-unused-vars */
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import EditProfileDrawer from "./EditProfileDrawer";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function Profile() {
  const [openDrawer, toggleDrawer] = React.useState(false);
  const user = useSelector((state) => state.user);
  const [expanded, setExpanded] = React.useState(false);
  if (!user) {
    return <Box>No user Found</Box>;
  }
  const { firstName, lastName, about, skill, photoURL, updatedAt } = user;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleCloseDrawer = () => {
    toggleDrawer((prev) => !prev);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <EditIcon onClick={handleCloseDrawer} />
            </IconButton>
          }
          title={firstName + lastName || ""}
          subheader={updatedAt}
        />
        <CardMedia
          component='img'
          height='194'
          image={photoURL}
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' sx={{ color: "text.secondary" }}>
            {about}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button variant='outlined' size='small'>
              Ignore
            </Button>
            <Button variant='outlined' size='small'>
              Intrested
            </Button>
          </Box>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Skills: {skill}</Typography>
          </CardContent>
        </Collapse>
      </Card>

      <EditProfileDrawer open={openDrawer} handleClose={handleCloseDrawer} />
    </>
  );
}
