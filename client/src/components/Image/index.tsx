import { LazyLoadImage } from "react-lazy-load-image-component"

type Image = {
    alt?: string;
    src?: string;
    className?: string;
}
function Image({ alt, src, className }: Image) {
    return (
        <LazyLoadImage
            alt={alt}
            src={src}
            effect="blur"
            wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: "1s" },
            }}
            className={className}
        />
    );
}

export default Image;