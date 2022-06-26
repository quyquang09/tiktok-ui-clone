import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.Wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        ></img>
    );
});

export default Image;
