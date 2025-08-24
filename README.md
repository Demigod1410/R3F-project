# R3F Project

> This project is a 3D web application built with React, Vite, and React Three Fiber (R3F). It features interactive 3D models, custom shader backgrounds, and modern UI styling with Tailwind CSS.

## Features

- **React Three Fiber** for rendering 3D models (Earth, Angelwing, Jupiter, etc.)
- **@react-three/drei** helpers for controls, environment, and GLTF loading
- **Custom Dither Shader Backgrounds** (from [reactbits.dev](https://reactbits.dev/default/Backgrounds/Dither))
- **Vite** for fast development and HMR
- **Tailwind CSS** for styling
- **ESLint** for code quality

## Project Structure

```
public/
	Earth.gltf, earth2.gltf, angelwing.gltf, Jupiter.gltf, ...
	textures/
	src/blocks/Backgrounds/Dither/Dither.jsx, Dither.css
src/
	App.jsx         # Main app, renders 3D scenes and backgrounds
	App.css         # Layout and canvas styling
	index.css
	assets/
	Earth.jsx, Earth2.jsx, Angelwing.jsx, Jupiter.jsx  # 3D model components
index.html
vite.config.js
package.json
```

## How It Works

- The app renders two main 3D scenes, each in its own `<Canvas>`:
	- The first scene shows the Earth2 model with a custom animated dither shader background.
	- The second scene shows the Angelwing model, also with a unique dither shader background.
- Both scenes use `<OrbitControls>` for interaction and `<Environment>` for lighting.
- The Dither background is implemented as a separate React component using custom shaders and postprocessing.

## Getting Started

1. **Install dependencies:**
	 ```sh
	 pnpm install
	 # or
	 npm install
	 ```

2. **Run the development server:**
	 ```sh
	 pnpm run dev
	 # or
	 npm run dev
	 ```
	 The app will be available at `http://localhost:5173` (or another port if in use).

3. **Build for production:**
	 ```sh
	 pnpm run build
	 # or
	 npm run build
	 ```

## Adding/Editing 3D Models

- Place your `.gltf` and texture files in the `public/` directory.
- Use [gltfjsx](https://github.com/pmndrs/gltfjsx) to generate React components for your models:
	```sh
	npx gltfjsx@latest yourmodel.gltf
	```
- Import and use the generated component in `App.jsx`.

## Custom Shader Backgrounds

- The Dither background is installed from [reactbits.dev](https://reactbits.dev/default/Backgrounds/Dither).
- You can customize the shader parameters in `App.jsx` for each scene.

## Main Dependencies

- react, react-dom
- @react-three/fiber
- @react-three/drei
- three
- tailwindcss
- vite
- eslint

## License

Model assets are licensed as noted in their respective `.gltf` files. Code is MIT licensed.