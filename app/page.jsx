import Social from "./components/Social";
import Item from "./components/Item";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main className="font-merriweather min-h-screen">
      <section className="flex justify-center items-center gap-40 py-26">
        <div className="text-brand-2 flex-1 flex justify-end">
          <Social />
        </div>
        <Intro className="text-brand-1 flex-1 pt-16" />
      </section>

      <article className="py-10">
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
      </article>
    </main>
  );
}
