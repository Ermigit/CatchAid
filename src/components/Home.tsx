

type propType={
    name: string
    age: number
}

const Home = ({name,age}:propType)=>{
    return <h1> Hi {name}, you are {age} years old</h1>
}

export default Home;