import React from 'react';
import { connect } from 'react-redux';
import {termAction} from '../actions/term-action';
import { bindActionCreators } from "redux";

class SearchBar extends React.Component {

    constructor(props){
       super(props);
       this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.props.termAction(event.target.value)
        this.props.onSearchTermChange(event.target.value);
    }
    render() {
      return (
      <div className='search-bar'>
          <input 
          value={this.props.term}
           onChange={this.onInputChange}
          />
          </div>
      );
    }
  }

  function mapStateToProps(state){
      return{
          term:state.term
      };
  }
  function matchDispatchToProps(dispatch){
       return bindActionCreators({termAction:termAction},dispatch);
  }
export default connect(mapStateToProps,matchDispatchToProps)(SearchBar);