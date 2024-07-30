import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

interface CustomCardProps {
  imageUrl: string;
  name: string;
}

export const CustomCard = ({ imageUrl, name }: CustomCardProps) => (
  <Card 
    sx={{ 
      display: 'flex', 
      flexDirection: 'row', 
      height: '100%', 
      width: '100%', 
      overflow: 'hidden',
      borderRadius: 2 
    }}
  >
    <CardMedia
      component="img"
      sx={{ 
        width: 150, 
        height: '100%', 
        objectFit: 'contain', 
        background: '#081c15',
        borderTopLeftRadius: 2, // Ensure consistent radius with Card
        borderBottomLeftRadius: 2 // Ensure consistent radius with Card
      }}
      image={imageUrl}
      alt={name}
    />
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column', 
        flex: 1, 
        justifyContent: 'center', 
        padding: 2, 
        background: "#52b788",
        borderTopRightRadius: 2, // Ensure consistent radius with Card
        borderBottomRightRadius: 2 // Ensure consistent radius with Card
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            overflow: 'hidden',
            textOverflow: 'ellipsis', 
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Box>
  </Card>
);
