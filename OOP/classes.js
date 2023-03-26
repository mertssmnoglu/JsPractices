class Vehicle {
    constructor(brand, modelName, vehicleType, fuelType) {
        this.brand = brand
        this.modelName = modelName
        this.vehicleType = vehicleType
        this.fuelType = fuelType
    }

    details() {
        const vehicleDetails = {
            brand: this.brand,
            modelName: this.modelName,
            vehicleType: this.vehicleType,
            fuelType: this.fuelType
        }
        return vehicleDetails
    }

    showDetails() {
        console.log(this.details())
    }
}

var f31 = new Vehicle('Bmw', '3 Series', 'Automobile', 'Diesel')
f31.showDetails()
