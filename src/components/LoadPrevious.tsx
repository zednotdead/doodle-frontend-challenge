import { cx } from "../utils/cva";

interface LoadPreviousProps {
  onClick: () => void;
  loading: boolean;
  className?: string;
}

export function LoadPrevious({
  onClick,
  loading,
  className,
}: LoadPreviousProps) {
  return (
    <button
      className={cx(
        "aspect-square p-2 bg-white shadow rounded-full w-fit hover:shadow-md transition-shadow cursor-pointer",
        className,
      )}
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
