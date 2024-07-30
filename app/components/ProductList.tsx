import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography } from '@mui/material';

interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  companyName: string;
}

interface ProductProps {
  products: Product[];
}

export default function ProductList({ products }: ProductProps) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#081c15' }}>
      {products.map((product) => (
        <ListItem key={product.id}>
          <ListItemAvatar>
            <CardMedia
              component="img"
              image={product.url}
              alt={product.name}
              sx={{ width: 60, height: 60 }} // Adjust size as needed
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="body1" sx={{ color: '#52b788', fontWeight: 'bold' }}>
                {product.name}
              </Typography>
            }
            secondary={
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="body2" sx={{ color: '#52b788' }}>
                    {product.companyName}
                  </Typography>
                </Grid>
                <Grid item xs={6} textAlign="right">
                  <Typography variant="body2" sx={{ color: '#52b788' }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
