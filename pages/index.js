export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <h1
        className="text-white text-4xl cursor-pointer"
        onClick={() => window.location.href = '/home'}
      >
        MOX-ART
      </h1>
    </div>
  );
}