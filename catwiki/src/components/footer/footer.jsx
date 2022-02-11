import Logo from "../logos/logo";
import LogoWhite from "../logos/logoWhite";

const isDark = () => {
    const theme = localStorage.getItem("current-theme");
    console.log(theme)
    theme === 'dark' ? <LogoWhite></LogoWhite> : <Logo></Logo>;
}

// footer
const Foter  = () => {
    return(
        <footer className=" items-center bg-gray-900 dark:bg-neutral-300 min-w-full w-4/5 flex flex-col sm:flex-row sm:justify-between p-3 rounded-t-3xl font-['Montserrat','sans-serif'] text-xs text-white dark:text-black dark:font-medium">
            <isDark></isDark>
            <p>©created by <span className="font-bold">JoniHaarala</span> - devChallenge.io 2021</p>
        </footer>
    );
}

export default Foter;