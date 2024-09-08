
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NotFoundPage404 from './Pages/NotFoundPage';
import Layout from './components/ui/Layout';
import AdminDashboard from './Pages/AdminDashboard';
import EnduserDashboard from './Pages/EnduserDashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="enduser" element={<EnduserDashboard />} />
         
          <Route path="*" element={<NotFoundPage404 />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
