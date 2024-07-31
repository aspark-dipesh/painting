import Image from "next/image";
import React, { useRef, useEffect } from "react";

interface ImageZoomProps {
  src: string;
  imgId: string;
  alt: string;
  onZoom: (
    src: string,
    width: number,
    height: number,
    x: number,
    y: number
  ) => void;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, imgId, alt, onZoom }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      const parentDiv = document.getElementById("result-parent");
      const width = parentDiv?.offsetWidth || 300;
      const height = width * (4 / 3);
      const lens = document.createElement("DIV");
      lens.setAttribute("class", "img-zoom-lens ");

      img.parentElement?.insertBefore(lens, img);
      let cx = width / lens.offsetWidth;
      let cy = height / lens.offsetHeight;

      const moveLens = (e: MouseEvent | TouchEvent) => {
        e.preventDefault();

        const pos = getCursorPos(e);
        let x = pos.x - lens.offsetWidth / 2;
        let y = pos.y - lens.offsetHeight / 2;

        if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
        if (x < 0) x = 0;
        if (y > img.height - lens.offsetHeight)
          y = img.height - lens.offsetHeight;
        if (y < 0) y = 0;

        lens.style.left = x + "px";
        lens.style.top = y + "px";
        onZoom(src, img.width * cx, img.height * cy, x * cx, y * cy);
      };

      const getCursorPos = (e: MouseEvent | TouchEvent) => {
        const a = img.getBoundingClientRect();
        const x =
          ("touches" in e ? e.touches[0].pageX : e.pageX) -
          a.left -
          window.pageXOffset;
        const y =
          ("touches" in e ? e.touches[0].pageY : e.pageY) -
          a.top -
          window.pageYOffset;
        return { x, y };
      };

      lens.addEventListener("mousemove", moveLens);
      img.addEventListener("mousemove", moveLens);
      lens.addEventListener("touchmove", moveLens);
      img.addEventListener("touchmove", moveLens);

      return () => {
        lens.removeEventListener("mousemove", moveLens);
        img.removeEventListener("mousemove", moveLens);
        lens.removeEventListener("touchmove", moveLens);
        img.removeEventListener("touchmove", moveLens);
        lens.remove();
      };
    }
  }, [src, onZoom]);

  return (
    <div className="img-zoom-container relative w-full  " id="img-div">
      <Image
        id={imgId}
        src={src}
        alt={alt}
        ref={imgRef}
        fill
        sizes="(max-width: 800px) 100vw, 50vw"
        className="z-0 !relative"
      />
    </div>
  );
};

export default ImageZoom;
