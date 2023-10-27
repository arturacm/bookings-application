import { useAppSelector } from '@/store/hooks';
import Reservation from './Reservation';

function Reservations() {
  const reservations = useAppSelector(state => state.reservation.reservations);
  return reservations.map(props => <Reservation key={props.id} {...props} />);
}

export default Reservations;
