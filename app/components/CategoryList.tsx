'use client'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CardMedia from '@mui/material/CardMedia';  

interface Category {
  id: number;
  name: string;
  url: string;
}

interface CategoriesProps {
  categories: Category[];
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function CategoryList({ categories }: CategoriesProps) {
  return (
    <List>
      {categories.map((category) => (
        <ListItem
          key={category.id}
          sx={{ display: 'flex', alignItems: 'center' }}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="Add"
            >
              <AddIcon sx={{ color: '#52b788' }} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <CardMedia
                component="img"
                image={category.url}
                sx={{ width: 40, height: 40 ,background: '#081c15' }} 
                alt={category.name}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={category.name}
            primaryTypographyProps={{ sx: { color: 'white' } }} 
          />
        </ListItem>
      ))}
    </List>
  );
}
