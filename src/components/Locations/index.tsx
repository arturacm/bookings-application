import Location from './Location';
import { Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSelectedLocation } from '@/store/slices/location';

function Locations() {
  const { locations, selectedLocation } = useAppSelector(
    state => state.location
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h4">Available Locations</Typography>
      <Stack
        direction="row"
        gap={1}
        maxWidth="100vw"
        alignItems="stretch"
        flexWrap="wrap"
      >
        {locations.map(({ id, ...props }) => (
          <Location
            key={id}
            selected={selectedLocation === id}
            onClick={() => dispatch(setSelectedLocation(id))}
            {...props}
          />
        ))}
      </Stack>
    </>
  );
}

export default Locations;
