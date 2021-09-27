import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SocksCard from './images/Search-Socks.jpg'

export default function CatCards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Socks the Cat"
        height="300px"
        width= "300px"
        image={SocksCard}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Socks
        </Typography>
        <Typography variant="body2" color="text.secondary">
          11 Years Old
        </Typography>
      </CardContent>
    </Card>
  );
}