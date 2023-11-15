import Reservation from './core/Reservation';

class App {
  async run() {
    await new Reservation().makeAReservation();
  }
}

export default App;
