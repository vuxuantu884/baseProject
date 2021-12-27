import { Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { ComponentAppRoute } from "@components";
import { routes } from "@configs";
import { IRoute } from "@interfaces";
import { ComponentToast } from "src/Components/Toast";


export const ModuleMain = () => {

    return (
        <BrowserRouter>
            <Switch>
                {routes.map((e: IRoute, key) => (
                    <ComponentAppRoute key={key} {...e} />
                ))}
            </Switch>
            <ComponentToast />
        </BrowserRouter>
    );
};
