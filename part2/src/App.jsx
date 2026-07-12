const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  const {course} = props
  return (
    <div>
        {course.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = (props) => {
  const length = props.course.parts.length
  let sum = 0
  for (let i = 0; i < length; i++){
    sum += props.course.parts[i].exercises
  }

  return (
    <div>
      <Header course={props.course.name} />
      <Content course={props.course.parts} />
      <p>
        total of {sum} exercises
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Who is Redux?',
        exercises: 11,
        id: 4
      },
    ],
  }

  return (
    <Course course={course} />
  )
}

export default App