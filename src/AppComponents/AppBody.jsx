import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { MessageContext } from "../Context/MessageContext";
import { Outlet, useNavigation } from "react-router-dom";
import { mainCardHeadStyle, mainCardStyle } from "../utilities/styleObjects";
import { Breadcrumb, Card, Layout } from "antd";
import AppHeader from "./AppHeader";
import CustomLoadingIndecator from "./CustomLoadingIndecator";
import { Helmet } from "react-helmet";
const { Content, Footer } = Layout;

const AppBody = () => {
  const navigation = useNavigation();
  const { appInnerHeadContent, loading } = useContext(AppContext);
  const { contextHolder } = useContext(MessageContext);

  return (
    <Layout>
      <Helmet>
        <title>{appInnerHeadContent.name}</title>
      </Helmet>
      <AppHeader />
      <Content>
        <div className="app-div-container">
          {contextHolder}
          <CustomLoadingIndecator
            loading={navigation.state === "loading" ? true : loading}
          >
            <Card
              title={
                <>
                  <Breadcrumb items={appInnerHeadContent.breadcrumbItems} />
                  <div style={{ color: "#52c41a" }}>
                    {appInnerHeadContent.name}
                  </div>
                </>
              }
              headStyle={mainCardHeadStyle}
              bodyStyle={mainCardStyle}
            >
              <Outlet />
            </Card>
          </CustomLoadingIndecator>
        </div>
      </Content>
      <Footer>SafetyHood ©2023 Created by SafetyHood</Footer>
    </Layout>
  );
};
export default AppBody;

