import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { openToast } from "@redux";

export const useNotify = () => {
    //hook
    const dispatch = useDispatch();

    const errorMessage = useCallback((message: string, duration? : number) => {
        dispatch(
            openToast({
                message: message,
                type: "error",
                autoHideDuration: duration || 2000,
            })
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const successMessage = useCallback((message: string, duration?: number) => {
        dispatch(
            openToast({
                message: message,
                type: "success",
                autoHideDuration: duration || 2000,
            })
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const warningMessage = useCallback((message: string, duration?: number) => {
        dispatch(
            openToast({
                message: message,
                type: "warning",
                autoHideDuration: duration || 2000,
            })
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        error: errorMessage,
        success: successMessage,
        warning: warningMessage,
    };
};
