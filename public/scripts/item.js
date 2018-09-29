export default class Item{
    constructor(itemId){
        this.itemId = itemId;
    }
    setId(id){
        this.itemId = id;
    }
    getId(){
        return this.itemId;
    }
}

// module.exports = {
//     Item
// }