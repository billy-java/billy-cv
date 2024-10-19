import React from 'react';
import { Data_Lebenslauf } from '../assets/Data_Lebenslauf';
import { I_Props_Titel } from '../assets/I_Props_Titel';

export default function Lebenslauf({ section }: I_Props_Titel) {
  return (
    <div
      className="flex flex-col items-center my-10 text-gray-300"
      id="Lebenslauf">
      <h1 className="text-indigo-400 mb-20 text-3xl text-center">{section}</h1>

      <div className="w-[90%] mx-auto lg:w-2/3 xl:w-2/4">
        {Data_Lebenslauf.map((item, i) => {
          return (
            <div
              key={i}
              className="border-[1px] rounded-lg p-5 shadow-indigo-300 shadow-lg mb-8">
              {item.Stadt === null ? (
                <h6 className="text-lg text-indigo-200 mb-4">{item.Niveau}</h6>
              ) : (
                <>
                  <h6 className="text-lg text-indigo-200 mb-4">
                    {i + ': ' + item.Niveau}
                  </h6>
                  <p className="mb-1">
                    Wo: {item.Stadt} - {item.Land}
                  </p>
                  <p>
                    Wann:
                    <span className="text-indigo-400">
                      {item.Datum_Start + ' bis ' + item.Datum_End}
                    </span>
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
