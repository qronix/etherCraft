export default class ItemMap{
    constructor(){
        this.itemMap = {
            'empty':0,
            'iron_ore':1,
            'wood':2
        }
        this.itemImgMap = new Map();
        this.itemImgMap.set('empty','');
        this.itemImgMap.set('iron_ore','iron_ore.png');
        this.itemImgMap.set('wood','wood.png');
    }
    getImgPathOfId(id){
        let itemName = Object.keys(this.itemMap).find(key=>this.itemMap[key] === id);
        let imgPath  = this.itemImgMap.get(itemName);
        return imgPath;
    }
}