import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      index.tsx file <Link href="/link">Link</Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Index head",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
