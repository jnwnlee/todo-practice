import { Component } from "solid-js";
import { Button } from "@hope-ui/solid";
import { css } from "@stitches/core";

import { size } from "./Size";

type Props = {
    onClick: Function
};

const buttonClass = () => { return css({
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: `${size.addButtonW}px`,
    minHeight: `${size.sectionH}px`,
    margin: `${size.spaceMd}px`,
    borderRadius: `${size.radius}px`
})()}; 

export const AddButton: Component<Props> = (props: Props) => {
    return (
        <div class={buttonClass()}>
            <Button fontSize={size.fontTitle} onClick={props.onClick}>
                {'+'}
            </Button>
        </div>
    );
};