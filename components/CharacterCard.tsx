import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import { Characters } from '../src/types/types';

export default function CharacterCard({
  image,
  name,
  gender,
  status,
  id,
  species,
}: Partial<Characters>) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="500" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={id} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={`gender`} secondary={gender} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={status} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary={species} />
            </ListItemButton>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Link href="/" passHref>
          <Button component='a' variant="outlined">Go Back</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
