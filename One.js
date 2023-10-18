const prices = [10, 20, 80];

const discount = 50;

const one = (prices, discount) => {
    let total = 0;

    const mostExpensive = Math.max(...prices);

    for (const price of prices) {
        if (price === mostExpensive) {
            const newPrice = price * (1 - (discount / 100));
            total += newPrice;
        } else {
            total += price;
        }
    }

    return total;
}