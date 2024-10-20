import { render, screen, fireEvent, getByTestId, getAllByTestId } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { ThemeContext, themes } from "./themeContext";
import { dummyNotesList } from "./constants";

//Test 1
test("renders create note form", () => {
 render(<StickyNotes />);
 const createNoteButton = screen.getByText("Create Note");
 expect(createNoteButton).toBeInTheDocument();
 
});

//Test 2 creating a new Note
describe("Create StickyNote", () => {
    test("renders create note form", () => {
      render(<StickyNotes />);
   
      const createNoteButton = screen.getByText("Create Note");
      expect(createNoteButton).toBeInTheDocument();
    });
   
    test("creates a new note", () => {
      render(<StickyNotes />);
   
   // Please make sure your sticky note has a title and content input field with the following placeholders.
      const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
      const createNoteContentTextarea =
        screen.getByPlaceholderText("Note Content");
      const createNoteButton = screen.getByText("Create Note");
   
      fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
      fireEvent.change(createNoteContentTextarea, {
        target: { value: "Note content" },
      });
      fireEvent.click(createNoteButton);
   
      const newNoteTitle = screen.getByText("New Note");
      const newNoteContent = screen.getByText("Note content");
   
      expect(newNoteTitle).toBeInTheDocument();
      expect(newNoteContent).toBeInTheDocument();
    });
});

//Test 3 for loading default Notes
describe("Default StickyNotes",()=>{
    test("renders create note form", () => {
        render(<StickyNotes />);
      
        const defaultNoteTitle1=screen.getByText("test note 1 title")
        const defaultNoteTitle2=screen.getByText("test note 2 title")
        const defaultNoteTitle3=screen.getByText("test note 3 title")
        const defaultNoteTitle4=screen.getByText("test note 4 title")
        const defaultNoteTitle5=screen.getByText("test note 5 title")
        const defaultNoteTitle6=screen.getByText("test note 6 title")
        const noteLength=screen.getAllByTestId("note-grid");
        expect(defaultNoteTitle1).toBeInTheDocument();
        expect(defaultNoteTitle2).toBeInTheDocument();
        expect(defaultNoteTitle3).toBeInTheDocument();
        expect(defaultNoteTitle4).toBeInTheDocument();
        expect(defaultNoteTitle5).toBeInTheDocument();
        expect(defaultNoteTitle6).toBeInTheDocument();
        expect(noteLength).toHaveLength(6);
      });
});


//Test 4 for displaying accurate amount of notes after creation
describe("Display correct amount of Notes",()=>{

test("creates a new note", () => {
    render(<StickyNotes />);
 
 // Please make sure your sticky note has a title and content input field with the following placeholders.
    const defaultNoteTitle1=screen.getByText("test note 1 title")
    const defaultNoteTitle2=screen.getByText("test note 2 title")
    const defaultNoteTitle3=screen.getByText("test note 3 title")
    const defaultNoteTitle4=screen.getByText("test note 4 title")
    const defaultNoteTitle5=screen.getByText("test note 5 title")
    const defaultNoteTitle6=screen.getByText("test note 6 title")
    const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
    const createNoteContentTextarea =
      screen.getByPlaceholderText("Note Content");
    const createNoteButton = screen.getByText("Create Note");
 
    fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
    fireEvent.change(createNoteContentTextarea, {
      target: { value: "Note content" },
    });
    fireEvent.click(createNoteButton);
    const noteLength=screen.getAllByTestId("note-grid")
    const newNoteTitle = screen.getByText("New Note");
    const newNoteContent = screen.getByText("Note content");
 
    expect(newNoteTitle).toBeInTheDocument();
    expect(newNoteContent).toBeInTheDocument();
    expect(defaultNoteTitle1).toBeInTheDocument();
    expect(defaultNoteTitle2).toBeInTheDocument();
    expect(defaultNoteTitle3).toBeInTheDocument();
    expect(defaultNoteTitle4).toBeInTheDocument();
    expect(defaultNoteTitle5).toBeInTheDocument();
    expect(defaultNoteTitle6).toBeInTheDocument();
    expect(noteLength).toHaveLength(7);
  });
});


//Test for Toggle Theme
describe("Note Added and Editied",()=>{
  test("Turn to Dark Mode and Back to Light Mode",()=>{
      render (<StickyNotes/>);
      const toggleButton=screen.getByText("Toggle Theme");
      fireEvent.click(toggleButton);
      const element=screen.getByText("test note 1 title");
      expect(element).toHaveStyle('background-color:themes.dark.background');
      expect(element).toHaveStyle('color:themes.dark.foreground');
      fireEvent.click(toggleButton);
      expect(element).toHaveStyle('background-color:themes.light.background');
      expect(element).toHaveStyle('color:themes.light.foreground');
  });
});

//Test for Deleting Note
describe("Create and Delete a Note",()=>{
  test("Deleteing Note",()=>{
     render(<StickyNotes/>);
      const notesLength=screen.getAllByTestId("note-grid");
      const notetitle1=screen.getByText('test note 1 title');
      expect(notesLength).toHaveLength(6);
      const deleteButton=screen.getAllByText('x');
      fireEvent.click(deleteButton[0]);
      expect(notetitle1).not.toBeInTheDocument();
      const newNotesLength=screen.getAllByTestId("note-grid");
      expect(newNotesLength).toHaveLength(5);
  });
});