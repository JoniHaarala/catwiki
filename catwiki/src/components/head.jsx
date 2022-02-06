import '../styles/global.css'
import Logo from './logo'
import Toggle from '../components/dmToggle';
// import '../components/dm.js'
// function Dm() {
//     const btnSwitch = document.getElementById("switch");
//     btnSwitch.addEventListener('click', (e) => {
//         e.preventDefault()
//         btnSwitch.classList.toggle('active');
//         document.documentElement.classList.add('dark')
        
//     });
// }

function Head() {
    return (
        <div className="min-w-full mx-auto mb-2 p-3 flex justify-between">

            <Logo></Logo>
            <div>
                <Toggle></Toggle>
            </div>
            
        </div>
    );
}

export default Head;
// recordar que para usar el componente hay que exportarlo