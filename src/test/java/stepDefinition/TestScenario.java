package stepDefinition;

import Helper.BaseTest;
import Helper.CommonFunction;
import Helper.Config;
import cucumber.api.java.en.And;
import cucumber.api.java.eo.Se;
import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.ITest;

import java.util.ArrayList;
import java.util.List;
import java.util.SortedSet;


public class TestScenario extends BaseTest {

    WebDriver driver;

    //locators

    private static By SearchLocator = By.cssSelector("[name='q']");
    private static By SearchIconLocator = By.cssSelector("#search-box__searchbutton >svg");
    private static By AcceptAllCookiesLocator = By.xpath("//*[@id=\"onetrust-accept-btn-handler\"]");
    private static By SortButtonLocator = By.cssSelector(".filter-button--SORT");
    private static By SortButtonLowToHighValueLocator = By.cssSelector(".single-select-filter > label:nth-of-type(2) > span");
    private static By SizeButtonLocator = By.cssSelector(".filter-button--MEASUREMENT_BUCKETS");
    private static By SizeButton70PlusLocator = By.cssSelector(".class-filter__item--WIDTH_70_2147483647");
    private static By ColorButtonLocator = By.cssSelector(".filter-button--COLOR");
    private static By ColorBlackButtonLocator = By.cssSelector("[aria-label='black']");
    private static By PriceButtonLocator = By.cssSelector(".filter-button--PRICE");
    private static By PriceButton80PlusLocator = By.cssSelector(".class-filter__item--PRICE_8000_2147483647");
    private static By ShowFilteredItemsLocator = By.cssSelector(".filters__confirm-button");
    private static By AddToCartListLocator = By.cssSelector("[aria-label='Add to bag']");
    private static By ShoppingCartIconLocator = By.cssSelector(".js-shopping-cart-icon");
    private static By NumberOfItemsInCart = By.cssSelector(".productlist > div");
    private static By ShoppingOrderReviewLocator = By.cssSelector(".shoppingbag__title-container > h1");
    private static By RemoveProductLocator = By.cssSelector(".product-controls__remove");
    private static By SearchCompletedLocator = By.cssSelector("div.search-summary__content > h1");

    public TestScenario() {

        super("./config/config.properties");
        this.driver = super.getDriver();
    }

    @After
    public void afterTest() {
        driver.quit();
    }

    @Given("^Open chrome and start application$")
    public void Open_chrome_and_start_application() throws Throwable {

        driver.manage().window().maximize();
        driver.get(Config.read("IkeaUrl"));
    }

    @When("^Search for the product (.*)$")
    public void searchForTheProductProduct(String productName) throws InterruptedException{

        Thread.sleep(1000);
        CommonFunction.WaitUntilElementExists(driver, SearchLocator);
        driver.findElement(SearchLocator).sendKeys(productName);

        CommonFunction.WaitUntilElementExists(driver, SearchIconLocator);
        driver.findElement(SearchIconLocator).click();

        WebElement AcceptAllCookies = driver.findElement(AcceptAllCookiesLocator);
        if (AcceptAllCookies.isDisplayed()) {
            AcceptAllCookies.click();
        }
    }

    @When("^I sort the price low to high (.*)$")
    public void iSortThePriceLowToHighSortPrice(String SortValue) throws InterruptedException {

        //Thread.sleep(1000);
        CommonFunction.WaitUntilElementExists(driver , SortButtonLocator);
        WebElement SortElement = driver.findElement(SortButtonLocator);

        if (SortElement.isDisplayed()) {
            CommonFunction.explicitWaitUntilElementClickable(SortButtonLocator, driver);
            CommonFunction.WebElementClick(SortButtonLocator, driver);
            if (SortValue.contentEquals("LowToHigh")) {
                CommonFunction.explicitWaitUntilElementClickable(SortButtonLowToHighValueLocator, driver);
                CommonFunction.WebElementClick(SortButtonLowToHighValueLocator, driver);
                if (driver.findElement(ShowFilteredItemsLocator).isDisplayed()) {
                    CommonFunction.WebElementClick(ShowFilteredItemsLocator, driver);
                }
            }
        }
    }

    @When("^I choose the size (.*)$")
    public void iChooseTheSizeSize(String size) {

        WebElement SizeButton = driver.findElement(SizeButtonLocator);

        if (SizeButton.isDisplayed()) {
            CommonFunction.explicitWaitUntilElementClickable(SizeButtonLocator, driver);
            CommonFunction.WebElementClick(SizeButtonLocator, driver);
            if (size.contentEquals("70+")) {
                CommonFunction.explicitWaitUntilElementClickable(SizeButton70PlusLocator, driver);
                CommonFunction.WebElementClick(SizeButton70PlusLocator, driver);
                if (driver.findElement(ShowFilteredItemsLocator).isDisplayed()) {
                    CommonFunction.WebElementClick(ShowFilteredItemsLocator, driver);
                }
            }
        }
    }

    @When("^I choose the color (.*)$")
    public void iChooseTheColorColour(String colour) throws InterruptedException{

        Thread.sleep(1000);
        WebElement SizeButton = driver.findElement(ColorButtonLocator);

        if (SizeButton.isDisplayed()) {
            CommonFunction.explicitWaitUntilElementClickable(ColorButtonLocator, driver);
            CommonFunction.WebElementClick(ColorButtonLocator, driver);
            if (colour.contentEquals("black")) {
                CommonFunction.explicitWaitUntilElementClickable(ColorBlackButtonLocator, driver);
                CommonFunction.WebElementClick(ColorBlackButtonLocator, driver);
                if (driver.findElement(ShowFilteredItemsLocator).isDisplayed()) {
                    CommonFunction.WebElementClick(ShowFilteredItemsLocator, driver);
                }
            }
        }
    }

    @When("^I choose the price (.*)$")
    public void iChooseThePricePrice(String price) {

        WebElement SizeButton = driver.findElement(PriceButtonLocator);

        if (SizeButton.isDisplayed()) {
            CommonFunction.explicitWaitUntilElementClickable(PriceButtonLocator, driver);
            CommonFunction.WebElementClick(PriceButtonLocator, driver);
            if (price.contentEquals("80+")) {
                CommonFunction.explicitWaitUntilElementClickable(PriceButton80PlusLocator, driver);
                CommonFunction.WebElementClick(PriceButton80PlusLocator, driver);
                if (driver.findElement(ShowFilteredItemsLocator).isDisplayed()) {
                    CommonFunction.WebElementClick(ShowFilteredItemsLocator, driver);
                }
            }
        }
    }

    @Then("^I add (.*) items to cart$")
    public void iAddItemcountItemsToCart(int Itemcount) throws InterruptedException {

        Thread.sleep(1000);
        CommonFunction.WaitUntilElementExists(driver , SearchCompletedLocator);
        List<WebElement> SearchList = driver.findElements(AddToCartListLocator);
        AddItemsToCart(driver, SearchList, Itemcount);
    }

    public void AddItemsToCart(WebDriver driver, List<WebElement> WebElementList, int Itemcount) {
        for (int i = 0; i < Itemcount; i++) {
            WebElement cartelement = WebElementList.get(i);
            cartelement.click();
        }
    }

    @And("^I click on Shopping cart icon$")
    public void iClickOnShoppingCartIcon() throws InterruptedException{
        Thread.sleep(10000);
        CommonFunction.WaitUntilElementExists(driver , ShoppingCartIconLocator);
        WebElement element = driver.findElement(ShoppingCartIconLocator);
        JavascriptExecutor executor = (JavascriptExecutor)driver;
        executor.executeScript("arguments[0].click();", element);
    }


    @And("^I validate (.*) added in cart$")
    public void iValidateItemcountAddedInCart(int ExpectedItemCount) {

        CommonFunction.WaitUntilElementExists(driver , ShoppingOrderReviewLocator);

        int ActualItemCountInCart = driver.findElements(NumberOfItemsInCart).size();
        Assert.assertEquals(ActualItemCountInCart , ExpectedItemCount , "Actual Item added to cart : "+ActualItemCountInCart+"");
    }

    @And("^I remove (.*) product from the cart$")
    public void iRemoveItemCountToBeRemovedProductFromTheCart(int CountToBeRemoved) throws InterruptedException{

        List<WebElement> CartList = driver.findElements(RemoveProductLocator);
        RemoveItemsFromCart(driver, CartList, CountToBeRemoved);
    }

    public void RemoveItemsFromCart(WebDriver driver, List<WebElement> CartList, int CountToBeRemoved) throws InterruptedException
    {
        for (int i = 0; i < CountToBeRemoved; i++) {
            WebElement RemoveElement = CartList.get(i);
            RemoveElement.click();
            Thread.sleep(100);
        }
    }

    @And("^I validate (.*) item is available in the cart$")
    public void iValidateFinalProductCountItemIsAvailableInTheCart(int FinalCartCount) throws InterruptedException {

        //wait time to remove the products from cart
        Thread.sleep(10000);
        int ActualItemCountInCart = driver.findElements(NumberOfItemsInCart).size();
        Assert.assertEquals(ActualItemCountInCart , FinalCartCount , "Actual Item available in the cart : "+ActualItemCountInCart+"");
        driver.quit();
    }
}