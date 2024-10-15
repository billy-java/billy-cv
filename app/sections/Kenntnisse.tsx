import React from 'react';
import { I_Props_Titel } from '../assets/I_Props_Titel';
import {
  Data_Kenntnisse_BackEnd,
  Data_Kenntnisse_Design,
  Data_Kenntnisse_FrontEnd,
  Data_Kenntnisse_Sonstiges,
} from '../assets/Data_Kenntnisse';

const Kenntnisse = ({ section }: I_Props_Titel) => {
  return (
    <div className="my-10 text-gray-300" id="Lebenslauf">
      <h1 className="text-indigo-400 mb-20 text-3xl text-center">{section}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-6">
        {/* Conteneur Flex pour aligner tous les enfants à la même hauteur */}
        <div className="w-[90%] mx-auto flex flex-col">
          <div className="flex flex-col border-[1px] rounded-lg p-5 shadow-indigo-300 shadow-lg mb-8 h-full">
            <h2 className="text-xl mb-6 text-indigo-400">FrontEnd</h2>
            {Data_Kenntnisse_FrontEnd.map((item, i) => {
              return (
                <div className="flex items-center space-x-4 mb-4" key={i}>
                  <h6 className="text-lg">{item.Kenntnis}:</h6>
                  <p className="flex items-center">
                    <span className="text-indigo-400">{item.prozent}</span>
                    {'%'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[90%] mx-auto flex flex-col">
          <div className="flex flex-col border-[1px] rounded-lg p-5 shadow-indigo-300 shadow-lg mb-8 h-full">
            <h2 className="text-xl mb-6 text-indigo-400">BackEnd</h2>
            {Data_Kenntnisse_BackEnd.map((item, i) => {
              return (
                <div className="flex items-center space-x-4 mb-4" key={i}>
                  <h6 className="text-lg">{item.Kenntnis}:</h6>
                  <p className="flex items-center">
                    <span className="text-indigo-400">{item.prozent}</span>
                    {'%'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[90%] mx-auto flex flex-col">
          <div className="flex flex-col border-[1px] rounded-lg p-5 shadow-indigo-300 shadow-lg mb-8 h-full">
            <h2 className="text-xl mb-6 text-indigo-400">Design</h2>
            {Data_Kenntnisse_Design.map((item, i) => {
              return (
                <div className="flex items-center space-x-4 mb-4" key={i}>
                  <h6 className="text-lg">{item.Kenntnis}:</h6>
                  <p className="flex items-center">
                    <span className="text-indigo-400">{item.prozent}</span>
                    {'%'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[90%] mx-auto flex flex-col">
          <div className="flex flex-col border-[1px] rounded-lg p-5 shadow-indigo-300 shadow-lg mb-8 h-full">
            <h2 className="text-xl mb-6 text-indigo-400">Sonstiges</h2>
            {Data_Kenntnisse_Sonstiges.map((item, i) => {
              return (
                <div className="flex items-center space-x-4 mb-4" key={i}>
                  <h6 className="text-lg">{item.Kenntnis}:</h6>
                  <p className="flex items-center">
                    <span className="text-indigo-400">{item.prozent}</span>
                    {'%'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kenntnisse;
