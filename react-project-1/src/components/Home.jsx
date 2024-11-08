import React, { useEffect, useState } from 'react'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import axios from 'axios';



const Home = () => {
// const arr_obj=[{ID:1,Name:"Bean",Username:"Mr.bean",Email:"mrbean@gmail.com"},{ID:2,Name:"Dean",Username:"Mr.Dean",Email:"mrdean@gmail.com"}]
const [rows,setRows]=useState([]);
 useEffect( ()=>{
  axios.get('https://fakestoreapi.com/products').then((res)=>{
    setRows(res.data);
  })
  
 }, []) 
return (

    <>
{/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Rating</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><img src={row.image} alt="" width={100}/></TableCell>
              <TableCell align="right">{row.rating.rate}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer> */}
    <Grid container spacing={4}>
      {rows.map((row) => (
        <Grid item xs={10} sm={6} md={4} key={row.title}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={row.image}
              alt={row.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {row.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {row.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {row.rating.rate}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  
     
  </>

  )

}




export default Home
