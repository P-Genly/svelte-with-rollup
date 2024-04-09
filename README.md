### Use components in other app (VueJs, React, Angular, etc...)

After running `npm run rollup:config`, you will find a compiled .js file in the src/dist folder.

In your target application, create a folder (like `src/svelte-components/dist` for example), and paste the compiled file you need there.

Import them like this: `import Button from './svelte-components/dist/Button';`

You can now use your svelte components compiled into your target application like this:

```ts
import Button from './svelte-components/dist/Button';

...

private svelteButton: any;

...

this.svelteButton = new Button({
          target: this.elementRef.nativeElement.querySelector('#svelte-button-container'),
          props : {
              title: 'My props from Angular!',
              onClick: () => alert('My highlight from Angular!'),
          },
      });
```

## Create new exportable component
For create new exportable component, you can just create your components and add it into rollup.config.js. He will recognize him by name :

For example, i create new component named like this : `NewComponent.svelte` into `src/components`folder

```js
export default [
    createConfig('Button'), // Existing component
    createConfig('NewComponent') // Add your new component .svelte
];
```

Run `npm run rollup:config` and rollup will build your new exportable component into `/dist` folder.

## Add babel into rollup config to build compatible components with older version of ECMAScript :
For example : If we have a target project on es6 (ES2015) we need to use babel to transpile the code on older version.

Follow this documentation (select rollup in `Build systems`) : https://babeljs.io/setup#installation

## Include CSS into .js file built by rollup :
In rollup config import : 

```css
import postcss from "rollup-plugin-postcss";
import postcss from "rollup-plugin-postcss";
```

Add in `plugins` property :
```js
plugins: [
            ...
            postcss({
                plugins: [postcssImport()],
                extract: false,
                inject: true,
            }),
            ...
        ]
```

Rollup will be import your css file used by the components.

Example of a component that imports css :
```svelte
<script lang="ts">
    ...
</script>

<div>
    <button on:click={onClick}>
        { title }
    </button>
</div>

<style>
    @import "./css/Button.css";
</style>
```

After running rollup you can see on .js file that css will be imported.
## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Building components


To create a exportable compenents with rollup:

```bash
npm run rollup:config
```
