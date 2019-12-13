import { useEffect, useRef, useCallback, useState } from 'react';

export const useClickOutside = fn => {
  const refEl = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClickOutside = useCallback(
    event => {
      if (refEl.current && !refEl.current.contains(event.target)) {
        setIsVisible(false);

        // handle callback passed as argument [optional]
        if (fn && typeof fn === 'function') {
          fn();
        }
      }
    },
    [setIsVisible, fn]
  );

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape') {
        setIsVisible(false);

        // handle callback passed as argument [optional]
        if (fn && typeof fn === 'function') {
          fn();
        }
      }
    },
    [fn]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [handleClickOutside, handleKeyDown]);

  return { refEl, isVisible, setIsVisible };
};
