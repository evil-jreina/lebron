# lebron

Reads the text from a single Tweet and executes the result.  
This is incredibly dangerous and should only be run if you have inspected the source of the Tweet, and probably not even then. Executing code can allow an attacker to do pretty much anything you can do in Node in <181 chars.

## Running

Populate your Twitter API details in a `.env` file:

```
CONSUMER_KEY=<consumer-key>
CONSUMER_SECRET=<consumer-secret>
ACCESS_TOKEN_KEY=<access-token-key>
ACCESS_TOKEN_SECRET=<access-token-secret>
```

Then run the following:

```bash
npm install
```

If you are using VS Code, you can set breakpoints wherever you want and press `F5`. The defaults will fetch the `map` function and square a set of numbers.
