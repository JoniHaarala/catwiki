import '../styles/global.css'
import Logo from '../logos/logo'
import Toggle from '../dm/dmToggle';

function Head() {
    return (
        <div className="bg-slate-50 dark:bg-gray-900 min-w-full mx-auto mb-2 p-3 flex justify-between">

            <Logo></Logo>
            <div>
                <Toggle></Toggle>
            </div>
            
        </div>
    );
}

export default Head;
// recordar que para usar el componente hay que exportarlo