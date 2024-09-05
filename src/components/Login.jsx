import React, { useEffect, useState } from 'react'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Mock backend istifadə edərək yoxlayırıq
      if (email === 'user@example.com' && password === 'password') {
        const token = 'mockToken'; // Mock token
        localStorage.setItem('authToken', token);
        window.location.href = 'http://localhost:3001/dashboard'; // Dashboard layihəsinə yönləndirin
      } else {
        setError('Yanlış e-mail və ya şifrə');
      }
    };


  return (
    <div>
    <h2>Giriş</h2>
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Şifrə"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Giriş</button>
    </form>
    {error && <p>{error}</p>}
  </div>



  )
}

export default Login