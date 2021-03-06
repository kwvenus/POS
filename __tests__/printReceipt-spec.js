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
    'Name': 'Sprite', 'Quantity': 5, 'unitPrice': 3.00, 'Subtotal': 15.00
};

const detailItemList = [
    {"Name": 'Sprite', "Quantity": 5, "unitPrice": 3.00, "Subtotal": 15.00},
    {"Name": 'Litchi', "Quantity": 2, "unitPrice": 15.00, "Subtotal": 30.00},
    {"Name": 'Noodles', "Quantity": 3, "unitPrice": 4.50, "Subtotal": 13.50}
];

const detailItemWithPromotion = {
    'Name': 'Sprite', 'Quantity': 5, 'unitPrice': 3.00, 'Subtotal': 12.00, 'Saving': 3.00
};

const detailItemListWithPromotion = [
    {"Name": 'Sprite', "Quantity": 5, "unitPrice": 3.00, "Subtotal": 12.00, "Saving": 3.00},
    {"Name": 'Litchi', "Quantity": 2, "unitPrice": 15.00, "Subtotal": 30.00, "Saving": 0.00},
    {"Name": 'Noodles', "Quantity": 3, "unitPrice": 4.50, "Subtotal": 9.00, "Saving": 4.50}
];

const receipt = "*** <store earning no money>Receipt ***\n" +
                "Name: Sprite, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 12.00 (yuan)\n" +
                "Name: Litchi, Quantity: 2 kg, Unit price: 15.00 (yuan), Subtotal: 30.00 (yuan)\n" +
                "Name: Noodles, Quantity: 3 bags, Unit price: 4.50 (yuan), Subtotal: 9.00 (yuan)\n"
                /*"----------------------\n" +
                "Total: 21.00 (yuan)\n" +
                "Saving: 4.00 (yuan)\n" +
                "**********************\n"*/


const total = 51.00
const saving = 7.50

it ('Given item list, when itemWithWeight, then return itemWithWeight[{"barcode": String, "weight": int}]', function(){
    expect(printReceipt.itemWithWeight(item)).toEqual(itemListWithWeight);
});


it ('Given itemListWithWeight, when groupItem, then return groupedItem[{"barcode": String, "quantity": int}]', function(){
    expect(printReceipt.groupItem(itemListWithWeight)).toEqual(groupedItem);
});


it ('Given one of the object in groupedItem, when loadItemsDetail, then return detailItemWithPromotion{"Name": String, "Quantity": int, "unitPrice": double, "Subtotal": double}', function(){
    expect(printReceipt.loadItemsDetail(groupedItem[0])).toEqual(detailItem)
});

it ('Given one of the object in detailItemList, when loadPromotionsDetail, then return detailItemWithPromotion{"Name": String, "Quantity": int, "unitPrice": double, "Subtotal": double, "Saving": double}', function (){
    expect(printReceipt.loadPromotionsDetail(detailItemList[0])).toEqual(detailItemWithPromotion)
});

it ('Given groupedItem, when loadAllDetailFromList, then return detailItemListWithPromotion[detailItemWithPromotion{"Name": String, "Quantity": int, "unitPrice": double, "Subtotal": double, "Saving": double}]', function (){
    expect(printReceipt.loadAllDetailFromList(groupedItem)).toEqual(detailItemListWithPromotion)
});

it ('Given detailItemListWithPromotion, when calculateTotal, then return total:int', function(){
    expect(printReceipt.calculateTotal(detailItemListWithPromotion)).toEqual(total)
});

it ('Given detailItemListWithPromotion, when calculateSaving, then return saving:int', function(){
    expect(printReceipt.calculateSaving(detailItemListWithPromotion)).toEqual(saving)
});

it ('Given detailItemListWithPromotion, when prepareReceiptFormat, then return receipt:String', function(){
    expect(printReceipt.prepareReceiptFormat(detailItemListWithPromotion)).toEqual(receipt)
});