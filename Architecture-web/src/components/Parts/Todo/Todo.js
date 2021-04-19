import React from 'react'

export default function Todo({todo}) {
    return (
        <div>
            <lablel>
            <input type="checkbox" checked={todo.complete}/>
             {todo.name}
            </lablel>
            
        </div>
    )
}
