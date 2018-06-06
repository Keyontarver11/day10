//elements
const row1 = document.querySelectorAll(".row1 div")
const row2 = document.querySelectorAll(".row2 div")
const refresh = document.querySelector(".refresh")
const addButton = document.querySelector(".addChoice")

class Bitcoin {
    constructor(spots) {
        this.spots = spots
        this.getPrices()
    }
    setPrices(prices, numbers) {
        for (let i = 0; i < numbers.length; i++) {
            row2[i + 1].textContent = prices[numbers[i]].rate.toFixed(2)
        }

    }
    getPrices() {
        $.ajax({
            url: "https://bitpay.com/api/rates",
            type: "GET",
            dataType: "json",
            success: (data) => {
                console.log(data)
                this.prices = data
                this.setPrices(this.prices, this.spots)
            },
            error: (error) => {
                console.log("eyore")
            }
        })
    }
    refresh() {
        this.getPrices()
    }

}

const bit = new Bitcoin([0, 2, 3, 4, 5, 6,])
refresh.addEventListener("click", function () {
    bit.refresh()
})
addButton.addEventListener("click", function () {
    const code = window.prompt("What currency are you looking for?")
    bit.prices.forEach(function (b, i) {
       if (b.code === code.toUpperCase()) {
          console.log(i)
          document.querySelector(".row1").innerHTML += `<div>BTC/${code.toUpperCase()}</div>`
          document.querySelector(".row2").innerHTML +=`<div>${b.rate.toFixed(2)}</div>`
          bit.spots.push(i)
          
        }
    })
})