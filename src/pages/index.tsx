import { useState } from "react";

import MySkills from "@/components/pageSlides/homepage/MySkills";
import Summary from "@/components/pageSlides/homepage/Summary";
import Seo from "@/components/Seo";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <Seo />

      <main>
        <section className="overflow-hidden bg-white">
          <div>
            {page === 0 ? (
              <div className="relative h-screen">
                <Summary setPage={setPage} />
              </div>
            ) : page === 1 ? (
              <div className=" relative h-screen">
                <MySkills setPage={setPage} />
              </div>
            ) : (
              <div>
                <h1>My story.</h1>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
