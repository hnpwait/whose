import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter , Route , Switch, BackButton}  from 'react-router-native'
import LayoutComponent from './component/HOC/LayoutComponent'
import GuestComponent from './component/HOC/GuestComponent'
import AuthComponent from './component/HOC/AuthComponent'
import Page from './pages/'
import {createStore  , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import promise from 'redux-promise-middleware'
import reducer from './reducer'
const store = createStore(reducer , applyMiddleware(promise(), thunk ))
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <NativeRouter>
        <Switch> 
        <Route exact path="/detail/:item" component={(Page.DetailPage)} />
        <Route exact path="/profile" component={AuthComponent(LayoutComponent(Page.ProfilePage))} />        
          <Route exact path="/" component={GuestComponent((Page.LoginPage))} />
          <Route exact path="/signup" component={GuestComponent(Page.SignUpPage)} /> 
          <Route exact path="/ItemPage" component={AuthComponent(LayoutComponent(Page.ItemPage))} />
          <Route exact path="/createfind" component={(Page.CreateItemFindPage)} />
          <Route exact path="/createfound" component={(Page.CreateItemFoundPage)} />
        </Switch>
      </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
