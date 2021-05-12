# SuperChoice QA Code Challenge
@IkeaUI @Regression @All

Feature: SuperChoice QA Challenge (UI)

  Scenario Outline: IKEA
    Given Open chrome and start application
    When Search for the product <Product>
    When I sort the price low to high <SortPrice>
    When I choose the size <size>
    When I choose the color <colour>
    When I choose the price <price>
    Then I add <ItemCount> items to cart
    And I click on Shopping cart icon
    And I validate <ItemCount> added in cart
    And I remove <ItemCountToBeRemoved> product from the cart
    And I validate <FinalProductCount> item is available in the cart
    Examples:
      | Product | SortPrice | size | colour | price | ItemCount | ItemCountToBeRemoved | FinalProductCount |
      | Table   | LowToHigh | 70+  | black  | 80+   | 10        | 4                    | 6                 |


