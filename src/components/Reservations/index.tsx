import { useAppSelector } from '@/store/hooks';
import Reservation from './Reservation';
import { Typography } from '@mui/material';

function Reservations() {
  const reservations = useAppSelector(state => state.reservation.reservations);
  return (
    <>
      {reservations.length > 0 ? (
        <Typography variant="h4">Current Reservations</Typography>
      ) : null}
      {reservations.map(props => (
        <Reservation key={props.id} {...props} />
      ))}
    </>
  );
}

export default Reservations;
