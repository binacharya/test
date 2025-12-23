# AutomationUI - Playwright Test Framework

A robust test automation framework built with Playwright and TypeScript for end-to-end testing of web applications.

## Project Overview

This project provides automated testing for the TruckIt web application, covering login functionality and quote request forms.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd automationUi
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
automationUi/
├── pages/                      # Page Object Model files
│   ├── LoginPage/             # Login page objects
│   │   ├── Page.ts           # Login page class
│   │   └── locators.ts       # Login page locators
│   └── page_name/            # Quote request page objects
│       ├── Page.ts           # Quote page class
│       └── locators.ts       # Quote page locators
├── tests/                      # Test specification files
│   ├── loginpage.spec.ts     # Login page tests
│   └── page.spec.ts          # Quote page tests
├── playwright.config.ts       # Playwright configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/loginpage.spec.ts
npx playwright test tests/page.spec.ts
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
```

## View Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Test Coverage

### Login Page Tests
- **File**: `tests/loginpage.spec.ts`
- **Covers**: Login validation error scenarios

### Quote Request Tests
- **File**: `tests/page.spec.ts`
- **Covers**: Pallet and package quote form filling

## Page Object Model (POM)

This framework uses the Page Object Model design pattern:

- **Page Classes**: Located in `pages/*/Page.ts`
  - Contain page-specific methods and actions
  - Encapsulate page interactions

- **Locators**: Located in `pages/*/locators.ts`
  - Centralized element selectors
  - Easy to maintain and update

### Example Usage

```typescript
import { PageName } from '../pages/LoginPage/Page';

test('example test', async ({ page }) => {
  const loginPage = new PageName(page);
  await loginPage.goto();
  await loginPage.fillForm();
});
```

## Configuration

The framework is configured via `playwright.config.ts`:
- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled
- **Browser**: Chromium (default)
- **Reporter**: HTML
- **Trace**: On first retry

## Best Practices

1. **Locators**: Keep all element selectors in `locators.ts` files
2. **Page Objects**: Create reusable methods for page interactions
3. **Test Data**: Separate test data from test logic
4. **Assertions**: Use Playwright's built-in assertions
5. **Naming**: Use descriptive names for tests and methods

## Troubleshooting

### Tests failing to start
- Ensure all dependencies are installed: `npm install`
- Install browsers: `npx playwright install`

### Element not found errors
- Check locators in `locators.ts` files
- Verify page is fully loaded before interacting
- Use `page.waitForLoadState()` if needed

## Contributing

1. Follow the existing Page Object Model structure
2. Add new page objects in the `pages/` directory
3. Create corresponding test files in `tests/`
4. Keep locators centralized in `locators.ts` files

## License

ISC

## Author

AutomationUI Team
