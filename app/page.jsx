import Social from "./components/Social";
import Item from "./components/Item";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main className="font-merriweather bg-brand-2 md:bg-inherit ">
      <section className="flex flex-col justify-center items-center gap-5 md:gap-40 py-20 bg-brand-1 md:bg-inherit md:flex-row">
        <div className="text-brand-2 flex-1 flex justify-end">
          <Social />
        </div>
        <Intro className="text-brand-2 flex-1 pt-16 md:text-brand-1" />
      </section>

      <article className="py-15 w-90 mx-auto md:w-inherit max-w-[90%]">
        <Item
          type="Tutorial"
          date="April 1, 2024"
          title="React Router Tutorial (WIP)"
          description="An alternative take on React Router's official tutorial."
          href="https://react-router-tutorial.yulei.monster"
        />
        <Item
          type="Project"
          date="March 1, 2024"
          title="Step"
          description="My learning logs."
          href="https://step.yulei.monster"
        />
        <Item
          type="Project"
          date="January 1, 2023"
          title="Blurcasts (WIP)"
          description="Learn English with your favorite podcasts."
          href="https://blurcasts.yulei.monster"
        />
      </article>
    </main>
  );
}
