import React from 'react';
import download from '@/app/assets/icons/download.svg';
import Image from 'next/image';
import Link from 'next/link';

interface DatenHook  {
  version: number;
}

const MeineDaten = ({ version }: DatenHook) => {
  if (version === 1) {
    return (
      <div className="border rounded-r-lg  border-indigo-800 p-3 pl-5 leading-4 flex flex-col">
        <h4 className="font-semibold text-lg text-gray-200">
          Billy Meudji, Babou
        </h4>
        <p className="text-sm mt-2 text-gray-300 ">
          <span className="underline">Tel:</span>
          <a
            href="tel:+4917634364986"
            className="hover:underline hover:text-indigo-600">
            {' +49 176 34364986'}
          </a>
        </p>
        <p className="text-sm text-gray-300">
          <span className="underline">Email:</span>
          <a
            href="mailto:billy007@gmail.com"
            className="hover:underline hover:text-indigo-600">
            {' billy007@gmail.com'}
          </a>
        </p>
        <a
          href="/doc/Billy_Meudji_Babou_CV_DE_2024.pdf"
          download="Billy_Meudji_Babou_CV_DE_2024.pdf"
          className="font-semibold bg-green-600 w-fit rounded-lg hover:bg-green-400 hover:text-black px-4 py-2 my-2 text-white flex items-center space-x-2">
          <Image
            src={download}
            height={60}
            width={60}
            alt="Billy_Meudji_Babou_CV_DE_2024.pdf"
          />
          <p>Lebenslauf herunterladen</p>
        </a>
        <Link
          className="bg-indigo-600 w-fit rounded-lg hover:bg-indigo-400 hover:text-black px-4 py-2 my-2 text-white"
          href="https://github.com/billy-java?tab=repositories"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </Link>
      </div>
    );
  } else {
    return (
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden border items-center shadow-indigo-800 shadow-lg rounded-lg  border-indigo-800 p-3 mb-10 leading-4 flex flex-col">
        <h4 className="font-semibold text-lg text-gray-200">
          Billy Meudji, Babou
        </h4>
        <p className="text-sm mt-2 text-gray-300 ">
          <span className="underline">Tel:</span>
          <a
            href="tel:+4917634364986"
            className="hover:underline hover:text-indigo-600">
            {' +49 176 34364986'}
          </a>
        </p>
        <p className="text-sm text-gray-300 mb-3">
          <span className="underline">Email:</span>
          <a
            href="mailto:billy007@gmail.com"
            className="hover:underline hover:text-indigo-600">
            {' billy007@gmail.com'}
          </a>
        </p>

        <a
          href="/doc/Billy_Meudji_Babou_CV_DE_2024.pdf"
          download="Billy_Meudji_Babou_CV_DE_2024.pdf"
          className="font-semibold bg-green-600 w-fit rounded-lg hover:bg-green-400 hover:text-black px-4 py-2 my-2 text-white flex items-center space-x-2">
          <Image
            src={download}
            height={30}
            width={30}
            alt="Billy_Meudji_Babou_CV_DE_2024.pdf"
          />
          <p>Lebenslauf herunterladen</p>
        </a>
        <Link
          className="bg-indigo-600 w-fit rounded-lg hover:bg-indigo-400 hover:text-black px-4 py-2 mt-1 text-white"
          href="https://github.com/billy-java?tab=repositories"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </Link>
      </div>
    );
  }
};

export default MeineDaten;
