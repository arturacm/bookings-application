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
    },
    updateAction: (
      state,
      {
        payload: { id, input }
      }: PayloadAction<{ id: string; input: ReservationPayload }>
    ) => {
      const res = state.reservations.find(el => el.id === id);

      if (!res) return;

      res.checkIn = input.checkIn;
      res.checkOut = input.checkOut;
      res.customerName = input.customerName;
      res.locationId = input.locationId;
    }
  }
});

export const { addAction, deleteAction, updateAction } =
  reservationSlice.actions;

export default reservationSlice.reducer;
