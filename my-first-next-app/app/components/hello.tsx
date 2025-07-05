"use client";

async function Hello() {
  console.log("I am a Client Component");
  const response = await fetch("https://hello.com");

  if (!response.ok){
    throw new Error("Failed to fetch data");
  }

  const albums = await response.json();

  return (
    <div>
      <h1>Album Fetch:</h1>
      albums ?
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
          {albums.map((album: { id: number; title: string }) => (
            <div className="bg-white shadow-md rounded-lg p-4 transition t...">
              <h3 className="text-lg font-bold mb-2">{album.title}</h3>
              <p className="text-gray-600">Album Id: {album.id}</p>
            </div>
          ))}
        </div>
      </>
      : <>
      </>
    </div>
  );
}

export default Hello;
