import dotenv from 'dotenv';
import readline from 'readline';
import { connectDB } from '../config/db.js';
import Admin from '../models/Admin.js';

dotenv.config();

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

const run = async () => {
  try {
    await connectDB();

    const email = process.argv[2] || (await ask('Admin email: '));
    const password = process.argv[3] || (await ask('Password: '));
    const name = process.argv[4] || 'Admin';

    let admin = await Admin.findOne({ email });
    if (admin) {
      admin.password = password;
      admin.name = name || admin.name;
      await admin.save();
      console.log('Admin updated');
    } else {
      await Admin.create({ email, password, name });
      console.log('Admin created');
    }
  } catch (err) {
    console.error('Failed to seed admin', err);
  } finally {
    rl.close();
    process.exit(0);
  }
};

run();
