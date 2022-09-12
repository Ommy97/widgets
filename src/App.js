import React, { useState } from 'react';
import Accordion from './components/Accordian';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';



const items= [
    {
        title:'what is react?',
        content:'React is a front end framework',
    },
    {
        title:'why use react?',
        content:'is a favorite js library among engeniers',
    },
    {
        title:'how do you use React',
        content:'you use react by creating components',
    },
]

const options = [
    {
        label: ' The color Red',
        value: 'red'
    },
    {
        label: ' The color Green',
        value: 'green'
    },
    {
        label: ' A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected]= useState(options[0])
    // const[showDropdown, setShowDropdown]= useState(true)
    return(
       <div>
        <Header />
        <Route path="/">
         <Accordion items={items}/>
        </Route>
        <Route path="/list">
         <Search/>
        </Route>
        <Route path="/dropdown">
         <Dropdown
         label = 'select a color'
         options = {options}
         selected={selected}
         onSelectedChange={setSelected}/>
        </Route>
        <Route path="/translate">
         <Translate />
        </Route>
       </div>
    )
}