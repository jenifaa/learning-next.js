"use client"

function ErrorPage({error,reset}:{error: Error & { digest?: string }; reset: () => void}) {



  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Error occurred</h1>
      <p className="text-center">{error.message}</p>
      <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Try again
      </button>
    </div>
  )
}

export default ErrorPage
