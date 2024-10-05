# Playwright Automation Project - Saucedemo

This project is an automated test suite built using [Playwright](https://playwright.dev/) with TypeScript. The goal is to automate adding an item to the cart, navigating to checkout, and completing a purchase on [Saucedemo](https://www.saucedemo.com).

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Running the Tests](#running-the-tests)
- [Test Reports](#test-reports)
- [Test Data](#test-data)
- [Contributing](#contributing)
- [Sample Test Run](#sample-test-run)

## Project Overview

The automation script performs the following steps on Saucedemo:

1. Navigate to [https://www.saucedemo.com](https://www.saucedemo.com).
2. Login using provided credentials.
3. Add the product **"Sauce Labs Bike Light"** to the cart.
4. Navigate to the cart.
5. Proceed to checkout.
6. Fill in the checkout information.
7. Complete the purchase.
8. Verify the success message **"THANK YOU FOR YOUR ORDER"**.

## Technologies Used

- **Playwright**: End-to-end testing framework.
- **TypeScript**: Type-safe programming language.
- **Allure Reports**: Reporting tool for Playwright test results.
- **Node.js**: JavaScript runtime environment.

## Project Structure

```bash
your-project/
├── page-objects/
│   ├── LoginPage.ts              # Page Object Model for the login page
│   ├── addToCart.ts              # Page Object Model for adding items to the cart
│   ├── HelperBase.ts             # Helper methods and base class for common utilities
├── tests/
│   ├── addToCart.spec.ts         # Test case for adding items to cart and checkout
├── data/
│   ├── testData.ts               # Test data (username, password, etc.)
├── reports/                      # Allure reports directory
├── playwright.config.ts          # Playwright configuration file
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
```
## Explanation of Key Files

- **LoginPage.ts**: Contains methods for logging into Saucedemo.
- **addToCart.ts**: Handles adding products to the cart and navigating through the checkout process.
- **testData.ts**: Stores test data like login credentials and checkout information.
- **addToCart.spec.ts**: The test case script that drives the full process (login, add to cart, checkout).

## Prerequisites

Before setting up the project, ensure the following software is installed:

Node.js (version 14 or higher)
npm (comes with Node.js)
Git
Playwright
Allure (for test reporting)
To install Allure globally via npm:
```bash
npm install -g allure-commandline --save-dev
```

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/TarekAshraf96/DigitalDubaiAutomation.git
```
2. Install project dependencies:
   Run the following command to install all required packages:
```bash
npm install
```
3. Install PlayWright Latest version:
```bash
npm init playwright@latest --force
```

## Running the Tests

To run a specific test (e.g., addToCart.spec.ts):
```bash
npx playwright test tests/addToCart.spec.ts
```
or Run the test manually from the PlayWright Test Explorer

## Running Tests with Allure Reporting

After Running Tests, Apply the following command to generate the Allure Report:
```bash
allure generate ./allure-results -o ./allure-report --clean
```
Then Run the following command to open the report:
```bash
allure open allure-report
```

## Test Reports

Test reports are generated using Allure. The reports include detailed test results such as:

Number of passed/failed/skipped tests.
- Detailed logs and screenshots (if applicable).
- Allure results are generated in the allure-results directory.

## Test Data
Test data is centralized in a testData.ts file located in the data/ directory. This file contains data for login, checkout, and product selection.

Example content of testData.ts:
```typescript
export const loginData = {
  username: 'standard_user',
  password: 'secret_sauce',
};

export const checkoutData = {
  firstName: 'John',
  lastName: 'Doe',
  postalCode: '12345',
};

export const itemNames = {
  bikeLight: 'Sauce Labs Bike Light',
  backpack: 'Sauce Labs Backpack',
};
```

## Contributing
Contributions are welcome! If you have any improvements, bug fixes, or new features to add, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m "Add new feature").
4. Push your branch (git push origin feature-branch).
5. Open a pull request.

## Sample Test Run

https://drive.google.com/file/d/1LAyji2QzI057X4UZV_VeoHDbvU1Iuusq/view?usp=sharing
