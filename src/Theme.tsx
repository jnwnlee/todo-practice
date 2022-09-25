import { createStore } from 'solid-js/store';

type Theme = {
  name: string;
  bg1: string;
  bg2: string;
  bg3: string;
  line: string;
  text: string;
};

const darkTheme: Theme = {
  name: 'dark',
  bg1: '#15181b',
  bg2: '#202326',
  bg3: '#343639',
  line: '#333639',
  text: '#e1e4e7'
};

export const [themeSys, setThemeSys] = createStore<Theme>({...darkTheme});
