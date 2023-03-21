export const stringShorten = (text: any) => {
  return text?.slice(0, 20) + "..." + text?.slice(text.length - 3, text.length);
};
