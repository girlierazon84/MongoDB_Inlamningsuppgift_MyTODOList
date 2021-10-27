import '../utils/global/css/global.css'
import logo from '../utils/images/TodoListsLogo.png'

export default function Navbar() {
    return (
        <nav>
            <div>
                <img className='navbar__logo' src={logo} alt='My-TODO-List logotype' />
            </div>
        </nav>
    )
}