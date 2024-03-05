const setItemLocal=()=>{
    localStorage.setItem("name","masud")
    const person={
        name:"ali",
        age:2,
        color:"white"
    }
    const personJson=JSON.stringify(person)
    localStorage.setItem("person",personJson)
}