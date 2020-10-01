import React from 'react'
import ReactDOM, { render } from 'react-dom'
import renderer from 'react-test-renderer'
//import 'react-dom/lib/ReactTestUtils'

import List from './List'
import Card from './Card'

it('renders without crashing', ()=>{
    //const card =           <Card key={card.id} title={card.title} content={card.content} />
    const div = document.createElement('div');
    ReactDOM.render(<List key= '1' header= 'First list' cards= {[{ id: 'a', title: 'First card', content: 'lorem ipsum'},{ id: 'b', title: 'Second card', content: 'lorem ipsum' }]}/>, div);
    ReactDOM.unmountComponentAtNode(div)
})
/*
'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' }
*/
it('renders the UI as expected', ()=> {
    const tree = renderer
        .create(<List key= '1' header= 'First list' cards= {[{ id: 'a', title: 'First card', content: 'lorem ipsum'}]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
