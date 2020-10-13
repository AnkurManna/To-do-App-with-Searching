import React, { useState } from "react";
import Card from './Cards';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root : {

        '&.MuiTextField-root' : {
            margin: theme.spacing(1)
        }
    }
}))
const App = () => {
const classes = useStyles();
var [objectArray,setobjectArray] = useState([]);
var [searchArray,setsearchArray] = useState([]);
const  add = (e) =>
{
    e.preventDefault()
    //additional codes
    console.log("here");
    //alert("ok");
    var name = document.getElementById("person").value;
    var project = document.getElementById("project").value;
    document.getElementById("person").value = "";
    document.getElementById("project").value = "";
    setobjectArray([...objectArray, {name:name,project:project}]);
    for(let i=0;i<objectArray.length;i++)
        console.log(objectArray[i].name + objectArray[i].project);
    
};

const handleRemove = (index) =>
{
    const values = [...objectArray];
    values.splice(index,1);
    setobjectArray(values);
}

const search = () =>
{
    var name = document.getElementById('search').value;
    var dyna = [];
    for(let i=0;i<objectArray.length;i++)
    {
        if(objectArray[i].name === name)
        dyna.push(objectArray[i]);
    }
    setsearchArray(dyna);
}

    return (
        <>
      <div id='first'>
    <form id="fst_form">
        <TextField id="person" label="Filled"   className={classes.root} placeholder='Name'/>
        <TextField id="project" label="Filled"  className={classes.root} placeholder='Project'/>
        <Button variant="contained" color="primary" onClick={add} className={classes.root}>Send</Button>
    </form>

    <form>
    <TextField id="search" label="Filled"  placeholder='search' onKeyUp={search} className={classes.root}/>
    <Button variant="contained" color="primary" onClick={search} className={classes.root}>Search</Button>
    </form>
    
    
    <div id='search_Data'>
    {
            <h1>Results</h1>
            searchArray.map((obj,index)=>(
                <>
            <Card name={obj.name} project={obj.project} />
            <button onClick={()=>handleRemove(index)}> </button>
            </>
            ))
            }
    </div>

    <h1>Entries</h1>
    
    <TableHead>
          <TableRow>
            <TableCell>Person</TableCell>
            <TableCell align="right">Project&nbsp;&nbsp;</TableCell>
            <TableCell align="right"> Status&nbsp;&nbsp;</TableCell>
            
          </TableRow>
    </TableHead>

    <TableBody>
          {objectArray.map((obj,index) => (
            <TableRow >
              <TableCell >
                {obj.name}
              </TableCell>
              <TableCell align="right">{obj.project}</TableCell>
              <TableCell align="right"><Button variant="contained" color="primary" onClick={()=>handleRemove(index)} className={classes.root}>Remove</Button>
</TableCell>
              
            </TableRow>
          ))}
    </TableBody>
    

    </div>
  </>
    );
};

export default App;