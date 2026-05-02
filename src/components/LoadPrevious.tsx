import { cva } from "../utils/cva";

interface LoadPreviousProps {
  onClick: () => void;
  loading: boolean;
  reachedEnd: boolean;
}

const loadPreviousClass = cva({
  base: "mt-2 p-2 w-fit",
  variants: {
    reachedEnd: {
      true: "text-gray-500 text-center cursor-not-allowed",
      false: "aspect-square bg-white shadow rounded-full hover:shadow-md transition-shadow cursor-pointer",
    },
  },
});

export function LoadPrevious({
  onClick,
  loading,
  reachedEnd,
}: LoadPreviousProps) {
  return reachedEnd ? (
    <p className={loadPreviousClass({ reachedEnd })}>
      You reached the end of this conversation.
    </p>
  ) : (
    <button
      className={loadPreviousClass({ reachedEnd })}
      aria-label="Load previous"
      type="button"
      onClick={onClick}
      disabled={loading}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 6L12 2L16 6" />
        <path d="M12 2V22" />
      </svg>
    </button>
  );
}
