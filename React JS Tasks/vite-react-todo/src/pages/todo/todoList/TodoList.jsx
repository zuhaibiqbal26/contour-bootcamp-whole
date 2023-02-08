import React from 'react'
import Item from './item/Item'

export default function TodoList({tasks, handleClick}) {
    return(
        <div>
            {
                tasks.map(item => <Item onClick={() => handleClick(item.id)} key={item.id} id={item.id} title={item.title} status={item.status} />)
            }
        </div>
    )
}