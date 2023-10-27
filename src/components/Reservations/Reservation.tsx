import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { deleteAction } from '@/store/slices/reservation';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Stack,
  Typography
} from '@mui/material';
import { useSnackbar } from 'notistack';

interface ReservationProps {
  customerName: string;
  checkIn: string;
  checkOut: string;
  locationId: number;
  id: string;
}

function Reservation({
  customerName,
  checkIn,
  checkOut,
  locationId,
  id
}: ReservationProps) {
  const location = useAppSelector(state =>
    state.location.locations.find(location => location.id === locationId)
  );
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  if (!location) return null;
  return (
    <Stack
      direction="row"
      component={Card}
      width="100%"
      alignItems="center"
      gap={2}
    >
      <Box position="relative" width="150px">
        <CardMedia
          component="img"
          image={location.image}
          alt={location.title}
          height="150px"
        />
        <Typography
          variant="h5"
          position="absolute"
          zIndex={2}
          bottom={0}
          color="primary.main"
          textAlign="center"
          width="100%"
          bgcolor={theme => `${theme.palette.secondary.main}AA`}
        >
          {location.title}
        </Typography>
      </Box>
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        flex={1}
      >
        <Stack direction={{ sm: 'column', md: 'row' }} alignItems="center">
          <Stack alignItems="center">
            <Typography variant="subtitle2">Reserved to</Typography>
            <Typography variant="h4">{customerName}</Typography>
          </Stack>
          <Divider flexItem variant="middle" />
          <Stack></Stack>
          <Stack alignItems="center">
            <Typography>
              Check In : <b>{checkIn}</b>
            </Typography>
            <Typography>
              Check Out: <b>{checkOut}</b>
            </Typography>
          </Stack>
        </Stack>

        <Stack gap={2} m={2} direction="row">
          <Button variant="contained">Edit</Button>
          <Button
            color="error"
            onClick={() => {
              dispatch(deleteAction(id));
              enqueueSnackbar('The reservation was deleted');
            }}
          >
            Delete
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Reservation;
