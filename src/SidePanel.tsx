import { css } from "@stitches/core";
import { Component, For, If } from "solid-js";

import { size } from "./Size";
import { themeSys } from "./Theme";
import { todoStore } from "./TodoStore";

const sidePanelClass = () => { return css({
    display: 'flex',
    'flex-direction': 'column',
    width: size.sidePanelW,
    'border-right': `${size.line}px solid ${themeSys.line}`
})()};

const sectionClass = () => { return css({
    width: '100%',
    height: '50%',
    padding: size.spaceLg,
    overflow: 'hidden scroll',
    '&::-webkit-scrollbar': { background: 'transparent' },
    '&::-webkit-scrollbar-track': { background: 'transparent' },
    '&::-webkit-scrollbar-thumb': { background: themeSys.bg3 }
})()};

const sectionTitleClass = () => { return css ({
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    color: themeSys.text,
    width: '100%',
    height: size.sidePanelItemH,
    'font-size': size.fontSection,
    'font-weight': size.fontBold
})()};

const itemClass = () => { return css({
    display: 'flex',
    'align-items': 'center',
    background: themeSys.bg2,
    color: themeSys.text,
    height: size.sidePanelItemH,
    margin: size.spaceMd,
    padding: size.spaceMd
})()};

// TODO: createEffect

export const SidePanel: Component = () => {
    return (
        <div class={sidePanelClass()}>
            <div class={sectionClass()} style={{'border-bottom': `${size.line}px solid ${themeSys.line}`}}>
                <div class={sectionTitleClass()}>{'To-do'}</div>
                <For each={Object.keys(todoStore)}>{ sectionKey => (
                    <For each={Object.keys(todoStore[sectionKey].items)}>{ todoKey => (
                        <Show when={!todoStore[sectionKey].items[todoKey].done}>
                            <div class={itemClass()}>{todoStore[sectionKey].items[todoKey].content}</div>
                        </Show>
                    )}</For>
                )}</For>
            </div>
            <div class={sectionClass()}>
                <div class={sectionTitleClass()}>{'Done'}</div>
                <For each={Object.keys(todoStore)}>{ sectionKey => (
                    <For each={Object.keys(todoStore[sectionKey].items)}>{ todoKey => (
                        <Show when={todoStore[sectionKey].items[todoKey].done}>
                            <div class={itemClass()}>{todoStore[sectionKey].items[todoKey].content}</div>
                        </Show>
                    )}</For>
                )}</For>
            </div>
        </div>
    );
};