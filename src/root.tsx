import { BinaryClock } from "./components/binary-clock";

export const Root = () => {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body lang="en">
                <BinaryClock />
            </body>
        </html>
    );
};
