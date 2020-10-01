import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE';

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends Component {
  state = {
     ...STORE
  };

  handleDeleteItem = (cardId) => {
    console.log(cardId)
    const { lists, allCards } = this.state
    const newList = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }))
    const newCards = omit(allCards, cardId)
    console.log('Card to Delete =', newCards)
    
    this.setState({
      lists: newList,
      allCards: newCards
    })


  }



  handleAddItem = (listId) => {
    const newCard = newRandomCard()
    console.log('add item called')
    const newLists = this.state.lists.map(list => {
      if(list.id === listId){
        return{
        ...list,
        cardIds: [...list.cardIds, newCard.id]
        }
      }
      return list
    })

    this.setState({
      lists : newLists,
      allCards: {
        ...this.state.allCards,
        [newCard.id]: newCard
      }
    })

  }

  render() {

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onDeleteItem={this.handleDeleteItem}
              onAddItem={this.handleAddItem}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
