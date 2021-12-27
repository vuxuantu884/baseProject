import { Result } from "antd";
import { useTranslation } from "react-i18next";


export const PageError404 = () => {
    //page hook
    const { t } = useTranslation();
    return  <Result status="404" title="404" subTitle={t("message.page_404")} />;
};
