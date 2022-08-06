import { React, useState } from 'react'
import portfolioList from '../models/portfolio'
import Projectlist from './Projectlist'
import Toolbar from './Toolbar'

export default function Portfolio() {
    const [projects, setProjects] = useState(portfolioList)
    const filters = ["All", "Websites", "Flayers", "Business Cards"]
    const [activeFilter, setActiveFilter] = useState('All')

    const onSelectFilter = (filter) => {
        setActiveFilter(filter);
        if(filter==='All'){
            setProjects(portfolioList)
        }else{
            setProjects(portfolioList.filter(item =>
                item.category === filter
            ))
        }
        
    }

    return (
        <div>
            <Toolbar
                filters={filters}
                selected={activeFilter}
                onSelectFilter={onSelectFilter} />

            <Projectlist projects={projects} />
        </div>
    )
}