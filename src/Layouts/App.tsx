import { Layout, Spin } from "antd";

import { StyledContainer, StyledPageInner } from "@components";
import { ILayout } from "@interfaces";

export const LayoutApp = (props: ILayout) => {
    return (
        <Spin spinning={false} tip="Loading..." size="large">
            <StyledContainer>
                <Layout className="workspace">
                    <Layout.Content>
                        <StyledPageInner >
                            {props.children}
                        </StyledPageInner>
                    </Layout.Content>
                </Layout>
            </StyledContainer>
        </Spin>
    );
};
