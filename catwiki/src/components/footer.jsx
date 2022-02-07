import LogoWhite from './logoWhite';

// footer
const Foter  = () => {
    return(
        <footer className=" items-center bg-gray-900 min-w-full w-4/5 flex flex-col sm:flex-row sm:justify-between p-3 rounded-t-3xl font-['Montserrat','sans-serif'] text-xs text-white">
            <LogoWhite></LogoWhite>
            <p>©created by <span className="font-bold">JoniHaarala</span> - devChallenge.io 2021</p>
        </footer>
    );
}

export default Foter;