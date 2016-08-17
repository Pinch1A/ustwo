#Form markup, styles and validation

Create an HTML form and add the following fields:
- “Name” (required)
- “Email” (required)
- “Type of cake” with 4 options
- “Celebration type” (required) with 4 options and a text input
- “Tell us about your dream cake”
- “Send away” button to submit the form
- “Restart” button to reset the form

Using a CSS pre-processor of your choice (e.g. SASS) write styles to make the form’s layout match the screenshot below, as closely as you can.
Using JavaScript, but without using any libraries, add validation to ensure that, if the Celebration type is “Other”, the text input is not empty.

#Front end tests

Using any combination of Mocha, Chai, and CasperJS (or equivalent) that you’re comfortable with, write a test for the form’s validation.

#Build automation

Using Gulp, Grunt or a similar tool of your choice, set up some task automation for your build:

1.Compile your SASS
2.Lint your JavaScript
3.Run your tests

Include a README file describing dependencies and instructions.