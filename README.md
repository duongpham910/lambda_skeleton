# lambda_skeleton

This project contains source code and supporting files for a serverless application that you can deploy with the AWS Serverless Application Model (AWS SAM) command line interface (CLI). It includes the following files and folders:

- `src` - Code for the application's Lambda function.
- `events` - Invocation events that you can use to invoke the function.
- `__tests__` - Unit tests for the application code.
- `template.yml` - A template that defines the application's AWS resources.

Resources for this project are defined in the `template.yml` file in this project. You can update the template to add AWS resources through the same deployment process that updates your application code.

If you prefer to use an integrated development environment (IDE) to build and test your application, you can use the AWS Toolkit.
The AWS Toolkit is an open-source plugin for popular IDEs that uses the AWS SAM CLI to build and deploy serverless applications on AWS. The AWS Toolkit also adds step-through debugging for Lambda function code.

To get started, see the following:

* [PyCharm](https://docs.aws.amazon.com/toolkit-for-jetbrains/latest/userguide/welcome.html)
* [IntelliJ](https://docs.aws.amazon.com/toolkit-for-jetbrains/latest/userguide/welcome.html)
* [VS Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html)
* [Visual Studio](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/welcome.html)

## Config sam api

Config file template.yml with this line:

```console
Resources:
  helloFromLambdaFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: src/app.handler
      Runtime: nodejs10.x
      MemorySize: 1024
      Timeout: 100
      Description: A Lambda function that returns a static string.
      Events:
        Api:
          Type: Api
          Properties:
            Path: /hello
            Method: get
```

To run API Gateway Locally:

```console
sam local start-api
```

## Config eslint and prettier for syntax javascript

Install eslint and prettier with this command

```
yarn add eslint
yarn add prettier
yarn add eslint-config-prettier
yarn add eslint-plugin-prettier
```

Config eslint with this file `.eslintrc.json`. Refer to this document https://viblo.asia/p/hay-su-dung-eslint-cho-du-an-cua-ban-bJzKm07O59N

```console
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jquery": true
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "globals": {},
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["prettier"],
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "prettier/prettier": "error"
  }
}
```

Config prettier with this file `.prettierrc.json`

```console
{
  "printWidth": 130,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "bracketSpacing": true,
  "singleQuote": true,
  "overrides": [
    {
      "files": ["*.yml", "*.scss"],
      "options": {
        "singleQuote": false
      }
    }
  ]
}
```

Add to script inside to package.json

```console
"eslint": "eslint src/ --fix"
```

## Add a resource to your application



## Unit tests

Tests are defined in the `__tests__` folder in this project. Use `npm` to install the [Jest test framework](https://jestjs.io/) and run unit tests.

```bash
my-application$ npm install
my-application$ npm run test
```

## Cleanup

To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
aws cloudformation delete-stack --stack-name lambda_skeleton
```

## Resources

For an introduction to the AWS SAM specification, the AWS SAM CLI, and serverless application concepts, see the [AWS SAM Developer Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html).

Next, you can use the AWS Serverless Application Repository to deploy ready-to-use apps that go beyond Hello World samples and learn how authors developed their applications. For more information, see the [AWS Serverless Application Repository main page](https://aws.amazon.com/serverless/serverlessrepo/) and the [AWS Serverless Application Repository Developer Guide](https://docs.aws.amazon.com/serverlessrepo/latest/devguide/what-is-serverlessrepo.html).
