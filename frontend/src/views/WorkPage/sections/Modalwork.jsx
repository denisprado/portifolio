import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import PhotoLibraryTwoToneIcon from "@material-ui/icons/PhotoLibraryTwoTone";
import Caroulsel from "react-slick";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
// @material-ui/core components

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },
  infoSection: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  }
});
const baseUrlType = "http://localhost:3001/type";

class SimpleModal extends React.Component {
  state = {
    open: false,
    types: []
  };
  componentDidMount() {
    axios.get(baseUrlType).then(resp => {
      this.setState({ types: resp.data });
    });
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  getTypeTitle = id => {
    const resp = this.state.types.find(type => type.id === id);
    if (resp) return resp.title;
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant='text' fullWidth onClick={this.handleOpen}>
                    {this.props.title}
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Grid container spacing={24}>
              <Grid item xs={6} sm={3}>
                <div className={classes.infoSection}>
                  <Typography gutterBottom variant="h4">
                    {this.props.title}
                  </Typography>
                  <Typography gutterBottom variant="p">
                  {this.props.description}
                  </Typography>
                  <Divider variant="middle" />
                  {this.props.typeIdList.map(type => (
                    <Chip
                      component="small"
                      variant="outlined"
                      key={type}
                      label={this.getTypeTitle(type)}
                    />
                  ))}
                </div>
              </Grid>
              <Grid item xs={6} sm={9}>
                <Caroulsel {...carouselSettings}>
                  {this.props.album.map(image => (
                    <img width="100%" src={image} />
                  ))}
                </Caroulsel>
              </Grid>
            </Grid>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
