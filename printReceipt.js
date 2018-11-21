function itemWithWeight(item){
    let itemWithWeight = []
    item.map(barcode => barcode.includes('-') ? itemWithWeight.push({'barcode': barcode.slice(0, barcode.indexOf('-')), 'weight': Number(barcode.slice(barcode.indexOf('-')+1, barcode.length))}) : itemWithWeight.push({'barcode': barcode, 'weight': 1}))

    return itemWithWeight
}

module.exports = {
    itemWithWeight
};