import AuthState from '../context/auth/authState';
import AppState from '../context/app/appState';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <AppState>
        <title>ReactNodeSend</title>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  );
}

export default MyApp;