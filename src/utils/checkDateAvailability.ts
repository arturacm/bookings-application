import { Reservation, ReservationPayload } from '@/types';
import { isWithinInterval } from 'date-fns';

const checkDateAvailability = (
  { checkIn, checkOut, locationId }: ReservationPayload,
  reservations: Reservation[]
) => {
  const reservationsFromSelectedLocation = reservations.filter(
    reservation => reservation.locationId === locationId
  );

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  for (const r of reservationsFromSelectedLocation) {

    const reservationCheckInDate = new Date(r.checkIn);
    const reservationCheckOutDate = new Date(r.checkOut);

    if (
      (isWithinInterval(checkInDate, {
        start: reservationCheckInDate,
        end: reservationCheckOutDate
      }) ||
        isWithinInterval(checkOutDate, {
          start: reservationCheckInDate,
          end: reservationCheckOutDate
        }) ||
        isWithinInterval(reservationCheckInDate, {
          start: checkInDate,
          end: checkOutDate
        }) ||
        isWithinInterval(reservationCheckOutDate, {
          start: checkInDate,
          end: checkOutDate
        })) &&
      r.locationId === locationId
    ) {
      return true;
    }
  }
  return false;
};

export default checkDateAvailability;
