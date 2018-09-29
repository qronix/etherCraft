/*Item List
    0 - empty
    1 - iron ore
    2 - wood
*/


import Item from './item.js';
import Inventory from './inventory.js';

export default class InventorySlot{
    constructor(slotId,defaultId){
        this.slotId = slotId;
        this.item   = new Item(defaultId);
        this.itemQuantity = 0;
    }
    setAmt(amt){
        this.itemQuantity = amt;
    }
    getAmt(){
        return this.itemQuantity;
    }
    setItemId(id){
        this.item.setId(id);
    }
    getItemId(){
        return this.item.getId();
    }
     getSlotId(){
        return this.slotId;
    }
}

// module.exports = {
//     InventorySlot
// }