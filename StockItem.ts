type constructorType = {
    id: number;
    name: string;
    quantity: number;
    expiryDate: string;
    price: number;
}

export class StockItem {
    id: number;
    name: string;
    quantity: number;
    expiryDate: string;
    price: number;

    constructor(args: constructorType) {
        this.id = args.id
        this.name = args.name
        this.quantity = args.quantity
        this.expiryDate = args.expiryDate
        this.price = args.price
    }
}

export class Dairy extends StockItem {
    constructor(args: constructorType) {
        super({ name: args.name, quantity: args.quantity, expiryDate: args.expiryDate, price: args.price, id: args.id });
    }
}

export class Meat extends StockItem {
    constructor(args: constructorType) {
        super({ name: args.name, quantity: args.quantity, expiryDate: args.expiryDate, price: args.price, id: args.id });
    }
}

export class Produce extends StockItem {
    constructor(args: constructorType) {
        super({ name: args.name, quantity: args.quantity, expiryDate: args.expiryDate, price: args.price, id: args.id });
    }
}
