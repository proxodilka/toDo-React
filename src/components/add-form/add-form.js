import React from 'react';
import './add-form.css';

class AddForm extends React.Component{

    state = {
        taskValue: ""
    }

    Add = (e)=>{
        e.preventDefault();
        this.props.onAdd(this.state.taskValue);
        this.setState({
            taskValue: ""
        })
    }

    updateValue = (e)=>{
        this.setState({
            taskValue: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.Add} className="addFormRoot">
                <input className="form-control" placeholder="input task here..." onChange = {this.updateValue}
                       type="text" value={this.state.taskValue} autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
                <button className="ml-2 btn btn-primary">Add</button>
            </form>
        );
    }
}


export default AddForm;
