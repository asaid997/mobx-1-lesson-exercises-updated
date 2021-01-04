/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        // your code here

        makeObservable(this,{
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action
        })

    }
    checkItem = (name) => {
        // your code here
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    addItem = (n) => {
        this.list.push(new Item(n))
    }
    editItem = (itemName, newLocation) => {
        let item = this.list.find(i => i.name === itemName)
        item.location = newLocation
    }
    deleteItem = itemName => {
        const i = this.list.findIndex(i => i.name === itemName)
        this.list.splice(i,1)
    }
}

