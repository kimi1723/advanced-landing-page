export class TimeSimulation {
  constructor() {
    this.realTime = 0;
    this.simTime = 0;
    this.speed = 1;
  }

  get() {
    return this.simTime;
  }

  setSpeed(s) {
    this.speed = s;
  }

  update(currentRealtime) {
    if (currentRealtime < this.realTime) throw new Error('Real time cannot move backwards');

    const timeDiff = currentRealtime - this.realTime;

    this.realTime = currentRealtime;
    this.simTime += timeDiff * this.speed;
  }
}
