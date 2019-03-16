import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import { initializeStore } from "store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }
  render() {
    const { Component, pageProps, store, router } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component router={router} {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

// export default withReduxStore(MyApp);
export default withRedux(initializeStore, { debug: false })(MyApp);
