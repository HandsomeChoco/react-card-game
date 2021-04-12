import React from 'react';
import Layout from '../components/login/Layout';

const LayoutContainer = ({ children }) => {
    return(
        <Layout>
            {children}
        </Layout>
    );
}

export default LayoutContainer;