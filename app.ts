class Department {
    // private id: string
    // private name: string
    private employees: string[] = []
  
    // static property
    static fiscalYear = 2020

    constructor(private id: string, public readonly name: string) {
        // this.id = id
        // this.name = name
        // to access static property in instance-related logic, use the class name
        // console.log(Department.fiscalYear)
    }

    // static methods
    static createEmployee(empName: string) {
        return { name: empName }
    }

    describe(this: Department) {
        console.log(`Department: ${this.name}: ${this.id}` )
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
  }

class ITDepartment extends Department {
    constructor(id: string, private admins: string[] = []) {
        super(id, 'IT') // Must call super(...) before using 'this' keyword
    }

    addAdmin(adminName: string) {
        this.admins.push(adminName)
    }

    printAdmins() {
        console.log(`Department: ${this.name}`)
        console.log(this.admins)
    }
}

// static methods & properties
const emp1 = Department.createEmployee('Employee1')
const fiscalYear = Department.fiscalYear
console.log(`New employee: ${emp1.name} | Fiscal Year: ${fiscalYear}`)

const it = new ITDepartment('2')
it.addAdmin('JoeMama')
it.addAdmin('PhilipTheNickel')
it.printAdmins()

const accounting = new Department('1','Accounting')
// accounting.name = 'New Name' => Results in TypeScript error because field is readonly
accounting.addEmployee('Joe')
accounting.addEmployee('Manu')

accounting.describe()
accounting.printEmployeeInformation()

// function add(n1: number, n2: number) : number{
//     return n1 + n2
// }

// const number1 = 5
// const number2 = 2.8

// const result = add(number1, number2)
// console.log(result)
// console.log('made a change')