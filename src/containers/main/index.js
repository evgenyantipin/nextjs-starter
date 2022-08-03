import Layout from "layouts/Main";
import DoctorList from "components/DoctorList";
import items from "assets/mock.json";

const IndexPage = ({ items }) => (
  <Layout>
    <DoctorList items={items.data} />
  </Layout>
);

IndexPage.getInitialProps = async (ctx) => {
  return { items };
};

export default IndexPage;
