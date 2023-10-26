import { LocationState } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: LocationState = {
  locations: [
    {
      id: 1,
      title: 'Big Scottish Castle',
      description: 'Actual castle in Scotland',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/ab/GlamisWide.JPG',
      price: 200
    },
    {
      id: 2,
      title: 'Flat in Manhattan',
      description: 'Lorem ipsum dolor sit.',
      image:
        'https://i.insider.com/61e7052204ce6e0018d795ec?width=1000&format=jpeg&auto=webp',
      price: 500
    },
    {
      id: 3,
      title: 'House in the woods',
      description: 'bring a compass',
      image: "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/07/1024x1029/gettyimages-79091432_super.jpg?resize=980:*",
      price: 100
    },
    {
      id: 4,
      title: 'House at a Lake',
      description: 'Lorem ipsum dolor sit.',
      image:
        'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.mountainliving.com/content/uploads/2020/06/PearsonBigfork0915_0359.jpg',
      price: 350
    }
  ],
  selectedLocation: null
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setSelectedLocation: (state, { payload }: PayloadAction<number | null>) => {
      state.selectedLocation =
        payload === state.selectedLocation ? null : payload;
    }
  }
});

export const { setSelectedLocation } = locationSlice.actions;

export default locationSlice.reducer;
