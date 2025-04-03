export default function Avatar({ letter }) {
  return (
    <div className=" flex items-center justify-center rounded-full bg-rose-300 dark:bg-rose-600 w-10 h-10 place-content-center">
      <span className="mb-0.5">{letter}</span>
    </div>
  );
}
