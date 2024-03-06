import { useEffect, useState } from "react";
import { ImageCarouselProps, ImageItem } from "./types";
import { FcNext, FcPrevious } from "react-icons/fc";
import { GoDot } from "react-icons/go";

const ImageCarousel = ({ url, page, limit }: ImageCarouselProps) => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    const result = await fetch(`${url}?page=${page}&limit=${limit}`);
    const data = await result.json();
    setImages(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchImages();
  }, [url, page, limit]);

  const handlePrev = () => {
    setCurrentImage(() =>
      currentImage === 0 ? images.length - 1 : currentImage - 1
    );
  };

  const handleNext = () => {
    setCurrentImage(() =>
      currentImage === images.length - 1 ? 0 : currentImage + 1
    );
  };

  const handleChangePicture = (index: number) => {
    setCurrentImage(index);
  };
  return (
    <p>
      <p className="text-center mb-5">Image Carousel</p>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="bg-slate-800 relative p-5 w-3/4 m-auto">
          {images.length &&
            images?.map((image: ImageItem, index) => {
              return (
                <>
                  <div
                    key={image.download_url}
                    className={index === currentImage ? `relative` : "hidden"}
                  >
                    <span
                      className="absolute bottom-1/2 left-5 hover:scale-150"
                      onClick={handlePrev}
                    >
                      <FcPrevious />
                    </span>
                    <img alt={image.download_url} src={image.download_url} />
                    <span
                      className="absolute bottom-1/2 right-5 hover:scale-150"
                      onClick={handleNext}
                    >
                      <FcNext />
                    </span>
                  </div>
                </>
              );
            })}
          <div className="flex justify-center mt-2 absolute bottom-8 left-0 right-0">
            {images.map((_, index) => (
              <span
                key={index}
                className={
                  currentImage === index ? "text-blue-500 mx-1" : "mx-1"
                }
                onClick={() => handleChangePicture(index)}
              >
                <GoDot />
              </span>
            ))}
          </div>
        </div>
      )}
    </p>
  );
};

export default ImageCarousel;
