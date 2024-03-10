import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import Item from './components/Item'
import Social from './components/Social'

function App() {
  return (
    <div className="flex font-merriweather">
      <aside className="bg-brand-1 text-brand-2 flex-1 py-30 px-20 flex justify-end">
        <Social />
      </aside>

      <main className="bg-brand-2 text-brand-1 flex-1 py-40 px-20">
        <section className="pb-40">
          <h1 className="text-5xl pb-4 font-montserrat font-bold">
            I'm Yulei Chen
          </h1>
          <p className="text-2xl">I know nothing about JavaScript.</p>
        </section>

        <Item
          type="Project"
          date="March 1, 2024"
          title="Step"
          description="My learning logs"
        />

        <Item
          type="Project"
          date="January 1, 2023"
          title="Blurcasts"
          description="Learn English with your favorite podcasts"
        />
      </main>
    </div>
  )
}

export default App
