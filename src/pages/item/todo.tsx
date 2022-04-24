import { useState } from "react"
import useStore from "../../store/mobx"
import { observer } from 'mobx-react-lite'
function Todo(){
    const change = (id:number,$event:any)=>{
    }
   const thinsTodo=[
        {
            id:1,
            thing:"helloworld",
            isDone:false
        },
        {
            id:2,
            thing:"helloworld111",
            isDone:false
        },
        {
            id:3,
            thing:"helloworld222",
            isDone:false
        },
        {
            id:4,
            thing:"helloworld333",
            isDone:false
        }
    ]
    return(
        <div className="main-wrapper">
            <div className="row">
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="todo-sidebar">
                                <div className="todo-new-task">
                                    <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#newTask">Create New Task</button>
                                    <div className="modal fade" id="newTask"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">New Task</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <i className="material-icons">close</i>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="new-task-name" placeholder="Task Name"/>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                    <button type="button" className="btn btn-primary">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="todo-menu">
                                    <ul className="list-unstyled">
                                        <li className="active"><a href="#"><i className="fas fa-bars"></i>All</a></li>
                                        <li><a href="#"><i className="fas fa-check"></i>Completed</a></li>
                                        <li><a href="#"><i className="fas fa-trash"></i>Deleted</a></li>
                                    </ul>
                                </div>
                                <div className="divider"></div>
                                <div className="todo-search">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" id="todo-search" className="form-control" placeholder="Search task"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <div className="todo-list">
                                <ul className="list-unstyled">
                                    {
                                        thinsTodo.map(item=>
                                            <li key={item.id}>
                                                <a href="javascript: void(0);" className={item.isDone?"custom-checkbox done":"custom-checkbox"}>
                                                    <input onChange={($event)=>change(item.id,$event)} type="checkbox" className="custom-control-input" id={`task${item.id}`}/>
                                                    <label className="custom-control-label" htmlFor={`task${item.id}`}></label> 
                                                    {item.thing}
                                                </a>
                                            </li> 
                                            )
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default observer(Todo)