import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faPlus } from '@fortawesome/free-solid-svg-icons';



import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='user'>
                <p> Hey user</p>
            </div>
            <nav className='links'>
                <ul>
                    <li>
                        <NavLink exact to='/'>
                        <FontAwesomeIcon icon={faTableColumns} className= 'img' />

                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/create'>
                        <FontAwesomeIcon icon={faPlus} className= 'img' />

                            <span>New Project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar