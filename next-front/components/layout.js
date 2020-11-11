import Head from 'next/head';
import Navigation from "./navigation";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Store NextJS</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css" />
            </Head>
            <Navigation/>
            <div className="container p-4">{props.children}</div>
        </div>
    )
};

export default Layout;