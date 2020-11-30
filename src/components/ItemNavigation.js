import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";

//icons
import HomeIcon from "@material-ui/icons/HomeOutlined";
import CollectionsIcon from "@material-ui/icons/CollectionsOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";

const useStyles = makeStyles((theme) => ({
  text: {
    display: "flex",
  },
  link: {
    cursor: "pointer",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  page: {
    cursor: "default ",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function ItemNavigation({
  rootName,
  firstLevel: { link, name },
  secondLevel,
}) {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = (path) => {
    return () => {
      history.push(path);
    };
  };
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" separator="/">
        <ButtonBase>
          <Typography
            color="textPrimary"
            className={`${classes.text} ${classes.link}`}
            onClick={handleClick("/")}
          >
            <HomeIcon className={classes.icon} />
            {rootName}
          </Typography>
        </ButtonBase>

        <ButtonBase>
          <Typography
            color="textPrimary"
            className={`${classes.text} ${classes.link}`}
            onClick={handleClick(link)}
          >
            <CollectionsIcon className={classes.icon} />
            {name}
          </Typography>
        </ButtonBase>

        <ButtonBase>
          <Typography
            color="textPrimary"
            className={`${classes.text} ${classes.page}`}
          >
            <MenuBookOutlinedIcon className={classes.icon} />
            {secondLevel}
          </Typography>
        </ButtonBase>
      </Breadcrumbs>
    </>
  );
}
