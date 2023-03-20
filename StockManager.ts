import { StockItem } from "./StockItem"

type constructorType = {
    items: StockItem[];
    strategy: 'FIFO' | 'FEFO' | 'LIFO';
}

export class StockManager {
    items: StockItem[];
    strategy: 'FIFO' | 'FEFO' | 'LIFO';

    constructor(args: constructorType) {
        this.items = args.items
        this.strategy = args.strategy
    }

    addStockItem (item: StockItem) {
        this.items.push(item)
    }

    removeStockItem (item: StockItem) {
        this.items = this.items.filter(v => v.name !== item.name)
    }

    calculateQuantity (items: StockItem[]) {
        let qty = 0

        for (const item of items) {
            qty += item.quantity
        }

        return qty
    }

    saleStrategy () {
        switch (this.strategy) {
            case 'FIFO': {
                return this.items.sort((a: any, b: any) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime())
            }

            case 'FEFO': {
                return this.items.sort((a: any, b: any) => new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime())
            }

            case 'LIFO': {
                return this.items.sort((a, b) => b.id - a.id)
            }
        }
    }
}