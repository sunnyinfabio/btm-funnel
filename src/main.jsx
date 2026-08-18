import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'monospace', background: '#0F172A', color: '#F8FAFC', minHeight: '100vh' }}>
          <h1 style={{ color: '#EF4444', fontSize: '24px', marginBottom: '16px' }}>Runtime Render Error Encountered</h1>
          <pre style={{ background: '#1E293B', padding: '20px', borderRadius: '8px', color: '#FCD34D', overflow: 'auto' }}>
            {this.state.error?.toString()}
          </pre>
          <pre style={{ background: '#1E293B', padding: '20px', borderRadius: '8px', color: '#94A3B8', marginTop: '16px', overflow: 'auto' }}>
            {this.state.errorInfo?.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
