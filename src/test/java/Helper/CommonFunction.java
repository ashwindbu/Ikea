package Helper;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class CommonFunction {

    public static void explicitWait(String xpath, WebDriver driver)
    {
        WebDriverWait wait = new WebDriverWait(driver, 60l);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(xpath)));
    }

    public static void explicitWaitUntilElementClickable(By locator, WebDriver driver)
    {
        WebDriverWait wait = new WebDriverWait(driver, 60l);
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(locator)));
    }

    public static void WebElementClick(By locator , WebDriver driver)
    {
        try {
            WebElement ElementToClick = driver.findElement(locator);
            CommonFunction.explicitWaitUntilElementClickable(locator, driver);
            ElementToClick.click();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void WaitUntilElementExists(WebDriver driver , By locator)
    {
        WebDriverWait wait = new WebDriverWait(driver,600);
        wait.until(ExpectedConditions.presenceOfElementLocated(locator));
    }
}
