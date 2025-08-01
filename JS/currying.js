function tax(rate) {
    return (amt) => {
        let taxedAmt = amt + amt * rate
        return (dis) => {
            return taxedAmt - dis
        }
    }
}

let cgst = tax(0.12);
let totalAmt = cgst(100)
let amountToPay = totalAmt(10)
console.log(amountToPay)