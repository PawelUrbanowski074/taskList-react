import Header from "./Header";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Fieldset from "./Fieldset";
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
      <Header />
      <Section>
        <Fieldset title="Dodaj nowe zadanie" />
        <Fieldset body={<Form />} />
      </Section>
      <Section>
        <Fieldset
          title="Lista zadań"
          body={<Buttons tasks={tasks} hideCompletedTasks={hideCompletedTasks} />}
        />
        <Fieldset
          body={<Tasks tasks={tasks} hideCompletedTasks={hideCompletedTasks} />}
        />
      </Section>
    </Container>
  );
}

export default App;