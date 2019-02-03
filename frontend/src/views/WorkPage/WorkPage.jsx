import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import axios from "axios";
// @material-ui/core components

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import ImportantDevices from '@material-ui/icons/ImportantDevices';

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import ListWorkSession from "./sections/ListWorkSession"

const baseUrlWork = "http://localhost:3001/works"



class WorkPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { works: [] };
    }

    componentDidMount() {
        axios.get(baseUrlWork)
            .then(resp => {
                this.setState({ works: resp.data })
            })
    }



    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    icon={<ImportantDevices />}
                    brand="DENIS FORIGO"
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                    <Parallax image={require("assets/img/bg" + (Math.floor(Math.random() * (39 - 1 + 1)) + 1) + ".jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem>
                                <div className={classes.brand}>
                                    <h1 className={classes.title}>Um pouco de muito.</h1>
                                    <h3 className={classes.subtitle}>
                                        Com experiência de quinze anos, já produzi e participei de muitos projetos. Aqui selecionei alguns mais representativos da minha experiência profissional com Design Gráfico e Web.
                    </h3>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <ListWorkSession works={this.state.works} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(componentsStyle)(WorkPage);
