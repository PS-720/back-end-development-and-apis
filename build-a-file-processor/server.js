// Starter file — add your code here
// const http = require("http");
const fs = require("fs");
// console.log(fs);

const data = fs.readFileSync("assets/poem.txt", { encoding: 'utf8' });
// console.log(data);

fs.readFile("assets/poem.txt", {encoding: 'utf8'}, (err, data) => {
        // console.log(data);
    });
    
const fsPromises = require("fs/promises");
async function main() {
    const data = await fsPromises.readFile("assets/poem.txt", {encoding: "utf8"});
    // console.log(data);
}

main();

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
fs.appendFileSync("assets/output.txt", "\nSecond line");

const exists = fs.existsSync("assets/output.txt");
// console.log(exists);

const entries = fs.readdirSync("assets");
// console.log(entries);

const buf = Buffer.from("Hello, Node!")
// console.log(buf);
// console.log(buf.toString("hex"))
// console.log(buf.toString("base64"))

const buf2 = Buffer.alloc(8, 0xff);
// console.log(buf2)

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
// console.log(decoded);

const crypto = require("crypto")
const hash = crypto.createHash("sha256").update("hello").digest("hex")
// console.log(hash)

const random = crypto.randomBytes(16).toString("hex")
// console.log(random)

const id = crypto.randomUUID()
// console.log(id)

const os = require("os");
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.hostname())

// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.uptime())

// console.log(os.cpus().length)

const path = require("path")
const fullPath = path.join(__dirname, "assets", "poem.txt");
// console.log(fullPath);

// console.log(path.basename(fullPath))
// console.log(path.dirname(fullPath))
// console.log(path.extname(fullPath))

// console.log(path.join('assets', '..', 'server.js'));
// console.log(path.resolve("assets", "..", "server.js"));

const parts = path.parse("/home/user/assets/poem.txt");
// console.log(parts)

// console.log(process.version)
// console.log(process.platform)
// console.log(process.env.NODE_ENV)

// console.log(process.argv)
// console.log(process.argv[2])

// process.stdout.write("Hello from stdout\n")
// process.stderr.write("Hello from stderr\n")

const readable = fs.createReadStream("assets/poem.txt", {encoding: "utf8"});
// readable.on("data", (chunk) => {
//     console.log(chunk);
// });

// readable.on("end", () => {
//     console.log("Done Reading");
// });

const writable = fs.createWriteStream("assets/stream-output.txt");
// writable.write("First chunk\n");
// writable.write("Second chunk\n");
// writable.end();

readable.pipe(writable);