import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./partes.css";

import Acelerador from "../../imagen/acelerador.jpg";
import Bielas from "../../imagen/bielas.jpg";
import Cadena from "../../imagen/cadena.jpg";
import Chasis from "../../imagen/chasis.jpg";
import Depósito from "../../imagen/depositoG.jpg";
import Escape from "../../imagen/escape.jpg";
import Luces from "../../imagen/luces.jpg";
import Manetas from "../../imagen/manetas.jpg";
import Embragues from "../../imagen/embragues.jpg";
import Motor from "../../imagen/motor.jpg";
import Claxon from "../../imagen/claxon.jpg";
import Espejos from "../../imagen/espejos.jpg";
import Neumáticos from "../../imagen/neumaticos.jpg";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Acelerador" {...a11yProps(0)} />
                <Tab label="Bielas"  {...a11yProps(1)} />
                <Tab label="Cadena"  {...a11yProps(2)} />
                <Tab label="Chasis" {...a11yProps(3)} />
                <Tab label="Depósito de gasolina" {...a11yProps(4)} />
                <Tab label="Escape" {...a11yProps(5)} />
                <Tab label="Luces" {...a11yProps(6)} />
                <Tab label="Manetas & Embrague" {...a11yProps(7)} />
                <Tab label="El Motor" {...a11yProps(8)} />
                <Tab label="Claxon" {...a11yProps(9)} />
                <Tab label="Espejos retrovisores" {...a11yProps(10)} />
                <Tab label="Neumáticos" {...a11yProps(11)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Acelerador}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Acelerador}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Acelerador}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Bielas}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Bielas}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Bielas}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Cadena}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Cadena}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Cadena}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Chasis}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Chasis}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Chasis}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Depósito}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Depósito}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Depósito}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
            </TabPanel>
            <TabPanel value={value} index={5}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Escape}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Escape}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Escape}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
            </TabPanel>
            <TabPanel value={value} index={6}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Luces}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Luces}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Luces}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
             </TabPanel>
            <TabPanel value={value} index={7}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Manetas}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Manetas}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Embragues}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
            </TabPanel>
            <TabPanel value={value} index={8}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Motor}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Motor}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Motor}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
            </TabPanel>
            <TabPanel value={value} index={9}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Claxon}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Claxon}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Claxon}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
             </TabPanel>
             <TabPanel value={value} index={10}>
             <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Espejos}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Espejos}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Espejos}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
            </TabPanel>
            <TabPanel value={value} index={11}>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={Neumáticos}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Neumáticos}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <img
                                src={Neumáticos}
                                height="300px"
                                width="300px"
                                className='imgRedonda'
                            />
                        </div>
                        <br />
                    </div>    
                </div>
             </TabPanel>
        </div>
    );
}