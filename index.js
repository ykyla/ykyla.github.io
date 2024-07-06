document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { label: 'MIO i125', price: 78000.00, qtyElement: document.getElementById('qty1') },
        { label: 'NMAX ABS', price: 151900.00, qtyElement: document.getElementById('qty2') },
        { label: 'RAIDER R150', price: 106900.00, qtyElement: document.getElementById('qty3') },
        { label: 'SMASH', price: 60200.00, qtyElement: document.getElementById('qty4') },
        { label: 'SNIPER 155R', price: 127700.00, qtyElement: document.getElementById('qty5') },
        { label: 'XMAX', price: 306000.00, qtyElement: document.getElementById('qty6') },
    ];

    const carts = document.getElementById("carts");
    const total = document.getElementById("total");
    const cash = document.getElementById("cash");
    const change = document.getElementById("change");

    function addOrder() {
        carts.textContent = "";
        let totalPrice = 0;

        products.forEach(product => {
            const qty = parseFloat(product.qtyElement.value);
            if (qty > 0) {
                const order = ${qty} pc/s x ${product.price}------${product.label}------ Php${(qty * product.price).toFixed(2)}\n;
                carts.textContent += order;
                totalPrice += qty * product.price;
            }
        });

        total.value = '₱ ' + totalPrice.toFixed(2);
    }

    function calculateChange() {
        const totalPrice = parseFloat(total.value.replace('₱ ', ''));
        const cashTendered = parseFloat(cash.value);
        if (!isNaN(totalPrice) && !isNaN(cashTendered) && cashTendered >= totalPrice) {
            const changeAmount = cashTendered - totalPrice;
            change.value = '₱ ' + changeAmount.toFixed(2);
        } else {
            change.value = '';
        }
    }

    products.forEach(product => {
        product.qtyElement.addEventListener("keyup", addOrder);
        product.qtyElement.addEventListener("change", addOrder);
    });
total.value = "Total: Php " + sum.toFixed(2);
    
    if (parseFloat(cash.value) > 0) {
        var cashTendered = parseFloat(cash.value);
        var changeAmount = cashTendered - sum;
        change.value = "Change: Php " + changeAmount.toFixed(2);
    }

    cash.addEventListener("keyup", calculateChange);
    cash.addEventListener("change", calculateChange);
});
