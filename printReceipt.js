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


function itemWithWeight(item){
    let itemWithWeight = []
    item.map(barcode => barcode.includes('-') ? itemWithWeight.push({'barcode': barcode.slice(0, barcode.indexOf('-')), 'weight': Number(barcode.slice(barcode.indexOf('-')+1, barcode.length))}) : itemWithWeight.push({'barcode': barcode, 'weight': 1}))

    return itemWithWeight
}



function loadItemsDetail(groupedItem){

    let allItems = loadAllItems()
    for (let item = 0; item < allItems.length; item ++){
        if(allItems[item].barcode == groupedItem.barcode){
            return {'Name': allItems[item].name, 'Quantity': groupedItem.weight, 'Unit price': allItems[item].price, 'Subtotal': allItems[item].price * groupedItem.weight}
        }
    }
}

module.exports = {
    itemWithWeight,
    loadItemsDetail
    //groupItem
};