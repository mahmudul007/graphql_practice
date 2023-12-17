import Todo from "../Model/todo.js"

const createTodo = async (title) => {
  try {
    const todoData = await Todo.create({
      title
    });
    return todoData;
  } catch (error) {
    console.log(error);
  }
};
const getTodo = async () => {
    try {
        const todoData = await Todo.find();
        console.log(todoData);
        return todoData;
    } catch (error) {
        console.log(error);
    }
    }
const updateTodo= async(id,title,is_complete)=>{
    try {
        const todoSingle = await Todo.findByIdAndUpdate(id,{
            title,
            is_complete
        
        },{new:true});
        if(!todoSingle){
            throw new Error("Todo not found");
        }
        console.log(todoSingle);
        return todoSingle;
        
        
    } catch (error) {
        console.log(error);
        
    }

}

const getSingleTodo = async (id) => {
    try {
        const todo = await Todo.findById(id);
        if(!todo){
            throw new Error("Todo not found");
        }
        return todo;
        console.log(todo);
    } catch (error) {
        console.log(error);

        
    }


}

const deleteTodo = async (id) => {
    try {
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo){
            throw new Error("Todo not found");
        }
        return todo;
    } catch (error) {
        console.log(error);
        
    }

}

export default {createTodo,getTodo,updateTodo,getSingleTodo,deleteTodo}
