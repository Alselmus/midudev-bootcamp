import './App.css';
/**
 *  Const Title = ({course}) => <h1>{course}</h1>
 */
const Title = (props) =>{
  return <h1>{props.course}</h1>
}
const Parf = ({part},{exercise}) => {
  return <p>{part} {exercise}</p>
}
const Totalexcersice = ({exercise}) => {
  return <p>{exercise}</p>
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Parf part={part1} exercise={exercises1} />
      <Parf part={part2} exercise={exercises2} />
      <Parf part={part3} exercise={exercises3} />
      <Totalexcersice exercise={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;
