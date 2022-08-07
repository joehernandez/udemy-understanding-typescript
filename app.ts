class Department {
    name: string
  
    constructor(n: string) {
      this.name = n
    }
  }

const dept = new Department('Accounting')
console.log('Department', dept)

// function add(n1: number, n2: number) : number{
//     return n1 + n2
// }

// const number1 = 5
// const number2 = 2.8

// const result = add(number1, number2)
// console.log(result)
// console.log('made a change')