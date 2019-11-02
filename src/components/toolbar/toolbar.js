import React from 'react';
import SearchFilter from '../search-filter/search-filter.js';

import './toolbar.css';

class Toolbar extends React.Component{

    state = {
        statusFilter: (x)=>x,
        searchFilter: (x)=>x
    }

    statusFilterChange = (fn)=>{
         this.setState({
             statusFilter: fn
         }, this.exportFilter);
    }

    searchFilterChange = (e)=>{
        let req = e.target.value.toLowerCase().trim();
        this.setState({
            searchFilter: ((x)=>x.text.toLowerCase().indexOf(req)!=-1)
        }, this.exportFilter);
    }

    exportFilter = ()=>{
        this.props.onFilterChange(
            (x)=>this.state.statusFilter(x)&&this.state.searchFilter(x)
        );
    }

    render(){
        return(
            <div className="toolbarRoot">
                <input onChange={this.searchFilterChange} id="searchField" className="form-control" placeholder="search..." type="text"
                    autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
                <SearchFilter onFilterChange={this.statusFilterChange}/>
            </div>
        );
    }
}


export default Toolbar;