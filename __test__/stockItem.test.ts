import { StockItem, Dairy, Meat, Produce } from '../StockItem'
import { stockItemMock, dairyMock, meatMock, produceMock } from '../mocks/StockItem'

test("stock item has name, quantity, expiry date property", () => {
    const stockItem = new StockItem(stockItemMock);

    expect(stockItem.name).toBe(stockItemMock.name)
    expect(stockItem.quantity).toBe(stockItemMock.quantity)
    expect(stockItem.expiryDate).toBe(stockItemMock.expiryDate)
})

test("dairy has name, quantity, expiry date property", () => {
    const dairy = new Dairy(dairyMock);

    expect(dairy.name).toBe(dairyMock.name)
    expect(dairy.quantity).toBe(dairyMock.quantity)
    expect(dairy.expiryDate).toBe(dairyMock.expiryDate)
})

test("meat has name, quantity, expiry date property", () => {
    const meat = new Meat(meatMock);

    expect(meat.name).toBe(meatMock.name)
    expect(meat.quantity).toBe(meatMock.quantity)
    expect(meat.expiryDate).toBe(meatMock.expiryDate)
})

test("produce has name, quantity, expiry date property", () => {
    const produce = new Produce(produceMock);

    expect(produce.name).toBe(produceMock.name)
    expect(produce.quantity).toBe(produceMock.quantity)
    expect(produce.expiryDate).toBe(produceMock.expiryDate)
})
