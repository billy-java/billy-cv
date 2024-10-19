'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { I_Projekt } from '@/app/assets/I_Projekt';
import Loader from '@/app/components/Loader';
import ImageSlider from '@/app/components/ImageSlider';

import { Data_React } from '@/app/assets/portfolio/Data_React';
import Link from 'next/link';

const ProjectDetail = () => {
  const { id } = useParams();
  const [projekt, setProjekt] = useState<I_Projekt | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = () => {
      const projectData: I_Projekt = Data_React[Number(id) - 1];
      setProjekt(projectData);
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!projekt) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col text-center">
          <h1 className="text-indigo-400 text-4xl mb-10">
            <span className="text-red-500">404 </span> | Kein Projekt gefunden
            für die ID: {id}
          </h1>
          <h1 className="text-indigo-400 text-4xl">
            {'Es gibt "' + Data_React.length + '" Projekte.'}
          </h1>
          <h1 className="text-indigo-400 text-4xl">
            {'Das letztes Projekt hat die ID "' + Data_React.length + '".'}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 mt-10 mb-20">
      <h1 className="text-indigo-400 text-2xl font-bold mb-4 text-center">
        Projektdetails: {projekt.name}
      </h1>

      {/* Bildslider */}
      <div className="flex flex-col border rounded-lg p-5 shadow-indigo-300 shadow-lg mb-6 h-full overflow-hidden">
        <ImageSlider images={projekt.img} format={2} />
      </div>

      <div className="mt-6 max-w-2xl w-full">
        <h2 className="text-indigo-400 text-xl font-semibold mb-2 text-center">
          Projektbeschreibung
        </h2>
        <div className="text-left">
          <p className="mb-4">{projekt.beschreibung_4}</p>
          {projekt.beschreibung_2 && (
            <>
              <strong>Teknologie:</strong>{' '}
              <p className="mb-4">{projekt.beschreibung_2}</p>
            </>
          )}
          {projekt.beschreibung_3 && (
            <>
              <strong>Was ich gelernt habe:</strong>{' '}
              <p className="mb-4">{projekt.beschreibung_3}</p>
            </>
          )}
        </div>
      </div>

      <div className="mt-6 max-w-2xl w-full">
        <h3 className="text-indigo-400 text-lg font-semibold text-center">
          Zusätzliche Details
        </h3>
        <p className="text-center">
          {projekt.stand} seit {projekt.erstellungsdatum}
        </p>
        <p className="text-center">
          Gehostet auf:{' '}
          <span className="text-indigo-600">{projekt.gehosted}</span>
        </p>
      </div>

      {/* Link zum Projekt */}
      <div className="mt-6">
        <Link
          href={projekt.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-400 text-white hover:text-black px-4 py-2 rounded-lg">
          Projekt ansehen
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
