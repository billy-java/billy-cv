import React, { useState, useEffect } from 'react';
import close from '@/app/assets/icons/close.svg';
import bouton_phone from '@/app/assets/icons/bouton_phone.svg';
import Image from 'next/image';
import Link from 'next/link';
import { menus } from '../assets/menus';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../assets/redux/redux';
import { updateSection__Hilfe } from '../assets/redux/section_Slice';

interface I_Props_Sidebar {
  setSection: (wert: string) => void;
}

const Navbar = ({ setSection }: I_Props_Sidebar) => {
  const [click, setClick] = useState<boolean>(false);
  const currentSection = useSelector((state: RootState) => state.section);
  const dispatch = useDispatch();

  // Mettre à jour la section active lors du premier rendu
  useEffect(() => {
    toggleNavbar(0);

    const activeItem = menus.find((item) => item.activ);
    if (activeItem) {
      setSection(activeItem.titel);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSection]);

  // Synchroniser `currentSection` avec `menus`
  const getUpdatedMenus = () => {
    return menus.map((el) => ({
      ...el,
      activ: el.url === currentSection,
    }));
  };

  const toggleNavbar = (index: number) => {
    const selectedMenu = menus[index];
    dispatch(updateSection__Hilfe(selectedMenu.url));
    setSection(selectedMenu.titel); // Mettre à jour la section
  };

  return (
    <>
      <nav className="mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" onClick={() => toggleNavbar(0)}>
                  <Image
                    src={'/imgs/logo.svg'}
                    width={30}
                    height={30}
                    alt={'logo'}
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-800 rounded-md py-1 flex items-center ">
                {getUpdatedMenus().map((el, index) => (
                  <div
                    key={index}
                    onClick={() => toggleNavbar(index)}
                    className={`${
                      el.activ
                        ? 'bg-gray-300 rounded-md mx-1 px-2 py-1 text-sm text-gray-800 cursor-pointer'
                        : 'bg-gray-900 rounded-md mx-1 px-2 py-1 hover:bg-gray-200 text-sm hover:text-gray-800 cursor-pointer'
                    }`}>
                    <p className="flex items-center space-x-1">{el.titel}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setClick(!click)}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200">
                <Image
                  src={click ? close : bouton_phone}
                  alt="Icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          {click && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {getUpdatedMenus().map((el, index) => (
                  <div
                    key={index}
                    onClick={() => toggleNavbar(index)}
                    className={`${
                      el.activ
                        ? 'bg-gray-900 hover:bg-gray-200 hover:text-black rounded-md mx-1 px-2 py-1 text-sm text-white cursor-pointer'
                        : 'rounded-md mx-1 px-2 py-1 hover:bg-gray-200 text-sm hover:text-gray-800 cursor-pointer'
                    }`}>
                    <p className="flex items-center space-x-1">{el.titel}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
