import type { Component } from 'solid-js';
import { css } from '@stitches/core';

import { Header } from './Header';
import { SidePanel } from './SidePanel';
import { SectionList } from './SectionList';
import { themeSys } from './Theme';
import { size } from './Size';
import { HopeProvider } from '@hope-ui/solid';

const appClass = () => { return css({
  display: 'flex',
  'flex-direction': 'column',
  width: '100%',
  height: '100%',
  background: themeSys.bg1
})()};

const mainClass = () => { return css({
  display: 'flex',
  flex: '1',
  width: '100%',
  'background-color': themeSys.bg1,
  overflow: 'hidden'

})()};

const App: Component = () => {
  return (
    <HopeProvider>
      <div class={appClass()}>
        <Header name='Jnwn'/>
        <div class={mainClass()}>
          <SidePanel/>
          <SectionList/>
        </div>
      </div>
    </HopeProvider>
  );
};

export default App;
