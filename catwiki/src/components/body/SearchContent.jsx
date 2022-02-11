import Catbg from '../../assets/HeroImagelg.png';
import Img1 from '../../assets/image1.png';
import LogoTextOnly from '../logos/logoText';

function Search() {
    return (
        <div className="font-['Montserrat','sans-serif']">

            <div className="rounded-t-3xl flex flex-row-reverse sm:flex-row sm:justify-end min-w-min bg-[#050709] object-right">

                {/* rounded-t-3xl flex flex-row-reverse sm:flex-row min-w-min {justify-end} bg-black object-right */}
                <img className=" rounded-t-3xl object-fill sticky lg:max-w-4xl" src={Catbg} alt="HeroImagemd.png" />

                <div className="text-white px-8 self-center max-w-max max-h-max absolute left-0 ml-5 sm:px-16 sm:ml-16">
                    
                    <LogoTextOnly />

                    <p className="w-2/3 my-2 sm:text-2xl sm:w-6/12 md:w-3/4 lg:mt-6 lg:mb-14 lg:w-auto text-xs font-medium">Get to know more about your cat breed</p>

                    <div className=" p-1 sm:p-3 flex justify-center items-center w-min bg-white rounded-full ">
                        <input className="ml-2 w-16 sm:w-48 text-black placeholder:font-medium placeholder:text-xs" type="search" name="buscador" id="buscador" placeholder='search' />
                        <button className="mr-1 justify-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-300 dark:bg-neutral-700 rounded-b-3xl py-4 px-8 sm:px-16">
                <div className="my-5 font-medium text-xs sm:text-lg">
                    <p>Most Searched Breeds</p>
                    <div className="w-12 h-1 mb-2 border-2 bg-amber-900 border-amber-900 dark:bg-amber-600 dark:border-amber-600"></div>
                </div>
                <div>
                    <p className="font-bold mb-8 md:mb-0">66+ Breeds For you to discover</p>
                    <p className=" hidden md:visible md:my-5 font-bold text-xs md:flex items-center text-stone-500 dark:text-white">READ MORE
                        <svg className="ml-4 h-6 w-6 fill-stone-500 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" /></svg>
                    </p>
                </div>
                <div className="grid gap-8 grid-cols-2 grid-rows-2 lg:flex lg:justify-between">
                    {/*esto es a modo de prueba para ver q onda las imagenes*/}
                    <div className="">
                        <img src={Img1} alt="cat" className="sm:w-56 sm:h-56 object-cover rounded-3xl" />
                        <p className=" mt-5 mb-10 sm:mt-4 sm:mb-20 font-semibold text-lg">Gato Yami</p>
                    </div>
                    <div className="">
                        <img src={Img1} alt="cat" className="sm:w-56 sm:h-56 object-cover rounded-3xl" />
                        <p className=" mt-5 mb-10 sm:mt-4 sm:mb-20 font-semibold text-lg">Gato cuak</p>
                    </div>
                    <div className="">
                        <img src={Img1} alt="cat" className="sm:w-56 sm:h-56 object-cover rounded-3xl" />
                        <p className=" mt-5 mb-10 sm:mt-4 sm:mb-20 font-semibold text-lg">Gato eze</p>
                    </div>
                    <div className="">
                        <img src={Img1} alt="cat" className="sm:w-56 sm:h-56 object-cover rounded-3xl" />
                        <p className=" mt-5 mb-10 sm:mt-4 sm:mb-20 font-semibold text-lg">Gato joni</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Search;