import { Component, For } from "solid-js";
import { css } from "@stitches/core";
import { Button } from "@hope-ui/solid";

import { size } from "./Size";
import { addSection, todoStore } from "./TodoStore";
import { Section } from "./Section";
import { AddButton } from "./AddButton";
import { themeSys } from "./Theme";

const sectionListClass = () => { return css({
    display: 'flex',
    flex: '1 1 0%', // TODO: 왜필요????
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    padding: `${size.spaceLg}px`,
    overflow: 'scroll hidden',
    '&::-webkit-scrollbar': { background: 'transparent' },
    '&::-webkit-scrollbar-track': { background: 'transparent' },
    '&::-webkit-scrollbar-thumb': { background: themeSys.bg3 }
})()};

export const SectionList: Component = () => {
    const onSectionAdd = (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        addSection();
    };

    return (
        <div class={sectionListClass()}>
            <For each={Object.keys(todoStore)}>{ key => (
                <Section key={key}/>
            )}</For>        
            <AddButton onClick={(e) => {onSectionAdd(e);}}/>
        </div>
    );
};