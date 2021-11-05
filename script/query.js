// select *  from customers where _id = 'cust01'
db.customers.find({
    _id: "cust01"
});

// select * from customers where name = 'Khalid bin Walid'
db.customers.find({
    name: "Khalid bin Walid"
});

// select * from products where price = 2000
db.products.find({
    price: 2000
});

// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});
