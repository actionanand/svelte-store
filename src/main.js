import App from './App.svelte';

const app = new App({
	// target: document.body
  target: document.getElementById('app'),
  props: {
    appName: 'managing state and data with store'
  }
});

export default app;