"use client";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface NextImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Accepted for next/image call-site compatibility; not forwarded to the img. */
  fill?: boolean;
}

const NextImage = ({
  src,
  alt,
  width,
  height,
  className,
  fill: _fill,
  ...props
}: NextImageProps) => {
  return (
    <LazyLoadImage
      effect="blur"
      height={height}
      className={className || "rounded-md"}
      width={width}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default NextImage;
