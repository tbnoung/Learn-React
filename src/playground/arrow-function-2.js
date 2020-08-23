const add = function (a, b) {
  // console.log(arguments);
  return a+b
}
// console.log(add(70, 30,100))

const user = {
  name: 'Tbnoung',
  cities: ['Philadelphia','New York','Dublin'],
  number : [1,2,3,4],
  sum (a, b) {
    return a+b
  },
  printPlacesLived () {
    // console.log(this.name)
    // console.log(this.cities)
    let sumary = 0
    this.number.forEach((num) => sumary = this.sum(sumary,num))
    const messageCities = this.cities.map((city) => this.name + 'has live in ' + city)
    return { data: messageCities,sumforEach: sumary}
  }
}
console.log(user.printPlacesLived());
// user.printPlacesLived()
