import React from 'react';
import './search-filter.css';

class SearchFilter extends React.Component{

    filtersFn = [
        (x)=>x,
        (x)=>!x.done,
        (x)=>x.done
    ]

    state = {
        filters: [
            {id: 0, name: 'All', active: true},
            {id: 1, name: 'Active', active: false},
            {id: 2, name: 'Done', active: false}
        ],
    }

    filterChange = (id)=>{
        if ((this.state.filters.find((x)=>x.active) || {id:-1}).id==id)
            return;

        this.setState( ( {filters} ) =>{
            return {
                filters: filters.map((el)=>el.id==id?{...el, active:true}:{...el, active:false})
            }
        }, ()=>this.generateFilterFunction(id));

    }

    generateFilterFunction = (id)=>{
        this.props.onFilterChange( this.filtersFn[id] );
    }

    render(){
        return(
            <div className="buttonsContainer">
                {this.state.filters.map((el, ind, arr)=>{
                    let classList = "btn";

                    if (el.active) classList+=" btn-primary";
                    else classList+=" btn-outline-secondary";

                    if (!ind) classList+=" first";

                    if (ind==arr.length-1) classList+=" last";

                    return(
                        <button key={el.id} className={classList} onClick={()=>this.filterChange(el.id)}>{el.name}</button>
                    );
                })}
            </div>
        );
    }
}

export default SearchFilter;