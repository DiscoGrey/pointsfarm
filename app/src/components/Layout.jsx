const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col mx-auto">
    <main className="bg-zinc-100 text-center text-5xl flex-1 flex flex-wrap items-center justify-center text-zinc-500">
      {children}
    </main>
  </div>
)

export default Layout