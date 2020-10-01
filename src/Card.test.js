import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Card from './Card'

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div)
})

it('renders the UI as expected', ()=> {
    const tree = renderer
        .create(<Card id= 'a' title= 'First card' content= 'lorem ipsum'/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})