import AuthState from '../context/auth/authState';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <title>ReactNodeSend</title>
      <Component {...pageProps} />
    </AuthState>
  );
}

export default MyApp;