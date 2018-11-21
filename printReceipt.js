function loadAllItems() {
  return [
    {
      barcode: 'ITEM000000',
      name: 'Coca-Cola',
      unit: 'bottle',
      price: 3.00
    },
    {
      barcode: 'ITEM000001',
      name: 'Sprite',
      unit: 'bottle',
      price: 3.00
    },
    {
      barcode: 'ITEM000002',
      name: 'Apple',
      unit: 'kg',
      price: 5.50
    },
    {
      barcode: 'ITEM000003',
      name: 'Litchi',
      unit: 'kg',
      price: 15.00
    },
    {
      barcode: 'ITEM000004',
      name: 'Battery',
      unit: 'box',
      price: 2.00
    },
    {
      barcode: 'ITEM000005',
      name: 'Noodles',
      unit: 'bag',
      price: 4.50
    }
  ];
}

function loadPromotions() {
  return [
    {
      type: 'BUY_TWO_GET_ONE_FREE',
      barcodes: [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]
    }
  ];
}

function itemWithWeight(item){
    let itemWithWeight = []
    item.map(barcode => barcode.includes('-') ? itemWithWeight.push({'barcode': barcode.slice(0, barcode.indexOf('-')), 'weight': Number(barcode.slice(barcode.indexOf('-')+1, barcode.length))}) : itemWithWeight.push({'barcode': barcode, 'weight': 1}))

    return itemWithWeight
}




function loadItemsDetail(groupedItem){

    let allItems = loadAllItems()
    for (let item = 0; item < allItems.length; item ++){
        if(allItems[item].barcode == groupedItem.barcode){
            return {'Name': allItems[item].name, 'Quantity': groupedItem.weight, 'unitPrice': allItems[item].price, 'Subtotal': allItems[item].price * groupedItem.weight}
        }
    }
}

function loadPromotionsDetail(detailItem){
    let promotion = loadPromotions()
    let promotionType, promotionBarcode
    let itemList = loadAllItems()
    let detailItemBarcode

    itemList.map(item => item.name == detailItem.Name ? detailItemBarcode = item.barcode:false)


    for (let i = 0; i < promotion.length; i++){
        promotionType = promotion[i].type
        promotionBarcode = promotion[i].barcodes
        if (promotionType == 'BUY_TWO_GET_ONE_FREE'){
            for (let mapBarcode = 0; mapBarcode < promotionBarcode.length ; mapBarcode++){
                if (detailItemBarcode == promotionBarcode[mapBarcode]){
                     let calculateSaving = ((detailItem.Quantity%2)* detailItem.unitPrice)
                     detailItem.Subtotal = detailItem.Subtotal - calculateSaving
                     detailItem.Saving = calculateSaving
                }
            }
        }
    }
    return detailItem
}

module.exports = {
    itemWithWeight,
    loadItemsDetail,
    loadPromotionsDetail

};