'use client'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';

interface Category {
  id: number;
  name: string;
}

interface CategoriesProps {
  categories: Category[];
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function CategoryList({ categories }: CategoriesProps) {
  return (
   
            <List >
              {categories.map((category) => (
                <ListItem
                  key={category.id}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="Add"
                    >
                      <AddIcon sx={{color:'#52b788'}} />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar sx={{background:'#52b788',color:'#081c15'}}>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={category.name}
                    primaryTypographyProps={{ sx: { color: 'black', } }} 
                  />
                </ListItem>
              ))}
            </List>
         
  );
}
