export class Elevator {
  private floorsAmount: number;
  private floor: number;

  constructor(floorsAmount: number) {
    this.floorsAmount = floorsAmount;
    this.floor = 0;
  }

  call(currentFloor: number) {
    this.floor = currentFloor;
  }

  getFloor() {
    return this.floor;
  }

  getFloorsAmount() {
    return this.floorsAmount;
  }
}