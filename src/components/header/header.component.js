import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/users.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

const Header = ({currentUser, hidden})=>( // aca estoy destructurando los props

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
        <Link to='/'>
            <FontAwesomeIcon icon={faCoffee}/> Home
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to='/shop'>
            <FontAwesomeIcon icon={faCoffee}/>  Shop
        </Link>
        </li>
        <li className="nav-item">
        <Link to='/'>
            <FontAwesomeIcon icon={faHome}/> Home
        </Link>
        </li>
        <li className="nav-item">
        { currentUser ?
        <div className="" onClick={()=>auth.signOut()}> Sign Out <FontAwesomeIcon icon={faHome}/></div>          
        :
        <Link to='/signin'>
        Sign In
        </Link>
        }
        </li>
        <li className="nav-item">
        <CartIcon/>
        </li>
        {
          hidden? null : // if hidden is true, null, else show dropdown
          <CartDropdown/>
        } 
      </ul>
    </div>
  </div>
</nav>
);


const mapStateToProps = createStructuredSelector({ // aca ya no necesito pasarle el state porque viene implicito en el create, acuerdate que el select esta seleccionando partes del state y las trae aca memoizadas

  currentUser:selectCurrentUser,
  hidden: selectCartHidden

})

//lo de abajo antes de selector y createStructureSelector
// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({ //nested destructuring del state, antes era state=>({currentuser: state.user.currentUser}) // esta funcion me ayuda a tener el state como las props de este componente
//     currentUser,
//     hidden
// })

export default connect(mapStateToProps)(Header); // connect(mapStateToProps) retorna una funcion, osea (Header) es el parametro de esa funcion