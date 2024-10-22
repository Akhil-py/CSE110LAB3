import { render, screen, fireEvent, getByTestId, getAllByTestId } from "@testing-library/react";
import { ToDoList } from "./toDoList";

//Test 1 Expect all elements to be displayed
describe("Default StickyNotes",()=>{
    test("renders create note form", () => {
        render(<ToDoList />);

        const title=screen.getByText("'s To Do List")
        expect(title).toBeInTheDocument();

        const bought=screen.getByText("Items bought: 0")
        expect(bought).toBeInTheDocument();

        const apples=screen.getByText("Apples")
        expect(apples).toBeInTheDocument();

        const bananas=screen.getByText("Bananas")
        expect(bananas).toBeInTheDocument();
      });
});