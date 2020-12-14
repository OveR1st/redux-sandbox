import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter, inc, dec, rnd }) => {

  return(
    <div>
      <h2>{counter}</h2>
      <button
        onClick={dec}
        class="btn btn-primary btn-lg">DEC</button>
      <button 
        onClick={inc}
        class="btn btn-primary btn-lg">INC</button>
      <button
        onClick={rnd} 
        class="btn btn-primary btn-lg">RND</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps)(Counter);