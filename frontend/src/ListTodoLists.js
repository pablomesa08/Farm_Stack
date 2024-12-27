import "./ListTodoLists.css";
import { useRef } from "react";
import { BiSolidTrash } from "react-icons/bi";

function ListToDoLists({
    listSummaries,
    handleSelectList,
    handleNewToDoList,
    handleDeleteToDoList,
}) {
    const labelref = useRef();

    if (listSummaries === null) {
        return <div className="LisToDoLists loading">Loading to-do lists...</div>
    } else if (listSummaries.length === 0) {
        return (
            <div className="ListToDoLists">
                <div className="box">
                    <label>
                        New To-Do List:&nbsp;
                        <input id={labelref} type="text"/>
                    </label>
                    <button
                        onClick={() =>
                            handleNewToDoList(document.getElementById(labelref).value)
                        }   
                    >
                        New
                    </button>
                </div>
                <p>There are no To-Do Lists!</p>
            </div>
        );
    } 
    return (
        <div className="ListToDoLists">
            <h1>All To-Do Lists</h1>
            <div className="box">
                <label>
                    New To-Do List:&nbsp;
                    <input id={labelref} type="text"/>
                </label>
                <button
                    onClick={()=>
                        handleNewToDoList(document.getElementById(labelref).value)
                    }       
                >
                    New
                </button>
            </div>
            {listSummaries.map((summary)=>{
                return (
                    <div
                        key={summary.id}
                        className="summary"
                        onClick={()=> handleSelectList(summary.id)}
                    >
                        <span className="name">{summary.name}</span>
                        <span className="count">({summary.item_count} items)</span>
                        <span className="flex"></span>
                        <span
                            className="trash"
                            onClick={(evt) =>{
                                evt.stopPropagation();
                                handleDeleteToDoList(summary.id);
                            }}
                        >
                            <BiSolidTrash/>
                        </span>
                    </div>
                );
            })
            }
        </div>
    );
}

export default ListToDoLists;