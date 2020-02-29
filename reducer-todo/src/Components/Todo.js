import React from 'react'
import './Todo.css';

export default function Todo(props) {
    return (
        <div>
            <p> {props.item.item}</p>
        </div>
    )
}
