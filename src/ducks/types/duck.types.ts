export class Duck {
  id: number;
  position: number;
  name: string;

  constructor(id: number, name: string, position: number = 0) {
    this.id = id;
    this.name = name;
    this.position = position;
  }

  reset() {
    this.position = 0;
  }

  move(): number {
    return this.position + Math.floor(Math.random() * 10);
  }
}
