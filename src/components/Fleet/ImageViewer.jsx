import React, { useState, useEffect, useCallback } from "react";
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const VisualTourGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === "Escape") closeLightBox();
    if (e.key === "ArrowLeft") prevImage(e);
    if (e.key === "ArrowRight") nextImage(e);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const openLightBox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightBox = () => {
    setIsOpen(false);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* --- GRID VIEW (Thumbnails) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openLightBox(index)}
            className="relative aspect-video rounded-sm overflow-hidden shadow-md group cursor-pointer"
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-transparent transition-colors duration-300"></div>

            {/* Expand Icon - Always visible in bottom right */}
            <div className="absolute bottom-3 right-3 bg-ink-950/60 backdrop-blur-sm text-ink-50 p-2 rounded-sm border border-ink-50/20 transition-transform duration-300 group-hover:scale-110 z-10">
              <div className="flex items-center gap-2">
                 <span className="text-[10px] uppercase font-bold tracking-widest hidden md:block">Expand</span>
                 <FaExpand className="text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {isOpen && (
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink-950/90 backdrop-blur-md"
            onClick={closeLightBox}
        >
          {/* Close Button - Fixed to Screen (Independent of Image) */}
          <button
            onClick={closeLightBox}
            className="absolute top-4 right-4 text-ink-50/70 hover:text-ink-50 z-50 p-2 cursor-pointer transition-colors"
          >
            <FaTimes size={30} />
          </button>
          <div 
            className="relative max-w-[90vw] max-h-[90vh] group"
            onClick={(e) => e.stopPropagation()} 
          >
            
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
            />

            {/* Text Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-ink-950/60 backdrop-blur-md px-4 py-2 rounded-sm border border-ink-50/10 text-center pointer-events-none z-20 w-max max-w-[90%]">
                <p className="text-ink-50 text-sm font-medium">{images[currentIndex].alt}</p>
            </div>

            {/* --- NAVIGATION BUTTONS (Floating inside Image Wrapper) --- */}
            
            {/* Prev Button */}
            <div
              onClick={prevImage}
              className="absolute top-0 bottom-0 left-0 w-12 md:w-16 bg-ink-950/40 flex items-center justify-center text-ink-50 cursor-pointer transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-30"
            >
              <FaChevronLeft size={32} />
            </div>

            {/* Next Button */}
            <div
              onClick={nextImage}
              className="absolute top-0 bottom-0 right-0 w-12 md:w-16 bg-ink-950/40 flex items-center justify-center text-ink-50 cursor-pointer transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-30"
            >
              <FaChevronRight size={32} />
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default VisualTourGallery;