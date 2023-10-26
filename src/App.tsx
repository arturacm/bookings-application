import Main from '@/components/Main';
import Locations from './components/Locations';
import CreateReservationForm from './components/CreateReservationForm';

function App() {
  return (
    <Main gap={2} padding={0.5}>
      <Locations />
      <CreateReservationForm />
    </Main>
  );
}
export default App;
