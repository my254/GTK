import '../styles/globals.css'
import 'antd/dist/reset.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
