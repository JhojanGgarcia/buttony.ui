import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="/static/favicon-dark.ico"
            media="(prefers-color-scheme: light)"
          />
          <link
            rel="icon"
            href="/static/favicon-light.ico"
            media="(prefers-color-scheme: dark)"
          />
          <meta
            name="description"
            content="Discover our collection of animated buttons, perfect for adding a dynamic touch to your web projects."
          />
        </Head>
        <body className="bg-foreground dark:bg-background m-0 box-border overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
