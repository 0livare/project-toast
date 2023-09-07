import React from 'react';

export function useEscapeKey(fn) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') fn?.();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
}
