declare module "*.glsl" {
  const value: string;
  export default value;
}

declare module "*.vs" {
  const value: string;
  export default value;
}

declare module "*.fs" {
  const value: string;
  export default value;
}

declare module 'babel-plugin-glsl/macro';

// example.d.ts
declare module 'gradients' {
  export function exampleFunction(): void;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}