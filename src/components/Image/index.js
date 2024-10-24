import { forwardRef, useState } from "react";
import Images from "~/assets/images";

function Image(
    { alt, src, fallback: srcError = Images.eronImg, ...props },
    ref
) {
    const [fallback, setFallback] = useState("");
    const handleErron = () => {
        setFallback(srcError);
    };
    return (
        <img
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleErron}
        />
    );
}

export default forwardRef(Image);
