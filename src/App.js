import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import CheckOutPage from './pages/checkout/checkout.component';
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/users.selectors';
import {createStructuredSelector} from 'reselect'

class App extends React.Component {
  // ya no se necesita el constructor porque mapDispatchToProps ya estoy obteniendo el state del user de mi store
  // constructor(){
  //   super();
  //   this.state= {
  //     currentUser:null
  //   }
  // }
  unsubscribefromAuth = null

  componentDidMount(){
    
    const {setCurrentUser} = this.props; // destructuro mi setCurrentUser solamente para que mas abajo no este llamando this.props.setCurrentUser y sea solo setCurrentUser mas corto

    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){ // el user auth es el que esta en la console diciendo null cuando no hay session
        const userRef = await createUserProfileDocument(userAuth); // esta funcion me retorna el user ref
        // obviamente al llamar la funcion de arriba recuerda que si no hay documento el creara uno, esta llamando desde firebase.utils
        userRef.onSnapshot(snapShot=>{ // el snapshot se hace de la referencia
              setCurrentUser({ // setCurrent user es mi accion que obtengo de mapDispatchToProps no hago this.props.setCurrentUser, porque mas arriba ya desructure setCurrentUser
              id: snapShot.id,
              ... snapShot.data()
          })
        });
      }
      setCurrentUser(userAuth) // este es como el else, es como decir null por si if(userAuth) no existe
    });
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render(){
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage} />
        <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to = '/'/>) : (<SignInAndSignUpPage/>) } />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser})

// lo de abajo era antes del structured selector
// const mapStateToProps = ({user}) => ({
//   CurrentUser: user.CurrentUser
// });

// el currentUser no se esta usando en este componente como tal, entonces no necesito ese props de mi store
// solamente lo despacha a mi componente Header, para eso se usa la funcion de mas abajo
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user=>dispatch(setCurrentUser(user)) // setCurrentUser() es una funcion de mis acciones que devuelve un objeto con su payload, y eso queda dentro el dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(null, mapDispatchToProps)(App); // en este componente usare las acciones de redux y no el state o store, por eso el primer parametro lleva null, el segundo parametro es para usar los reducers o acciones y las envia como props a este mismo componente es por eso que despues puedo hacer const {setCurrentUser} = this.props
