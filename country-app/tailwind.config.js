/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {},
};
const newLocal = 'daisyui';
export const plugins = [
  require(newLocal),
];
export const daisyui = {
  themes: ["sunset"],
};