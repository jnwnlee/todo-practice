import { createStore, produce } from "solid-js/store";
import { SectionList } from "./SectionList";

type Todo = {
    content: string,
    done: boolean
};

type TodoStore = {
    [key: string]: Todo
};

type Section = {
    title: string,
    items: TodoStore
}

type SectionStore = {
    [key: string]: Section
}

let sectionKey = 0;
let todoKey = 0;
/* TODO: efficient indexing??? */

export const [todoStore, setTodoStore] = createStore<SectionStore>({
    ['1']: {
        title: 'Titledefault',
        items: {['1']: {content:'a1', done:true}, ['2']: {content:'a2', done:false}}
    }
});

export const addSection = () => {
    const newsectionKey = `${sectionKey}`;

    setTodoStore({
        ...todoStore,
        [newsectionKey]: {title: '', items: {}}
    });

    sectionKey++;
};

export const modifyTitle = (sectionKey: string, title: string) => {
    setTodoStore(
        produce((todoStore) => {todoStore[sectionKey].title = title;})
    );
};

export const deleteSection = (deleteSectionKey: string) => {
    setTodoStore(
        produce((todoStore) => {delete todoStore[deleteSectionKey];})
    );
};

export const addTodo = (sectionKey: string) => {
    const newTodoKey = `${todoKey}`;

    setTodoStore(
        produce((todoStore) => {todoStore[sectionKey].items = {
            ...todoStore[sectionKey].items,
            [newTodoKey]: {content: '', done: false}  
        }})
    );

    todoKey++;
};

export const modifyTodo = (sectionKey: string, itemKey: string, content: string) => {
    setTodoStore(
        produce((todoStore) => {todoStore[sectionKey].items[itemKey].content = content;})
    );
};

export const deleteTodo = (sectionKey: string, deleteTodoKey: string) => {
    setTodoStore(
        produce((todoStore) => {delete todoStore[sectionKey].items[deleteTodoKey];})
    );
};

export const toggleDone = (sectionKey: string, todoKey: string) => {
    setTodoStore(
        produce((todoStore) => {todoStore[sectionKey].items[todoKey].done = !todoStore[sectionKey].items[todoKey].done;})
    );
};