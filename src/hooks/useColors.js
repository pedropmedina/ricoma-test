import { useState, useEffect } from 'react';

const COLOR_BLUE = '#143061';
const COLOR_PURPLE = '#81396F';
const COLOR_RED = '#F6437D';

export const useColors = (
  { defaultColor, fn } = { defaultColor: COLOR_BLUE }
) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const colors = {
    blue: COLOR_BLUE,
    purple: COLOR_PURPLE,
    red: COLOR_RED
  };

  useEffect(() => {
    if (fn && typeof fn === 'function') {
      fn(selectedColor);
    }
  }, [fn, selectedColor]);

  const setColor = color => {
    setSelectedColor(color);
  };

  return { colors, selectedColor, setColor };
};
