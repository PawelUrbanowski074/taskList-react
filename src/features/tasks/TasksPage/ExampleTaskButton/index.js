import { useDispatch, useSelector } from "react-redux";
import { selectExampleTaskLoading, fetchExampleTasks } from "../../tasksSlice";
import Button from "../Button";

const ExampleTaskButton = () => {
    const loading = useSelector(selectExampleTaskLoading);
    const dispatch = useDispatch();

    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    )
};

export default ExampleTaskButton;