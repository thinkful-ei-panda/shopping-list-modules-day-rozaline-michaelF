import item from './item.js';

function findById(id) {
  const foundItem = store.items.find(item => item.id === id);
  foundItem.checked = !foundItem.checked;
}

function addItem(name) {
  try {
    item.validateName(name);
    // create a new item if name is valid
    this.items.push(item.create(name));
    console.log(this.items);
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  const foundItem = store.items.find(item => item.id === id);
  foundItem.checked = !foundItem.checked;
}

function findAndUpdateName(itemId, newName) {
  try {
    item.validateName(newName);
    newName = this.findById(itemId);
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndDelete(id) {
  this.items.filter(item => item.id === id);
}

function toggleCheckedFilter() {
  store.hideCheckedItems = !store.hideCheckedItems;
}

const store = {
  items: [],
  hideCheckedItems: false
};

const {items, hideCheckedItems} = store;

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};

