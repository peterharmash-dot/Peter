import Button from './components/Button.jsx'

// Демо-страница: показывает компонент Button во всех вариантах и размерах.
export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F8FB] flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-2xl font-bold text-slate-900">Button component</h1>

      {/* Варианты оформления */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>

      {/* Размеры */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* Пример обработчика клика */}
      <Button onClick={() => alert('Привет из React!')}>Нажми меня</Button>
    </div>
  )
}
