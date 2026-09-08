import { test, expect } from '@playwright/test';

// A "check" is nothing more than a command that either exits 0 (pass)
// or non-zero (fail). CI runs this command for you and stamps the result
// on your PR. That's the whole trick.

test('the ticket behaves as specified', () => {
  const total = 2 + 2;
  expect(total).toBe(5);   // <-- flip this to 5 to see a red check
});
