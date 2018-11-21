const printReceipt = require('../printReceipt');

const item = [
               'ITEM000001',
               'ITEM000001',
               'ITEM000001',
               'ITEM000001',
               'ITEM000001',
               'ITEM000003-2',
               'ITEM000005',
               'ITEM000005',
               'ITEM000005'
             ];

const itemListWithWeight = [
    {'barcode': 'ITEM000001', 'weight': 1},
    {'barcode': 'ITEM000001', 'weight': 1},
    {'barcode': 'ITEM000001', 'weight': 1},
    {'barcode': 'ITEM000001', 'weight': 1},
    {'barcode': 'ITEM000001', 'weight': 1},
    {'barcode': 'ITEM000003', 'weight': 2},
    {'barcode': 'ITEM000005', 'weight': 1},
    {'barcode': 'ITEM000005', 'weight': 1},
    {'barcode': 'ITEM000005', 'weight': 1}
];

const groupedItem = [
    {'barcode': 'ITEM000001', 'weight': 5},
    {'barcode': 'ITEM000003', 'weight': 2},
    {'barcode': 'ITEM000005', 'weight': 3}
];

const detailItem = {
    'Name': 'Sprite', 'Quantity': 5, 'Unit price': 3.00, 'Subtotal': 15.00
};



it ('Given item list, when itemWithWeight, then return itemWithWeight[{"barcode": String, "weight": int}]', function(){
    expect(printReceipt.itemWithWeight(item)).toEqual(itemListWithWeight);
});


it ('Given one of the object in groupedItem, when loadItemsDetail, then return detailItemWithPromotion{"Name": String, "Quantity": int, "Unit price": double, "Subtotal": double}', function(){
    expect(printReceipt.loadItemsDetail(groupedItem[0])).toEqual(detailItem)
});
