type Employee = {
    name: string,
    position: string,
    age: number,
    salary: {
        amount: number,
        bonus: number
    }
}

type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

const nameAndAge: MyPick<Employee, 'name' | 'age'> = {
    name: 'John',
    age: 33,
}

type ReadOnly<T> = {
    readonly [key in keyof T] : T[key]
}
type ReadOnly3<T> = keyof T extends never? T : {
    readonly [key in keyof T] : ReadOnly3<T[key]>
}

type test = ReadOnly<Employee>
type test2 = Readonly<Employee>
type test3 = ReadOnly3<Employee>