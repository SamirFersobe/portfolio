import React from 'react'
import NavBar from '../components/NavBar'
import LeftScrollBar from '../components/LeftScrollBar'
import ExpandableCard from '../components/ExpandableCard'
import {data} from '../components/Data'

export default function projects() {
    return (
        <div className =" h-full">
            
            <NavBar></NavBar>
            
            <div className = 'h-full bg-blue-200 w-auto flex flex-col justify-left relative pl-64 pr-20 '>
            {data.map((item,index) =>{
                return (
                <ExpandableCard projectName = {item.name}> </ExpandableCard>
                )
            })}
            <LeftScrollBar></LeftScrollBar>
            </div>
        </div>
    )
}
