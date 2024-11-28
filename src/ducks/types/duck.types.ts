export class Duck {
  id: number;
  position: number;
  name: string;

  movementStrategy: DuckMovementStrategy;

  constructor(id: number, name: string, strategy: DuckMovementStrategy) {
    this.id = id;
    this.name = name;
    this.position = 0;

    this.movementStrategy = strategy;
  }

  reset() {
    this.position = 0;
  }

  move(): number {
    return this.position + Math.floor(Math.random() * 10);

    // return this.movementStrategy.move(this.position);
  }
}

interface DuckMovementStrategy {
  name: string;

  move: (position: number) => number;
}

export class SwimStrategy implements DuckMovementStrategy {
  name: string = 'Swim';

  move(position: number) {
    return Math.min(100, position + Math.random() * 5);
  }
}

export class FlyStrategy implements DuckMovementStrategy {
  name: string = 'Fly';

  move(position: number) {
    return Math.min(100, position + Math.random() * 10);
  }
}

export class DiveStrategy implements DuckMovementStrategy {
  name: string = 'Dive';

  move(position: number) {
    return Math.min(100, position + Math.random() * 3);
  }
}

export class WalkStrategy implements DuckMovementStrategy {
  name: string = 'Walk';

  move(position: number) {
    return Math.min(100, position + Math.random());
  }
}
