const args = process.argv.slice(2);

const value = Number(args[0]);

if (isNaN(value)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < value; i++) {
    console.log('X'.repeat(value));
  }
}


