import { Component, For } from "solid-js";
import { css } from "@stitches/core";
import { Button, Input, CloseButton, InputRightAddon, InputGroup, Checkbox, InputLeftAddon, InputLeftElement, InputRightElement } from "@hope-ui/solid";

import { size } from "./Size";
import { themeSys } from "./Theme";
import { addTodo, deleteSection, deleteTodo, modifyTitle, todoStore, toggleDone } from "./TodoStore";
import { AddButton } from "./AddButton";
import { modifyTodo } from "./TodoStore"; 

type Props = {
    key: string
}

const sectionClass = () => { return css({
    flexShrink: 0,
    width: `${size.sectionW}px`,
    minHeight: `${size.sectionH}px`,
    maxHeight: `100%`,
    padding: `${size.spaceMd}px`    
})()};

const innerClass = () => {return css({
    display: 'flex',
    flexDirection: 'column',
    background: themeSys.bg2,
    borderRadius: `${size.radius}px`,
    width: '100%',
    height: '100%'
})()};

const boxClass = () => { return css ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: `${size.spaceMd}px`,
    fontSize: size.fontTitle,
    color: `${themeSys.text}`,
    '&::-webkit-scrollbar': { background: 'transparent' },
    '&::-webkit-scrollbar-track': { background: 'transparent' },
    '&::-webkit-scrollbar-thumb': { background: themeSys.bg3 }
})()};

const titleClass = () => { return css({
    padding: `${size.spaceMd}px !important`,
    fontSize: `${size.fontTitle} !important`,
    height: `${size.sectionTitleH}px`,
    color: `${themeSys.text}`
})()};

const closeButtonClass = () => { return css({
    background: 'transparent',
    color: `${themeSys.text}`,
    height: `${size.sectionTitleH}px`
})()};

const itemClass = () => { return css({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: `${themeSys.bg1}`,
    width: '100%',
    margin: `${size.spaceMd}px`
})()};

const itemInputClass = () => { return css({
    color: `${themeSys.text}`
})()};


export const Section: Component<Props> = (props: Props) => {
    const onTitleInput = (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        modifyTitle(props.key, event.target.value);
    }
    
    const onSectionClose = (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        deleteSection(props.key);
    };

    const onItemAdd = (event: Event, sectionKey: string) => {
        event.preventDefault();
        event.stopPropagation();
        addTodo(sectionKey);  
    };

    const onItemInput = (event: Event, itemKey: string) => {
        event.preventDefault();
        event.stopPropagation();
        modifyTodo(props.key, itemKey, event.target.value);
    };    

    const onCheck = (event: Event, itemKey: string) => {
        event.preventDefault();
        event.stopPropagation();
        toggleDone(props.key, itemKey);
    };

    const onItemClose = (event: Event, itemKey: string) => {
        event.preventDefault();
        event.stopPropagation();
        deleteTodo(props.key, itemKey);
    };

    return (
        <div class={sectionClass()}>
            <div class={innerClass()}>
                <div class={boxClass()} style={`height: ${size.sectionTitleH}px`}>
                    <InputGroup>
                        <Input variant='unstyled' class={titleClass()}
                        placeholder='Title'
                        value={todoStore[props.key].title}
                        onInput={onTitleInput}/>
                        <InputRightAddon variant='unstyled'>
                            <CloseButton class={closeButtonClass()} aria-label="Close" onClick={onSectionClose}/>
                        </InputRightAddon>
                    </InputGroup>
                </div>
                <div class={boxClass()} 
                    style='flex-direction: column; height: 100%; overflow: hidden scroll;'>
                    <For each={Object.keys(todoStore[props.key].items)}>{(itemKey: string) => (
                        <InputGroup class={itemClass()}>
                            <InputLeftElement style={`padding: ${size.spaceLg}px`}>
                                <Checkbox size='lg' checked={todoStore[props.key].items[itemKey].done} 
                                        onChange={(e) => { onCheck(e, itemKey); }}></Checkbox>
                            </InputLeftElement>
                            <Input variant='unstyled' class={itemInputClass()}
                                    value={todoStore[props.key].items[itemKey].content}
                                    onInput={(e) => {onItemInput(e, itemKey);}}/>
                            <InputRightElement>
                                <CloseButton class={closeButtonClass()} aria-label='delete' 
                                onClick={(e) => {onItemClose(e, itemKey);}}/>
                            </InputRightElement>
                        </InputGroup>
                    )}</For>
                    <AddButton onClick={(e) => {onItemAdd(e, props.key);}}/>
                </div>
            </div>
        </div>
    )
};