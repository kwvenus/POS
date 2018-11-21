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


it ('Given item list, when itemWithWeight, then return itemWithWeight[{"barcode": String, "weight": int}]', function(){
    expect(printReceipt.itemWithWeight(item)).toEqual(itemListWithWeight);
});
