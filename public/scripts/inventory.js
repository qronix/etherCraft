import InventorySlot from './inventorySlot.js';
import itemMap from './itemMap.js';

export default class Inventory{
    constructor(numSlots){
        this.itemMap = new itemMap();
        var slotTargets = document.getElementsByClassName('inventorySlot');
        var slotAmtTargets = document.getElementsByClassName('slotItemAmt');
        this.inventorySlots = [];
        this.movingItem = false;
        this.movingFromSlot = -1;
        this.movingToSlot   = -1;

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
        this.inventorySlots[0].slot.setAmt(1000);
        this.slotListeners();
        this.update();
    }
    slotListeners(){
        for(let i=0; i<this.inventorySlots.length; i++){
            let target = this.inventorySlots[i];
            target.docSlotTarget.addEventListener('mousedown',(event)=>{
                console.log(`Mouse down on slot: ${target.slot.getSlotId()}`);
                if(!this.movingItem){
                    this.movingItem = true;
                    this.movingFromSlot = target.slot.getSlotId();
                }
            });
            target.docSlotTarget.addEventListener('mouseup',(event)=>{
                console.log(`Mouse up on slot: ${target.slot.getSlotId()}`);
                if(this.movingItem){
                    this.movingToSlot = target.getSlotId();
                    this.moveItem()
                }
            });
        }
    }
    moveItem(){
        let target = this.inventorySlots;
        
        if(this.movingFromSlot != -1 && this.movingToSlot != -1 && this.movingFromSlot !== this.movingToSlot){

        }
    }
    update(){
       for(let i = 0; i<this.inventorySlots.length; i++){
           let targetSlot = this.inventorySlots[i];
           let amt = targetSlot.slot.getAmt();


           if(amt>0){
            targetSlot.slotAmtTarget.textContent = amt;
           }
           let itemId = targetSlot.slot.getItemId();
           let imgPath = this.itemMap.getImgPathOfId(itemId);
           let imgDir  = "img";
           targetSlot.docSlotTarget.style.background = `url('${imgDir}/${imgPath}')`;
           targetSlot.docSlotTarget.style.backgroundSize = "cover";
       }
    }
}