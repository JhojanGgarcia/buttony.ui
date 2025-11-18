export default function Badge({ text }) {
  return (
    <span className="group dark:text-accent text-muted relative px-1.5 text-xs">
      <span className="border-chart/60 dark:border-chart/30 bg-chart/10 group-hover:bg-chart/15 absolute inset-0 border border-dashed"></span>
      {text}
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        className="fill-chart dark:fill-chart/50 absolute top-[-2px] left-[-2px]"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        className="fill-chart dark:fill-chart/50 absolute top-[-2px] right-[-2px]"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        className="fill-chart dark:fill-chart/50 absolute bottom-[-2px] left-[-2px]"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        className="fill-chart dark:fill-chart/50 absolute right-[-2px] bottom-[-2px]"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </svg>
    </span>
  );
}
