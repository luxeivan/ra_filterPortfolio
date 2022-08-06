import React from 'react'
import './Toolbar.css'

export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props
    return (
        <ul className='filter__list'>
            {filters.map((item, index) => <li className='filter__item' key={index}><button onClick={event=>onSelectFilter(event.currentTarget.innerText)} className={item === selected ? 'filter__button active' : 'filter__button'}>{item}</button></li>)}
        </ul>
    )
}