import { Console } from '@woowacourse/mission-utils';
import Reservation from './core/Reservation';

class App {
  #reservation;

  constructor() {
    this.#reservation = new Reservation();
  }
  async run() {
    try {
      this.#reservation.makeAReservation();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
