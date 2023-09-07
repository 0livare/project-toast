import React from 'react';

const ToastContext = React.createContext({
  activeToasts: [],
  createToast: () => null,
  removeToast: (id) => {},
});

export function ToastProvider(props) {
  const [activeToasts, setActiveToasts] = React.useState([]);

  const value = React.useMemo(() => {
    function createToast(message, variant) {
      const id = Math.random();
      setActiveToasts((oldToasts) => [
        ...oldToasts,
        { id, message, variant: variant ?? 'info' },
      ]);
      return id;
    }

    function removeToast(id) {
      setActiveToasts((oldToasts) => oldToasts.filter((t) => t.id !== id));
    }

    return { activeToasts, createToast, removeToast };
  }, [activeToasts]);

  return <ToastContext.Provider {...props} value={value} />;
}

export function useToast() {
  return React.useContext(ToastContext);
}
