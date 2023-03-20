import { Sale } from "../Sale";
import { StockManager } from "../StockManager";
import { Dairy, Meat, Produce } from "../StockItem";

import { dairyMock, meatMock, produceMock } from "../mocks/StockItem"

test("correct calculate sell price", () => {
    const meat = new Meat(meatMock)

    const sale = new Sale({ stockItem: meat, saleQty: 10 })
    const totalPrice = sale.calculateSellPrice()

    expect(totalPrice).toBe(300000)
})

test("correct update quantity", () => {
    // mock quantity = 7
    // sales qty = 5
    // latest quantity after sale = 2
    const meat = new Meat(meatMock)

    const sale = new Sale({ stockItem: meat, saleQty: 5 })
    sale.updateQuantity()

    expect(sale.stockItem.quantity).toBe(2)
})

test("correct update quantity", () => {
    // existing expiry date base on meatmock = 2023-07-12
    // update expiry date = 2023-05-09
    const meat = new Meat(meatMock)

    const sale = new Sale({ stockItem: meat, saleQty: 5 })
    sale.updateExpiryDate('2023-05-09')

    expect(sale.stockItem.expiryDate).toBe("2023-05-09")
})

test("correct get sale detail", () => {
    const meat = new Meat(meatMock)

    const sale = new Sale({ stockItem: meat, saleQty: 5 })
    const detail = sale.getSaleDetail()

    expect(detail.item).toStrictEqual(meatMock)
    expect(detail.saleQty).toBe(5)
    expect(detail.total).toBe(150000)
})
