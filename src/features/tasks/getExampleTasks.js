export const getExampleTasks = async () => {
    const response = await fetch("/taskList-react/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};