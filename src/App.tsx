import React, { useState, useEffect } from 'react';
import { ProgressDuck } from './ducks/ProgressDuck';

import {
  DiveStrategy,
  Duck,
  FlyStrategy,
  SwimStrategy,
  WalkStrategy,
} from './ducks/types/duck.types';

const ducksData: Duck[] = [
  new Duck(1, 'Lucas', new FlyStrategy()),
  new Duck(2, 'Daisy', new DiveStrategy()),
  new Duck(3, 'Daffy', new SwimStrategy()),
  new Duck(4, 'Donald', new FlyStrategy()),
];

const App: React.FC = () => {
  const [ducks, setDucks] = useState<Duck[]>(ducksData);
  const [isRacing, setIsRacing] = useState(false);
  const [winner, setWinner] = useState<Duck>();

  const startRace = () => {
    setWinner(undefined);
    setDucks((prevDucks) => {
      prevDucks.forEach((duck) => duck.reset());
      return prevDucks;
    });

    setIsRacing(true);
  };

  useEffect(() => {
    if (!isRacing) return;

    const interval = setInterval(() => {
      setDucks((prevDucks) =>
        prevDucks.map((duck) => {
          duck.position = duck.movementStrategy.move(duck.position);
          return duck;
        })
      );
    }, 200);

    return () => clearInterval(interval);
  }, [isRacing]);

  // Determinar el fin de la carrera
  useEffect(() => {
    if (ducks.some((duck) => duck.position >= 100)) {
      setIsRacing(false);
      setWinner(ducks.find((duck) => duck.position >= 100));
    }
  }, [ducks]);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Carrera de Patos 🦆</h1>
      <div className="w-full max-w-2xl space-y-4">
        {ducks.map((duck) => (
          <ProgressDuck key={duck.id} duck={duck} />
        ))}
      </div>

      {/* Botón de iniciar carrera */}
      <button
        onClick={startRace}
        disabled={isRacing}
        className={`mt-8 px-6 py-3 text-white font-bold rounded-lg ${
          isRacing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isRacing ? '¡Carrera en Progreso!' : 'Iniciar Carrera'}
      </button>

      {/* Ganador */}
      {winner ? (
        <div className="mt-4 text-2xl font-bold text-green-600">
          🏁 Ganador: {winner.name} - estrategia: {winner.name} 🏁
        </div>
      ) : (
        <div className="mt-4 text-2xl font-bold text-red-600">
          🔥Esperando resultados 🔥{' '}
        </div>
      )}
    </div>
  );
};

export default App;
