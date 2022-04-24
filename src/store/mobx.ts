import { makeObservable } from "mobx"

class Todo {
    thinsTodo=[
        {
            id:1,
            thing:"helloworld",
            isDone:false
        },
        {
            id:2,
            thing:"helloworld111",
            isDone:false
        },
        {
            id:3,
            thing:"helloworld222",
            isDone:false
        },
        {
            id:4,
            thing:"helloworld333",
            isDone:false
        }
    ]

    constructor() {
        makeObservable(this)
    }
    
}
const useStore = new Todo()
export default useStore 