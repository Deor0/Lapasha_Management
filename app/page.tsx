
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"></div>
      <div className="bg-primary-foreground p-4 rounded-lg"></div>
      <div className="bg-primary-foreground p-4 rounded-lg"></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"></div>
      <div className="bg-primary-foreground p-4 rounded-lg"></div>
      <div className="bg-primary-foreground p-4 rounded-lg"></div>
    </div>
  );
}
