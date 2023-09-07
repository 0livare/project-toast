import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToast } from './ToastContext';

function ToastShelf() {
  const { activeToasts, removeToast } = useToast();

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {activeToasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            isOpen
            variant={toast.variant}
            id={toast.id}
            onClose={() => removeToast(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
