import { StockItem } from './StockItem'

type constructorType = {
    stockItem: StockItem;
    saleQty: number;
}

export class Sale {
    stockItem: StockItem;
    saleQty: number;
    
    constructor(args: constructorType) {
        this.stockItem = args.stockItem;
        this.saleQty = args.saleQty;
    }

    calculateSellPrice () {
        return this.stockItem.price * this.saleQty
    }

    updateQuantity () {
        return this.stockItem.quantity -= this.saleQty
    }

    updateExpiryDate (expiryDate: string) {
        return this.stockItem.expiryDate = expiryDate 
    }

    getSaleDetail () {
        return {
            item: {
                ...this.stockItem
            },
            saleQty: this.saleQty,
            total: this.calculateSellPrice()
        }
    }
}