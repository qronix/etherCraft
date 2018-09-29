import InventorySlot from './inventorySlot.js';
import itemMap from './itemMap.js';

export default class Inventory{
    constructor(numSlots){
        this.itemMap = new itemMap();
        var slotTargets = document.getElementsByClassName('inventorySlot');
        var slotAmtTargets = document.getElementsByClassName('slotItemAmt');
        this.inventorySlots = [];
        for(let i=0; i<numSlots; i++){
            let tempSlot = new InventorySlot(i,this.itemMap.itemMap['empty']);
            let tempSlotObject = {
                'slot':tempSlot,
                'docSlotTarget': slotTargets[i],
                'slotAmtTarget': slotAmtTargets[i]
            }
            this.inventorySlots.push(tempSlotObject);
        }
        this.init();
    }
    init(){
        console.log('setting up inv!');
        this.inventorySlots[0].slot.setItemId(1);
        this.update();
    }

    update(){
       for(let i = 0; i<this.inventorySlots.length; i++){
           let targetSlot = this.inventorySlots[i];
           let amt = targetSlot.slot.getAmt();


           if(amt>0){
            targetSlot.slotAmtTarget.textContent = amt;
           }
           let itemId = targetSlot.slot.getItemId();
           console.log(`itemId: ${itemId}`);
           let imgPath = this.itemMap.getImgPathOfId(itemId);
           console.log(`imgPath: ${imgPath}`);
           let imgDir  = "img";
           targetSlot.docSlotTarget.style.background = `url('${imgDir}/${imgPath}')`;
           targetSlot.docSlotTarget.style.backgroundSize = "cover";
       }
    }
}