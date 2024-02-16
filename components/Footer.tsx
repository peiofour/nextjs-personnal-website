'use client'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#335AB5] h-96">
      <div className="container">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-white">pierre.</p>
            <div className="flex gap-6">
            </div>
          </div>
        </div>
    </footer>
  )
}