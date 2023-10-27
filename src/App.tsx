import Main from '@/components/Main';
import Locations from './components/Locations';
import CreateReservationForm from './components/CreateReservationForm';
import Reservations from './components/Reservations';

function App() {
  return (
    <Main gap={2} padding={0.5}>
      <Locations />
      <CreateReservationForm />
      <Reservations />
    </Main>
  );
}
export default App;
