import Reservation from './core/Reservation';

class App {
  #reservation;

  constructor() {
    this.#reservation = new Reservation();
  }
  async run() {
    await this.#reservation.makeAReservation();
  }
}

export default App;
