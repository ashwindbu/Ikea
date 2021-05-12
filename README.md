# Automated test example in Java with Cucumber and Selenium WebDriver #

This project is to automate use cases in Ikea website

BDD Framework
Navigate to Ikea
Sort Items , change price color and size with parameters
Add 10 products to cart and validate
Remove 4 products from cart and validate 
Across three browsers (Chrome , Firefox and Edge)


## Installation ##

To install all dependencies, run 

```console
$ mvn clean install
```

## Running tests ##

```console
$ mvn test
```

After tests are run, reports are generated at : /target/cucumber-reports/

To run the test in different browsers

Navigate to config -> config.properties , uncomment the browser name which we want to run the test against

For eg , if we want to run the test against chrome then the config must be like below

Driver=chrome
#Driver=firefox
#Driver=MicrosoftEdge
