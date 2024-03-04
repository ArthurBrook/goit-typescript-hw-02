type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(updateValues: Partial<User>): void {
  console.log('User updated:', updateValues);
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });
