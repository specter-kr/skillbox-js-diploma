import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/header'
import Main from '../components/main'
import {getPhotos} from '../actions/actions'

let App = (props) => {
  const {photos, getPhotos} = props
  return(
    <React.Fragment>
      <Header />
      <Main photos={photos} getPhotos={getPhotos} />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return{
    photos: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: page => dispatch(getPhotos(page)),
  }
}

App = connect (
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;