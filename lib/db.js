export const simpleHash = (password) => {
  if (password === "admin123") return "hashed-admin123";
  return null;
};

export async function getUserFromDb(email, pwHash) {
  const users = [
    {
      username: "Admin",
      email: "admin@gmail.com",
      passwordHash: "hashed-admin123", // Already hashed password
    },
  ];

  // Find the user by email and compare the stored hash with the provided hash
  const user = users.find(
    (user) => user.email === email && user.passwordHash === pwHash
  );

  return user || null;
}
