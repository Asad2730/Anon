import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Rating, Button } from '@mui/material';
import Link from 'next/link';

interface ProductProps {
  id: number;
  name: string;
  url: string;
  companyName: string;
  date: Date;
  rating: number;
  price:number;
}

export default function CustomProductCard(product: ProductProps) {
  return (
    <Card className="flex  bg-[#081c15] rounded-lg shadow-lg overflow-hidden mx-auto my-4 
    w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.url}
          alt="Product Image"
          className="object-contain h-[40%] w-full"
        />
        <CardContent className="flex flex-col justify-between h-[60%] w-full">
          <Typography gutterBottom variant="h5" component="div" className="text-white">
            {product.name}
          </Typography>
          <Grid container spacing={2} className="flex-grow">
            <Grid item xs={12} sm={6} className="flex flex-col">
              <Typography variant="body2" className="text-white">
                {product.companyName}
              </Typography>
              <Typography variant="body2" className="text-white">
                {product.price}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className="flex flex-col items-center">
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
                sx={{ color: 'gold' }}
              />
              <Link
          href={`/products/detail/${product.id}`}
          className="mt-4 inline-block bg-blue-950 text-cyan-50 rounded-lg 
          px-4 py-2 text-center font-medium hover:bg-blue-800 transition-colors "
        >
          Detail
        </Link>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
