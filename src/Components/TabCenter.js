import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.indexofState);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      props.layoutPage("brands");
    } else if (newValue === 1) {
      props.layoutPage("styles");
    }
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Status" />
        <Tab label="Daily Stats" />
        <Tab label="Hourly Stats" />
        <Tab label="Decision Log" />
      </Tabs>
    </Paper>
  );
}
