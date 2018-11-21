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

/*function groupItem(itemListWithWeight){

    let groupedItem = []
    let filterItem = []



        console.log(itemListWithWeight.length)

    for (let outerIteration = 0; outerIteration < itemListWithWeight.length; outerIteration++){
        let itemBarcode
        let itemValue = 0
        if (!filterItem.includes(itemListWithWeight[outerIteration].barcode)){
                    itemBarcode = itemListWithWeight[outerIteration].barcode
                    console.log(itemBarcode)
                    itemValue = itemListWithWeight[outerIteration].weight
                    console.log(itemValue)
                    for (let innerIteration = outerIteration; innerIteration < itemListWithWeight.length; innerIteration++){
                        if (itemListWithWeight[innerIteration].barcode == itemBarcode)
                            itemValue += 1
                        else if (itemListWithWeight.length-1 == innerIteration){
                            groupedItem.push({"barcode": itemBarcode, "weight": itemValue})
                            filterItem.push(itemListWithWeight[innerIteration].barcode)
                        }
                    }
        }
    }
    console.log(groupedItem)
    console.log(filterItem)




    itemListWithWeight.map(item => groupedItem.map(countedItem => countedItem.barcode == item.barcode ? countedItem.weight += 1 : groupedItem.push(item)))

    return itemListWithWeight
}*/


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
    let calculateSaving = 0
    detailItem.Saving = calculateSaving

    itemList.map(item => item.name == detailItem.Name ? detailItemBarcode = item.barcode:false)


    for (let i = 0; i < promotion.length; i++){
        promotionType = promotion[i].type
        promotionBarcode = promotion[i].barcodes
        if (promotionType == 'BUY_TWO_GET_ONE_FREE'){
            for (let mapBarcode = 0; mapBarcode < promotionBarcode.length ; mapBarcode++){
                if (detailItemBarcode == promotionBarcode[mapBarcode]){
                     calculateSaving = ((detailItem.Quantity%2)* detailItem.unitPrice)
                     detailItem.Subtotal = detailItem.Subtotal - calculateSaving
                     detailItem.Saving = calculateSaving
                }
            }
        }
    }
    return detailItem
}

function loadAllDetailFromList(groupedItem){
    let detailItemList = []
    let detailItemListWithPromotion = []

    for (let item = 0; item < groupedItem.length; item++){
        detailItemList.push(loadItemsDetail(groupedItem[item]))
    }

    detailItemList.forEach(function(item){
        detailItemListWithPromotion.push(loadPromotionsDetail(item))
    });
    return detailItemListWithPromotion
}


module.exports = {
    itemWithWeight,
    loadItemsDetail,
    loadPromotionsDetail,
    loadAllDetailFromList
};