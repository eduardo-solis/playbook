class profile {

    constructor(name, phone, email, particulary_direction, job_direction, payment_methods) {
        this.name = name
        this.phone = phone
        this.email = email
        this.particulary_direction = particulary_direction
        this.job_direction = job_direction
        this.payment_methods = payment_methods
    }

    getUser() {
        return `Name: ${this.name}, Payment method: ${this.payment_methods[0]}`
    }

}

const myProfile = new profile('Eduardo Solis', '+52 1111111111', 'an_email@email.com', 'Venustiano Carranza 606 1-6, Tamaulipas, 89060 Tampico, Tamps.', 'C. Cristóbal Colón LB, San Andres, 55780 Jaltenco, Méx.', ['Cash', 'Debit Card 1', 'Debit Card 2', 'Credit Card'])
console.log(myProfile.getUser())