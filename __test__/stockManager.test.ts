import { StockManager } from "../StockManager";
import { Dairy, Meat, Produce } from "../StockItem";

import { dairyMock, meatMock, produceMock } from "../mocks/StockItem"

test("success add stock manager", () => {
    const item = new Dairy(dairyMock)
    
    const stockManager = new StockManager({ items: [], strategy: 'FIFO' })
    stockManager.addStockItem(item)

    for (const data of stockManager.items) {
        expect(data.name).toBe(item.name)
        expect(data.quantity).toBe(item.quantity)
        expect(data.expiryDate).toBe(item.expiryDate)
    }
    expect(stockManager.strategy).toBe('FIFO')
})

test("correct calculate quantity stock manager", () => {
    const dairy = new Dairy(dairyMock)
    const meat = new Meat(meatMock)
    const produce = new Produce(produceMock)

    const items = [ dairy, meat, produce ]
    const stockManager = new StockManager({ items, strategy: 'FEFO' })
    const qty = stockManager.calculateQuantity(items)

    expect(qty).toBe(23)
    expect(stockManager.strategy).toBe('FEFO')
})

test("success remove stock manager", () => {
    const dairy = new Dairy(dairyMock)
    const meat = new Meat(meatMock)

    const items = [ dairy, meat ]
    const stockManager = new StockManager({ items, strategy: 'FEFO' })
    stockManager.removeStockItem(meat)

    for (const data of stockManager.items) {
        expect(data.name).toBe(dairy.name)
        expect(data.quantity).toBe(dairy.quantity)
        expect(data.expiryDate).toBe(dairy.expiryDate)
    }
    expect(stockManager.strategy).toBe('FEFO')
})

// for test case sale strategy.
// will be sort.
// index 0 mean first sale

test("success sale strategy FIFO", () => {
    const dairy = new Dairy(dairyMock)
    const meat = new Meat(meatMock)
    const produce = new Produce(produceMock)

    const items = [ dairy, meat, produce ]
    const stockManager = new StockManager({ items, strategy: 'FIFO' })

    const strategy = stockManager.saleStrategy();

    const listExpectedFIFO = [ meatMock, dairyMock, produceMock ]

    expect(stockManager.strategy).toBe('FIFO')
    for (let i = 0; i < strategy.length; i++) {
        const item = strategy[i]

        expect(item.id).toBe(listExpectedFIFO[i].id)
        expect(item.name).toBe(listExpectedFIFO[i].name)
        expect(item.quantity).toBe(listExpectedFIFO[i].quantity)
        expect(item.expiryDate).toBe(listExpectedFIFO[i].expiryDate)
        expect(item.price).toBe(listExpectedFIFO[i].price)
    }
})

test("success sale strategy LIFO", () => {
    const dairy = new Dairy(dairyMock)
    const meat = new Meat(meatMock)
    const produce = new Produce(produceMock)

    const items = [ dairy, meat, produce ]
    const stockManager = new StockManager({ items, strategy: 'LIFO' })

    const strategy = stockManager.saleStrategy();

    const listExpectedLIFO = [ produceMock, meatMock, dairyMock ]

    expect(stockManager.strategy).toBe('LIFO')
    for (let i = 0; i < strategy.length; i++) {
        const item = strategy[i]

        expect(item.id).toBe(listExpectedLIFO[i].id)
        expect(item.name).toBe(listExpectedLIFO[i].name)
        expect(item.quantity).toBe(listExpectedLIFO[i].quantity)
        expect(item.expiryDate).toBe(listExpectedLIFO[i].expiryDate)
        expect(item.price).toBe(listExpectedLIFO[i].price)
    }
})

test("success sale strategy FEFO", () => {
    const dairy = new Dairy(dairyMock)
    const meat = new Meat(meatMock)
    const produce = new Produce(produceMock)

    const items = [ dairy, meat, produce ]
    const stockManager = new StockManager({ items, strategy: 'FEFO' })

    const strategy = stockManager.saleStrategy();

    const listExpectedFEFO = [ produceMock, dairyMock, meatMock ]

    expect(stockManager.strategy).toBe('FEFO')
    for (let i = 0; i < strategy.length; i++) {
        const item = strategy[i]

        expect(item.id).toBe(listExpectedFEFO[i].id)
        expect(item.name).toBe(listExpectedFEFO[i].name)
        expect(item.quantity).toBe(listExpectedFEFO[i].quantity)
        expect(item.expiryDate).toBe(listExpectedFEFO[i].expiryDate)
        expect(item.price).toBe(listExpectedFEFO[i].price)
    }
})
