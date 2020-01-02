# umi-mobile-app
This is a mobile project built using umijs

This project was bootstrapped with [yarn create umi](https://umijs.org/zh/guide/create-umi-app.html#%E4%BB%8B%E7%BB%8D-create-umi).

## Create a step

### `create umi project`
```
$ mkdir umi-mobile-app && cd umi-mobile-app
$ yarn create umi
```

选择project
```
? Select the boilerplate type (Use arrow keys)
  ant-design-pro  - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.
❯ app             - Create project with a simple boilerplate, support typescript.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.
```
选择是否使用 TypeScript，
```
? Do you want to use typescript? (y/N)  n
```
然后，选择你需要的功能，
```
? What functionality do you want to enable? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯（*） antd
 （*） dva
 （ ） code splitting
 （ ） dll
```

### `Install dev`
```
$ yarn
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://umijs.org/zh/guide/deploy.html#%E9%BB%98%E8%AE%A4%E6%96%B9%E6%A1%88) for more information.
