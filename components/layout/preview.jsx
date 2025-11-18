"use client";

import Card from "@/components/ui/card";

export const PreviewButtons = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card />
      </div>
    </section>
  );
};

export default PreviewButtons;
