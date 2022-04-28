class travel {

    constructor(location, destination, payment_method, payment, coin, distance, unit_of_measure){
        this.location = location
        this.destination = destination
        this.payment_method = payment_method
        this.payment = payment
        this.coin = coin
        this.distance = distance
        this.unit_of_measure = unit_of_measure
    }

    getToPaid() {
        return `Payment method: ${this.payment_method}\nTo paid: ${this.payment} ${this.coin}`
    }
    getTravel() {
        return `Location: ${this.location}\nDestination: ${this.destination}\nDistance: ${this.distance} ${this.unit_of_measure}`
    }

}

const myTravel = new travel
    (
        'Centro Max, Blvd. Adolfo López Mateos 2518, Jardines de Jerez, 37530 León, Gto.',
        'Universidad Tecnológica de León, Blvd. Universidad Tecnológica 225, Universidad Tecnologica, San Carlos la Roncha, 37670 León, Gto.',
        'Cash',
        450,
        'MX',
        '7.4',
        'KM'
    )

console.log('Travel\n-------------------------')
console.log(myTravel.getTravel())
console.log('-------------------------')
console.log(myTravel.getToPaid())