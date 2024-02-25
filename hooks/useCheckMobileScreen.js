// https://stackoverflow.com/a/64218472/10268898

import { useEffect, useState } from "react";

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(0);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        setWidth(window.innerWidth);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return width <= 768;
};

export default useCheckMobileScreen;
