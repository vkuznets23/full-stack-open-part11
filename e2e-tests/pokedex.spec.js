const { test, describe, expect, chromium } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async () => {
    const browser = await chromium.launch({ channel: 'chrome' })
    const page = await browser.newPage()

    await page.goto('http://localhost:5001/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })
})
