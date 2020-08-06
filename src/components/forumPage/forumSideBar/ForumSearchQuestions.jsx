import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

function ProfInfo(props){
    return(
        <div>
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action onClick={() => {props.changeProfName("nachenberg")}}>
                <Media>
                <Media.Body>
                    <h4>what classes should I avoid as a cs major?</h4>
                </Media.Body>
                </Media>
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => {props.changeProfName("stahl")}}>
                <Media>
                <Media.Body>
                    <h4>stahl</h4>
                </Media.Body>
                </Media>
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => {props.changeProfName("eggert")}}>
                <Media>
                <Media.Body>
                    <h4>eggert</h4>
                </Media.Body>
                </Media>
            </ListGroup.Item>
        </ListGroup>
    </div>);
  }


  export default ProfInfo;