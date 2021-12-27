import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import { enumValidation } from "@configs";

export const YubEmailSignUp = () => {
    //page hook
    const { t } = useTranslation();
    return {
        email: Yup.string()
            .required(
                t("validation.required", {
                    name: t("page.auth.email"),
                })
            )
            .email(t("validation.email_invalid"))
            .max(
                enumValidation.MAX_LENGTH_INPUT,
                t("validation.max", {
                    name: t("page.auth.email"),
                    number: enumValidation.MAX_LENGTH_INPUT ,
                })
            ),
    };
};

export const YubEmailSignIn = () => {
    //page hook
    const { t } = useTranslation();
    return {
        email: Yup.string()
            .required(
                t("validation.required", {
                    name: t("page.auth.email"),
                })
            )
            .email(t("validation.email_invalid"))
            .max(
                enumValidation.MAX_LENGTH_INPUT,
                t("validation.max", {
                    name: t("page.auth.email"),
                    number: enumValidation.MAX_LENGTH_INPUT,
                })
            ),
        password: Yup.string()
            .required(
                t("validation.required", {
                    returnObjects: true,
                    name: t("page.auth._password"),
                })
            )
            .min(
                enumValidation.MIN_PASSWORD,
                t("validation.min", {
                    returnObjects: true,
                    name: t("page.auth._password"),
                    number: enumValidation.MIN_PASSWORD,
                })
            )
            .max(
                enumValidation.MAX_PASSWORD,
                t("validation.max_length_number", {
                    returnObjects: true,
                    name: t("page.auth._password"),
                    number: enumValidation.MAX_PASSWORD,
                })
            ),
    };
};

export const YubEmailSignUpForm = () => {
    //page hook
    const { t } = useTranslation();
    return {
        fullName: Yup.string()
            .required(
                t("validation.required", {
                    returnObjects: true,
                    name: t("page.auth.name"),
                })
            )
            .max(
                enumValidation.MAX_LENGTH_INPUT,
                t("validation.max_length_number", {
                    returnObjects: true,
                    name: t("page.auth.name"),
                    number: enumValidation.MAX_LENGTH_INPUT,
                })
            ),
        password: Yup.string()
            .required(
                t("validation.required", {
                    returnObjects: true,
                    name: t("page.auth._password"),
                })
            )
            .min(
                enumValidation.MIN_PASSWORD,
                t("validation.min", {
                    returnObjects: true,
                    name: t("page.auth._password"),
                    number: enumValidation.MIN_PASSWORD,
                })
            )
            .max(
                enumValidation.MAX_PASSWORD,
                t("validation.max_length_number", {
                    returnObjects: true,
                    name: t("page.auth._password"),
                    number: enumValidation.MAX_PASSWORD,
                })
            ),
        conformPassword: Yup.string()
            .required(
                t("validation.required", {
                    returnObjects: true,
                    name: t("page.auth.confirm_password"),
                })
            )
            .oneOf([Yup.ref("password"), null], t("validation.confirm_password_must_match")),
        acceptTermsAndConditions: Yup.boolean().oneOf([true], t("validation.acceptTermsAndConditions")),
    };
};
