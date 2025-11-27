import { useState } from "react";
import { X } from "lucide-react";

const photos = Array.from({ length: 9 }, (_, i) => ({
  url: `https://picsum.photos/600/400?random=${i + 1}`,
  alt: `Lab photo ${i + 1}`,
}));

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold">Gallery</h2>
      <p className="mt-4 text-lg text-foreground/80">
        Visual highlights from our research activities, events, and lab facilities.
      </p>
      
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <button
            key={i}
            className="rounded-lg overflow-hidden hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setSelectedPhoto(photo.url)}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-48 object-cover"
            />
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selectedPhoto}
            alt="Expanded view"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
