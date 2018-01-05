let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    });
  }

  passengers () {
     const allTrips = this.trips()

     const passengerIds = allTrips.map(function (trip) {
       return trip.passengerId
     });

       return store.passengers.filter(passenger => {
         return passengerIds.includes(passenger.id)
       });
     }

}//Driver Class

let passengerId = 0;
class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)

  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    });
  }

  drivers() {
    const allTrips = this.trips()

    const driverIds = allTrips.map(function (trip) {
      return trip.driverId
    });

    return store.drivers.filter(driver => {
      return driverIds.includes(driver.id)
    });

  }

}//Passenger Class



let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  passenger() {
    return store.passengers.filter(passenger => {
        return passenger.id === this.passengerId
     })[0]
  }

  driver() {
    return store.drivers.filter(driver => {
      return driver.id === this.driverId
    })[0]
  }

} //Trip Class
