import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Stack,
  TextField
} from '@mui/material';
import { FormEvent, useState } from 'react';
import Location from '@/components/Locations/Location';
import { ReservationPayload } from '@/types';
import { useSnackbar } from 'notistack';
import checkDateAvailability from '@/utils/checkDateAvailability';
import { updateAction } from '@/store/slices/reservation';

interface UpdateReservationModalProps extends DialogProps {
  onClose: () => void;
  onSubmit: () => void;
  customerName: string;
  checkIn: string;
  checkOut: string;
  reservationId: string;
  locationId: number;
}
const todaysDate = new Date().toISOString().split('T')[0];

function UpdateReservationModal({
  onClose,
  onSubmit,
  customerName,
  checkIn,
  checkOut,
  locationId,
  reservationId,
  ...rest
}: UpdateReservationModalProps) {
  const [name, setName] = useState(customerName);
  const [checkInDate, setCheckInDate] = useState(checkIn);
  const [checkoutDate, setCheckoutDate] = useState(checkOut);
  const [selectedLocationId, setSelectedLocationId] = useState(locationId);
  const locations = useAppSelector(state => state.location.locations);
  const allReservations = useAppSelector(
    state => state.reservation.reservations
  );
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reservation = {
      customerName: name,
      checkIn: checkInDate,
      checkOut: checkoutDate,
      locationId: selectedLocationId
    } satisfies ReservationPayload;

    if (
      name.trim() === '' ||
      checkInDate.trim() === '' ||
      checkoutDate.trim() === ''
    ) {
      enqueueSnackbar('Please fill in all fields', {
        variant: 'error'
      });
      return;
    }

    if (checkDateAvailability(reservation, allReservations)) {
      enqueueSnackbar('The location is not available at this date', {
        variant: 'error'
      });
      return;
    }
    dispatch(updateAction({ id: reservationId, input: reservation }));
    enqueueSnackbar('The reservation was updated successfully', {
      variant: 'success'
    });
    onClose();
  };

  return (
    <Dialog {...rest} onClose={onClose}>
      <Stack component="form" onSubmit={handleSubmit}>
        <DialogTitle>Update</DialogTitle>
        <DialogContent>
          <DialogContentText>Update reservation</DialogContentText>
          <Stack flex={1} gap={2}>
            <TextField
              fullWidth
              label="User name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <TextField
              fullWidth
              type="date"
              label="CheckIn Date"
              onChange={e => setCheckInDate(e.target.value)}
              value={checkInDate}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: todaysDate }}
            />
            <TextField
              fullWidth
              type="date"
              label="Checkout Date"
              onChange={e => setCheckoutDate(e.target.value)}
              value={checkoutDate}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: checkInDate || todaysDate }}
            />

            <Stack direction="row" gap={1} alignItems="stretch" flexWrap="wrap">
              {locations.map(({ id, ...props }) => (
                <Location
                  key={id}
                  selected={selectedLocationId === id}
                  onClick={() => setSelectedLocationId(id)}
                  {...props}
                />
              ))}
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSubmit} type="submit">
            Update
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
}

export default UpdateReservationModal;
