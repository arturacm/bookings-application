import type { Reservation, ReservationPayload } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  reservations: new Array<Reservation>()
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addAction: (state, { payload }: PayloadAction<ReservationPayload>) => {
      state.reservations.push({ ...payload, id: uuid() });
    },
    deleteAction: (state, { payload }: PayloadAction<string>) => {
      const newReservations = state.reservations.filter(
        reservation => reservation.id !== payload
      );

      state.reservations = newReservations;
    }
  }
});

export const { addAction, deleteAction } = reservationSlice.actions;

export default reservationSlice.reducer;
