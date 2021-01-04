import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  constructor(){
    super()
    this.state = {
      edit: false,
      loc: ""
    }
  }
  checkItem = () => {
    const {item,store} = this.props
    store.checkItem(item.name)
  }
  editItem = () => {
    const {item,store} = this.props
    store.editItem(item.name,this.state.loc)
  }
  openEdit = () => {
    this.setState({edit: !this.state.edit})
  }
  editInputs= e =>{
    const {name,value} = e.target
    this.setState({[name]: value})

  }
  deleteItem = () => {
    const {item,store} = this.props

    store.deleteItem(item.name)
  }
  render() {
    const {item} = this.props
    return (
      <div className="">
        {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */}
        <input type="checkbox" onClick={this.checkItem} value={item.name}/> 
        <span className={item.completed ? "crossed" : ""}>{item.name} - {item.location}</span>
        <div></div>
        {this.state.edit ? 
        <div>
          <input name="loc" placeholder="Location" onChange={this.editInputs}></input> 
          <button onClick={this.editItem}>finish</button>
        </div>
        : null}
        <button onClick={this.openEdit} className="editButton">Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>)
  }
}

export default observer(Item)