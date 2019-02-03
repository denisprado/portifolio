import React from "react";
// nodejs library that concatenates classes

import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/workPage.jsx";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// @material-ui/icons

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import SimpleModalWrapped from "./Modalwork";

class ListWorkSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <div>
          <GridContainer container spacing={32}>
            {this.props.works.map(work => (
              <GridItem item xs={12} sm={6} md={4} lg={4} key={work.id}>
                <Card raised className={classes.card}>
                  <CardMedia
                    component="img"
                    alt={work.title}
                    className={classes.media}
                    height="280"
                    image={work.imagePath}
                    title={work.title}
                  />

                  <CardActions>
                    <SimpleModalWrapped
                      album={work.album}
                      title={work.title}
                      description={work.description}
                      typeIdList={work.typeIdList}
                    />
                  </CardActions>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(ListWorkSession);
