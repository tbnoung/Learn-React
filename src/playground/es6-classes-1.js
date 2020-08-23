class Person {
  constructor (name= 'Default name', age =0) {
    this.name = name
    this.age = age
  }
  getGretting () {
    return `Hi. I am ${this.name} I am ${this.age} year old`
  }
}
class Student extends Person {
  constructor (name, age, major,location) {
    super(name,age)
    this.major = major
    this.location = location
  }
  getGretting () {
    let description = super.getGretting()
    if (this.location) { 
      description += ` I'm visiting from ${this.location}`
    }
    return description
  }
}




const me = new Student('Theerasak',25,'Computer','Thailand')
console.log(me.getGretting())
const other = new Student()
// console.log(me)
// console.log(other)
console.log(other.getGretting())