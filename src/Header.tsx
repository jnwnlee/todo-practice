import { Component } from "solid-js";
import { css } from "@stitches/core"; 

import { themeSys } from './Theme';
import { size } from './Size';

type Props = {
    name: string
};

const headerClass = () => { return css({
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    color: themeSys.text,
    width: '100%',
    height: size.headerH,
    'border-bottom': `${size.line}px solid ${themeSys.line}`,
    'font-size': size.fontTitle,
    'font-weight': size.fontBold 
})};

export const Header: Component<Props> = (props: Props) => {
    return (
        <div class={headerClass()}>
            {`${props.name}'s To-do List`}
        </div>
    );
};