import { useEffect, useState } from 'react';

const useWidth = () => {
    const [width, setWidth] = useState(-1);
    const handleResize = () => setWidth(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    useEffect(() => {
        handleResize()
    }, []);
    return width;
};

export default useWidth;