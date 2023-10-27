import { useAppSelector } from '@/store/hooks';
import Reservation from './Reservation';

function Reservations() {
  const reservations = useAppSelector(state => state.reservation.reservations);
  return reservations.map(({ id, ...props }) => (
    <Reservation key={id} {...props} />
  ));
}

export default Reservations;
