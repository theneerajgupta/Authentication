import bcrypt from 'bcrypt';

interface User {
    email: string;
    password: string;         // hashed password
}

const users: User[] = [];

export async function registerUser(email: string, password: string) {
    const existingUser = users.find((u: User) => u.email === email);
    if (existingUser) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });

    console.log("---------------------------------------------------------------------------");
    console.log(`Email: ${email} / Password: ${password}`);
    console.log(`Hashed Password: \n${users.find((u: User) => u.email === email)?.password}`);

    return true;
}

export async function loginUser(email: string, password: string) {
    const user = users.find((u: User) => u.email === email);
    console.log("---------------------------------------------------------------------------");
    if (!user) throw new Error("Invalid Credential - User Not Found");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid Credential - Incorrect Password");

    console.log(`Email: ${email}`);
    console.log(`Entered Password: ${password}`);
    console.log(`isValid: ${isValid}`);

    return ({ password });
}

export function getUsers() {
    return users.map((u: User) => ({ email: u.email, password: u.password }));
}
