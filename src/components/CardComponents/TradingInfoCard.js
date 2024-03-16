import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from 'react-bootstrap';


export default function ActionAreaCard(props) {
  return (
    <Container>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
          //  className='img-fluid'
           width="100%"
            alt="green iguana"
            src={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize="0.5rem">
          {props.para}

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}