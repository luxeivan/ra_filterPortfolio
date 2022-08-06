import React from 'react'
import './Projectlist.css'

export default function Projectlist(props) {
    const { projects } = props
    return (
        <ul className='project__list'>
            {projects.map((item, index) => <li className='project__item' key={index}><img className='project__img' src={item.img} /></li>)}
        </ul>
    )
}