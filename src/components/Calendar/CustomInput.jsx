import React from 'react';
import css from './Calendar.module.css'; // Імпорт стилів

function CustomInput({ value, onClick }, ref) {
  return (
    <button className={css.customInput} onClick={onClick} ref={ref}>
      {value}
    </button>
  );
}

// Обертаємо компонент у forwardRef
const ForwardedCustomInput = React.forwardRef(CustomInput);

// Встановлюємо displayName для компонента
ForwardedCustomInput.displayName = 'CustomInput';

export default ForwardedCustomInput;