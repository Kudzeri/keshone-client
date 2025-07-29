
export default function NotFound() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="mt-2">Страница которую вы ищете, не существует.</p>
        <a className="text-blue-500 hover:underline" href="/">Вернуться на главную</a>
    </div>
  )
}
