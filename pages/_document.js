import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, ...page, styleTags };
    }

    render() {
        return (
            <html lang="en">
                <Head >
					{this.props.styleTags}
				</Head>
                <body>
                    <Main />
                    <NextScript />
					<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />
				</body>
            </html>
        );
    }
}


export default MyDocument;