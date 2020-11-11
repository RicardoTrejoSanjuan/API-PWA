import Head from "next/head";
import Layout from "../components/Layout";
import DataRow from "../components/data-row";

const Index = (props) => {

    if (props.error) return <div>failed to load!!</div>

    return (
        <Layout>
            <Head>
                <title>NextJS</title>
            </Head>
            <h1>Employees</h1>
            <br/>
            <br/>
            <DataRow employees={props.employees.employee}></DataRow>
        </Layout>
    );
};

Index.getInitialProps = async (ctx) => {
    try {
        const res = await fetch("http://localhost:3001/employee");
        const resJSON = await res.json();
        return {employees: resJSON.detail};
    } catch (error) {
        return {error};
    }
};

export default Index;