import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSelectedLocation } from '@/store/slices/location';
import { addAction } from '@/store/slices/reservation';
import { ReservationPayload } from '@/types';
import checkDateAvailability from '@/utils/checkDateAvailability';
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { FormEvent, useState } from 'react';

const todaysDate = new Date().toISOString().split('T')[0];

export default function CreateReservationForm() {
  const selectedLocation = useAppSelector(
    state => state.location.selectedLocation
  );
  const allReservations = useAppSelector(
    state => state.reservation.reservations
  );
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');

  const handleClear = () => {
    setName('');
    setCheckInDate('');
    setCheckoutDate('');
  };
  if (!selectedLocation) return;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reservation = {
      customerName: name,
      checkIn: checkInDate,
      checkOut: checkoutDate,
      locationId: selectedLocation
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
    dispatch(addAction(reservation));
    dispatch(setSelectedLocation(null));
    enqueueSnackbar('A new reservation was created', { variant: 'success' });
    handleClear();
  };

  return (
    <>
      <Typography variant="h4">Create new reservation</Typography>
      <Box component={Card} width="100%">
        <Stack
          direction={{ md: 'column', lg: 'row' }}
          width="100%"
          gap={2}
          p={1}
          component="form"
          onSubmit={handleSubmit}
        >
          <Stack flex={1} gap={2} direction={{ sm: 'column', md: 'row' }}>
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
          </Stack>
          <Stack direction="row" flex={0.5} gap={2}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
            >
              Create
            </Button>
            <Button fullWidth onClick={handleClear}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
