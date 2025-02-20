# Around Front End Challenge 💻 🎟️
---
<p align="center">
<img width="368" alt="image" src="https://github.com/AroundTo/frontendChallenge/assets/8725846/46edfec9-b70e-4bcf-a5a8-559b4c8d8f1b">
</p>
---

Welcome to the Around Front End Challenge! This challenge is designed to assess your front-end development skills using React, Typescript and multiple technologies. Please read the following instructions and guidelines before starting the challenge.

---
NOTE: if any of the following topics is not clear, please feel free to ask us any question, or make any assumption that you consider necessary to complete the challenge.

## Instructions
1. Fork this repo.
2. Modify the code to complete the challenge.
3. Create a pull request to submit your solution.

## Challenge
1. Create a route to visualize all products with their reviews and be able to add one more.
2. Create a route to visualize all reviews with their products and be able to add one more.
any propusal in terms of design and UX will be welcome.
<p align="center">
<img width="355" alt="image" src="https://github.com/AroundTo/frontendChallenge/assets/8725846/0e47dbeb-5d92-4949-9e28-c39aff940c78">
<img width="230" alt="image" src="https://github.com/AroundTo/frontendChallenge/assets/8725846/0d880c34-ed9d-420d-8e79-a4edaeaa6822">
</p>

**That's it!** You can use any additional libraries or frameworks you want, but make sure to follow the guidelines below.

## Things to evaluate from high to low priority

While evaluating your submission, we will consider the following aspects:


1. Usage of `Typescript`
2. Usage of `eslint.js` , `prettier.js` and `tsconfig.json` attached to the project
3. Be able to use `GraphQL`
 schema and graphQL endpoint:
```https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql```
4. Usage of `subscriptions` to update the UI in real time from any other client
5. Design and UX proposal

## Extra Topics to Evaluate

1. **Code structure and organization:** Is the code logically structured, modular, and easy to understand?
3. **Filtering:** Any proposal to filter the data from UI or graphql query
4. **Tech stach:** Do you suggest any tecnology or library to improve the project?
5. **Typing GraphQL** Do you suggest any way to type the graphql schema?
4. **Rules** Do you consider that the previous rules are not enough or should be different?, be free to propose any change to the rules in your PR 
3. **Responsive design:** Does the application provide a flawless user experience across different devices and screen sizes?
4. **Documentation:** We love self explanatory code, but we also like any kind of documentation that you consider necessary to understand your code
6. **Extra features:** Any extra feature that you consider that could be useful for the project

Feel free to reach out if you have any questions or need further clarification. Good luck, and happy coding! 🚀

## Environment Variables

To run this project, you'll need to add the following env vars to you `.env`:

```terminal
REACT_APP_GRAPHQL_API=https://...
REACT_APP_GRAPHQL_API_WSS=wss://...
````

You can also make a copy of content from `.env.sample` then replace the vars values with the correct ones.


## Running locally

#### Install all dependecies

```bash
  npm install
```

#### Generate GraphQL typing

make sure to update `.codegen.ts` with the correct API URL that will be used to generate types.

```javascript
/* codegen.ts*/
const config: CodegenConfig = {
  [...]
  schema: 'https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql',
  [...]
}
```

then run:

```bash
  npm run graphql:generate
```

#### Start the server

```bash
  npm start
```

### running locally on watch mode

If you plan to change GraphQL queries/mutation/subscription while coding, you can run the following command that will watch for every change avoiding running `npm run graphql:generate` and `npm start` separately.

```
  npm run dev
```


## Utility scripts

#### Check for eslint errors:

```bash
  npm run lint
```

#### Check and fix eslint errors:

```bash
  npm run lint:fix
```

#### Run GraphQL Playground:

make sure to update `./src/graphql/playground/graphqlPlayground.js` with the correct API URL:

```javascript
[...]
const GRAPHQL_API = 'https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql';
[...]
```

then run:

```bash
  npm run graphql:play
```

