// Переиспользуемый компонент кнопки.
// Принимает:
//   - children  : содержимое кнопки (текст/иконка)
//   - variant   : стиль оформления ('primary' | 'secondary' | 'ghost')
//   - size      : размер ('sm' | 'md' | 'lg')
//   - className : дополнительные классы снаружи (необязательно)
//   - ...props  : любые стандартные атрибуты <button> (onClick, disabled, type...)

// Карта вариантов оформления: имя -> Tailwind-классы цвета.
const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800',
  ghost: 'bg-transparent hover:bg-slate-100 text-slate-700',
}

// Карта размеров: имя -> Tailwind-классы шрифта и отступов.
const sizes = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-5 py-2',
  lg: 'text-base px-6 py-3',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  // Собираем итоговый список классов: базовые + выбранный вариант + размер + внешние.
  // Если передали неизвестный variant/size — мягко откатываемся на значения по умолчанию.
  const classes = [
    'inline-flex items-center justify-center font-medium rounded-full transition',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ].join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
