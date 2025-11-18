export const getCopyText = (button, type) => {
  if (type === 'demo') {
    return button.demo;
  } else if (type === 'code') {
    return button.code;
  }
  return '';
};