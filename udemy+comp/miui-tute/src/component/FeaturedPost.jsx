import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "40px !important",
    fontFamily: "Montserrat !important",
  },
  cover: {
    backgroundPosition: "center !important",
    padding: "35px 25px !important",
    color: "white !important",
  },
}));

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cover} style={{ backgroundColor: "#454545 " }}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title}>
          Title of a longer featured blog post
        </Typography>
        <Typography>
          Multiple lines of text that form the lede,informing new,readers
          quickly and efficiently about what's most interesting in this post's
          contens.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.btn}
          style={{ backgroundColor: "black", color: "white", fontWeight: 800 }}
        >
          Read More...
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
