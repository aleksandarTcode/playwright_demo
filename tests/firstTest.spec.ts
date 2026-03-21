import {test} from '@playwright/test';


test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
    
})



test.describe('suite1', () => {

    test.beforeEach(async ({page}) => {
        await page.getByText('Auth').click()
    })

    test('the login test', async ({page}) => {
       
       await page.getByText('Login').click()

    })

    test('the register test', async ({page}) => {
       
       await page.getByText('Register').click()

    })



})

test.describe('suite2', () => {

    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click()
    })

    test('the first test', async ({page}) => {
       
       await page.getByText('Form Layouts').click()

    })

    test('navigate to datepicker page', async ({page}) => {
       
       await page.getByText('Datepicker').click()

    })

})


