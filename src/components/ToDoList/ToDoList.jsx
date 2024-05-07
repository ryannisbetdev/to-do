import './ToDoList.scss'

export default function ToDoList({items, onDone, onRemove, onClearCompleted}) {
    return (
        <div className="todo__container">
            <ul className="todo">
                {
                    items.map(item => (
                        <li key={item.id} className={`todo__item ${item.done ? "item__checked" : ""}`}> 
                            <input type="checkbox" className="item__checkbox" checked={item.done} onChange={()=>onDone(item.id)}/>
                            <p className="item__name">{item.item}</p>
                            <button className="item__close material-symbols-outlined" onClick={()=>onRemove(item.id)}>close</button>
                        </li>
                    ))
                }
            </ul>

            <div className="item__actions">
                <span className="item__count">
                {
                    items.filter(item => item.done === false).length ?
                    `${items.filter(item => item.done === false).length} items left` :
                    "All items completed!"
                }
                </span>

                <button className="item__clear" onClick={onClearCompleted}>
                    Clear Completed
                </button>
            </div>
        </div>
    )
}