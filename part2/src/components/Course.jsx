const Header = (props) => <h2>{props.course}</h2>

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

const Course = (props) => {
  const parts = props.course.parts
  const total = parts.reduce((acc, part) => {
    console.log('Reduce functionality', acc, part)
    return acc += part.exercises
  }, 0)

  return (
    <div>
      <Header course={props.course.name} />
      <Content course={props.course.parts} />
      <p>
        total of {total} exercises
      </p>
    </div>
  )
}

export default Course