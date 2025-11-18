export const generateImportPath = (creator, category, name) =>
  `@/components/ui/buttons/${creator.replace(".", "/")}/${category}/${name
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

