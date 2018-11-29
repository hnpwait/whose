import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter , Route , Switch, BackButton}  from 'react-router-native'
import LayoutComponent from './component/HOC/LayoutComponent'
import Page from './pages/'
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={LayoutComponent(Page.ItemPage)} />
          <Route exact path="/profile" component={LayoutComponent(Page.ProfilePage)} />
          <Route exact path="/create" component={LayoutComponent(Page.CreateItemPage)} />
        </Switch>
      </NativeRouter>
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
