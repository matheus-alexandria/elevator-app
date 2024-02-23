export class Elevator {
  private floorsAmount: number;
  private floor: number;

  constructor(floorsAmount: number) {
    this.floorsAmount = floorsAmount;
  }

  call(currentFloor: number) {
    this.floor = currentFloor;
  }

  getFloor() {
    return this.floor;
  }
}