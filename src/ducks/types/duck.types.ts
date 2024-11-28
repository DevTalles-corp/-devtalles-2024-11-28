export class Duck {
  id: number;
  position: number;
  name: string;
  strategy: DuckMovementStrategy;

  constructor(id: number, name: string, strategy: DuckMovementStrategy) {
    this.id = id;
    this.name = name;
    this.position = 0;
    this.strategy = strategy;
  }
}

export interface DuckMovementStrategy {
  name: string;
  move: (position: number) => number;
}

export class SwimStrategy implements DuckMovementStrategy {
  name: string = 'Swim';
  move(position: number): number {
    return Math.min(100, position + Math.random() * 5);
  }
}

export class FlyStrategy implements DuckMovementStrategy {
  name: string = 'Fly';
  move(position: number): number {
    return Math.min(100, position + Math.random() * 10);
  }
}

export class DiveStrategy implements DuckMovementStrategy {
  name: string = 'Dive';
  move(position: number): number {
    return Math.min(100, position + Math.random() * 2);
  }
}
