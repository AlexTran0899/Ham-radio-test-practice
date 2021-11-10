const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=Technician
  await page.click('text=Technician');
  await expect(page).toHaveURL('http://localhost:3000/Technician');

  // Click text=Electrical safety
  await page.click('text=Electrical safety');
  await expect(page).toHaveURL('http://localhost:3000/questions');

  // Click text=A. Touching both terminals with the hands can cause electrical shock
  await page.click('text=A. Touching both terminals with the hands can cause electrical shock');

  // Click text=B. Shorting the terminals can cause burns, fire, or an explosion
  await page.click('text=B. Shorting the terminals can cause burns, fire, or an explosion');

  // Click text=C. RF emissions from the battery
  await page.click('text=C. RF emissions from the battery');

  // Click text=D. All of these choices are correct
  await page.click('text=D. All of these choices are correct');

  // Click text=next
  await page.click('text=next');

  // Click text=C. It may cause involuntary muscle contractions
  await page.click('text=C. It may cause involuntary muscle contractions');

  // Click text=B. It may disrupt the electrical functions of cells
  await page.click('text=B. It may disrupt the electrical functions of cells');

  // Click text=A. It may cause injury by heating tissue
  await page.click('text=A. It may cause injury by heating tissue');

  // Click text=D. All of these choices are correct
  await page.click('text=D. All of these choices are correct');

  // Click text=next
  await page.click('text=next');

  // Click text=D. The white wire
  await page.click('text=D. The white wire');

  // Click text=B. Hot
  await page.click('text=B. Hot');

  // Click text=A. Neutral
  await page.click('text=A. Neutral');

  // Click text=C. Equipment ground
  await page.click('text=C. Equipment ground');

  // Click text=next
  await page.click('text=next');

  // Click text=C. To limit current to prevent shocks
  await page.click('text=C. To limit current to prevent shocks');

  // Click text=A. To prevent power supply ripple from damaging a circuit
  await page.click('text=A. To prevent power supply ripple from damaging a circuit');

  // Click text=B. To interrupt power in case of overload
  await page.click('text=B. To interrupt power in case of overload');

  // Click text=next
  await page.click('text=next');

});