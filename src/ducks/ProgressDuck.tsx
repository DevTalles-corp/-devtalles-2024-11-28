import { Duck } from './types/duck.types';

interface Props {
  duck: Duck;
}

export const ProgressDuck = ({ duck }: Props) => {
  return (
    <div key={duck.id} className="flex items-center">
      {/* Nombre del pato */}
      <div className="text-right absolute text-3xl font-bold left-24">
        {duck.name}
        {/* <small className="font-thin">- {duck.strategy.name}</small> */}
      </div>

      {/* Pato */}
      <div
        className="w-12 h-12 relative bg-yellow-400 text-center rounded-full flex items-center justify-center transition-all duration-200 text-3xl"
        style={{ left: `${duck.position}%` }}
      >
        🦆
      </div>

      {/* Barra de progreso */}
      <div className="flex-1 h-2 bg-gray-300 rounded ml-4">
        <div
          className="h-2 bg-green-500 rounded transition-all duration-200"
          style={{ width: `${duck.position}%` }}
        ></div>
      </div>
    </div>
  );
};
