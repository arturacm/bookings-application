import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

interface LocationProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  image: string;
  description: string;
  price: number;
}

export default function Location({
  selected,
  onClick,
  title,
  image,
  description,
  price
}: LocationProps) {
  return (
    <Box
      border={selected ? 'solid 2px transparent' : undefined}
      borderColor="primary.main"
      component={Card}
      flex={1}
      minWidth="170px"
      maxWidth="200px"
    >
      <CardActionArea
        onClick={onClick}
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <CardMedia
          component="img"
          height={selected ? 146 : 150}
          image={image}
          alt={title}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Typography variant="subtitle1">Daily price: ${price}</Typography>
        </CardContent>
      </CardActionArea>
    </Box>
  );
}
