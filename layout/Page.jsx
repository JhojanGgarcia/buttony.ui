import { SectionSeparator } from "@/components/ui/decoration";
import React, { Children, Fragment } from "react";

export default function BasePage({ children }) {
  const childArray = Children.toArray(children);
  return (
    <React.Fragment>
      {childArray.map((child, index) => (
        <Fragment key={index}>
          <div className="max-w-8xl md:px-12">
            <section className="relative flex h-full flex-col items-center justify-center">
              {child}
            </section>
          </div>

          <SectionSeparator />
        </Fragment>
      ))}
    </React.Fragment>
  );
}
