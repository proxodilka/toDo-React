import React from 'react';
import Header from './components/header/header.js';
import Toolbar from './components/toolbar/toolbar.js';
import TaskList from './components/task-list/task-list.js';
import AddForm from './components/add-form/add-form.js';


import './App.css';


const getTasks = ()=>{
    return;
}



class App extends React.Component{

    newTask = (text="", important=false, id=Date.now(), timeAdd=id, lastEdit=id)=>{
        return{
            id: Math.floor(Math.random()*1000+id),
            text: text,
            timeAdd: timeAdd,
            lastEdit: lastEdit,
            done: false,
            important: important
        };
    }

    state = {
        dataFilter: (x)=>x,
        Tasks: [
            this.newTask("buy some butter"),
            this.newTask("do math"),
            this.newTask("finish this app"),
            this.newTask("learn react")
        ]
    }

    changeFilter = (filter)=>{
        this.setState({
            dataFilter: filter
        });
    }

    deleteItem = (id)=>{
        this.setState(({Tasks})=>{
            const ind = Tasks.findIndex((el)=>el.id==id);

            return{
                Tasks: [
                    ...Tasks.slice(0, ind),
                    ...Tasks.slice(ind+1)
                ]
            }
        })
    }

    addItem = (text)=>{
        this.setState( ({Tasks})=>{
            return{
                Tasks: [
                    this.newTask(text),
                    ...Tasks
                ]
            }
        });
    }

    updateField = (arr, field, val, id)=>{
        return arr.map((el)=>el.id==id?{...el, [field]:val}:el);
    }

    toggleField = (arr, field, id)=>{
        return arr.map((el)=>el.id==id?{...el, [field]:!el[field]}:el);
    }

    markDone = (id)=>{
        this.setState(({Tasks})=>{
            return {
                Tasks: this.toggleField(Tasks, 'done', id)
            }
        })
        
    }

    markImportant = (id)=>{
        this.setState(({Tasks})=>{
            return {
                Tasks: this.toggleField(Tasks, 'important', id)
            }
        })
    }

    render(){
        return (
            <div className="App">
                <Header></Header>
                <main>
                    <Toolbar onFilterChange={this.changeFilter} />
                    <TaskList tasks = {this.state.Tasks.filter(this.state.dataFilter)}
                            onDelete = {this.deleteItem}
                            onMarkImportant = {this.markImportant}
                            onMarkDone = {this.markDone}/>
                    <AddForm onAdd = {this.addItem} />
                </main>
            </div>       
        );
    }
}

export default App;