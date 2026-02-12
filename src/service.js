const quotes = [
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.', author: 'Winston Churchill' },
  { text: "Believe you can and you're halfway there.", author: 'Theodore Roosevelt' },
  { text: "Don't watch the clock; do what it does. Keep going.", author: 'Sam Levenson' },
  { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
];

export function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export function registerUser(email, password) {
  console.log(`Registering user with email: ${email} and password: ${password}`);

  const textStorage = localStorage.getItem('users') || '[]';
  const users = JSON.parse(textStorage);

  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
}

export function loginUser(email, password) {
  console.log(`Logging in user with email: ${email} and password: ${password}`);

  const textStorage = localStorage.getItem('users') || '[]';
  const users = JSON.parse(textStorage);

  return users.find((u) => u.email === email && u.password === password);
}
