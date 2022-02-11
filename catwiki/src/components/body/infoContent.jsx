import cat1 from '../assets/image1.png';
import cat2 from '../assets/image2.png';
import cat3 from '../assets/image3.png'; //importacion estatica

//import React, { useMemo } from 'react'; //import dinamico
//const imgGatos = require.context('ruta de las img', true );

const InfContent = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white mt-12 justify-center sm:mx-20 font-['Montserrat','sans-serif'] sm:flex sm:my-24 sm:px-32 sm:py-14">
            <div className="sm:self-center sm:text-xl sm:pr-32">
                <div className="w-12 h-1 mb-2 border-2 bg-amber-900 border-amber-900 dark:bg-amber-600 dark:border-amber-600"></div>
                <p className="font-bold text-3xl sm:text-5xl">Why should you have a cat?</p>
                <p className="mt-16 font-medium">Having a cat around you can actually trigger the release of
                    calming chemicals in your body which lower your stress and anxiety leves</p>
                <p className="mt-8 mb-12 font-bold text-xs flex items-center text-stone-500 dark:text-white">READ MORE
                    <svg className="ml-4 h-6 w-6 fill-stone-500 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" /></svg>
                </p>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-7'>
                <div className='flex flex-col'>
                    <img className="mb-4" src={cat2} alt="cat2" />
                    <img  src={cat1} alt="cat1" />
                </div>
                <img className="col-span-1" src={cat3} alt="cat3" />
            </div>
        </div>
    );
}

export default InfContent;

//NOTA: es mas facil trabajar imagenes desde el public mas q nada con lo dinamico aunque se puede de igual forma trabajar desde el src.