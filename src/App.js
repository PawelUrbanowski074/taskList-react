import Header from "./Header";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Container from "./Container";


const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść śniadanie", done: true },
];

const hideCompletedTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań"/>
      <Section
        title="Dodaj nowe zadanie" 
        body={<Form/>}
      />  
      <Section
        title="Lista zadań" 
        extraHeaderContent=
        {<Buttons 
          tasks={tasks} 
          hideCompletedTasks={hideCompletedTasks}
        />} 
        body={<Tasks tasks={tasks} hideCompletedTasks={hideCompletedTasks} />} 
      />
    </Container>
  );
}

export default App;