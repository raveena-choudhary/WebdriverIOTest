describe('First test',() => {
    it('test1',() =>
    {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const checkbox = $('#remote-testing')
        checkbox.waitForExist()
        checkbox.click()
        browser.pause(3000)

        const radio = $('#windows')
        radio.waitForExist()
        radio.click()
        browser.pause(3000)

        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Raveena')
        browser.pause(3000)
        input.addValue('choudhary')
        browser.pause(3000)
        input.clearValue()
        browser.pause(3000)

        const s = $('#preferred-interface')
        s.waitForExist()
        s.selectByVisibleText('JavaScript API')
        browser.pause(3000)
    })
})