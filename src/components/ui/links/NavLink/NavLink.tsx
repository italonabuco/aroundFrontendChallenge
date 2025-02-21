import { NavLink as Link } from 'react-router-dom'
import { CustomComponent } from '../../../../types'
import clsx from 'clsx'
import { NavLinkType } from './NavLink.types'

const NavLink: CustomComponent<NavLinkType> = ({ children, to }) => (
  <Link
    className={({ isActive }) =>
      clsx(
        'relative before:bg-primary-500 before:absolute before:block before:w-full before:h-0.5 before:-bottom-0.5 before:left-0 before:bg-current before:scale-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-100 cursor-pointer',
        { 'before:scale-100': isActive }
      )
    }
    to={to}
  >
    {children}
  </Link>
)

export default NavLink
