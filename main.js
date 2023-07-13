function PizzaCart() {
    return {
        open: false,
        showCart() {
            this.open = true;
        },
        total: 0,
        smallTotal: 0,
        mediumTotal: 0,
        largeTotal: 0,
        smallIncrement() {
            this.smallTotal += 49;
            this.total += 49;
        },
        smallDecrement() {
            if (this.smallTotal > 0) {
                this.smallTotal -= 49;
            }
            
            this.total = Math.max(0, this.total - 49);
        },
        mediumIncrement() {
            this.mediumTotal += 89;
            this.total += 89;
        },
        mediumDecrement() {
            if (this.mediumTotal > 0) {
                this.mediumTotal -= 89;
            }
            
            this.total = Math.max(0, this.total - 89);
        },
        largeIncrement() {
            this.largeTotal += 129;
            this.total += 129;
        },
        largeDecrement() {
            if (this.largeTotal > 0) {
                this.largeTotal -= 129;
            }
            
            this.total = Math.max(0, this.total - 129);
        },
        paymentShow: false,
        checkoutHide: true,
        checkout() {
            this.paymentShow = true;
            this.checkoutHide = false;
        },
        paymentAmount: "",
        paymentMsgShow: false,
        paymentMessage: "",
        pay() {
            if(Number(this.paymentAmount) >= this.total) {
                this.paymentMessage = "Enjoy your pizzas!";
                this.paymentMsgShow = true;
                this.smallTotal = 0;
                this.mediumTotal = 0;
                this.largeTotal = 0;
                this.total = 0;
                this.paymentShow = false;
            } else {
                this.paymentMessage = "Sorry - that is not enough money";
                this.paymentMsgShow = true;
                setTimeout(() => {
                    this.paymentMsgShow = false;
                }, 3000)
            }
        },
        smallBuy() {
            this.showCart();
            this.smallIncrement();
        },
        mediumBuy() {
            this.showCart();
            this.mediumIncrement();
        },
        largeBuy() {
            this.showCart();
            this.largeIncrement();
        }
    }
}

document.addEventListener("alpine:init", () => {
    Alpine.data("pizzaCart", PizzaCart)
});