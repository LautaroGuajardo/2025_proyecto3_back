class AuthService {
  // Placeholder: validate credentials against DB (to implement)
  validateCredentials(
    email: string,
    password: string,
  ): Promise<{ id: string; email: string } | null> {
    // For scaffold: accept a single default user
    if (email === 'admin@example.com' && password === 'password')
      return Promise.resolve({ id: '1', email });
    return Promise.resolve(null);
  }
}

export default AuthService;
