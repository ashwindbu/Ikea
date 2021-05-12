$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("IkeaShoppingCart.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# SuperChoice QA Code Challenge"
    }
  ],
  "line": 4,
  "name": "SuperChoice QA Challenge (UI)",
  "description": "",
  "id": "superchoice-qa-challenge-(ui)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@IkeaUI"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "IKEA",
  "description": "",
  "id": "superchoice-qa-challenge-(ui);ikea",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Search for the product \u003cProduct\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I sort the price low to high \u003cSortPrice\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose the size \u003csize\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I choose the color \u003ccolour\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I choose the price \u003cprice\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I add \u003cItemCount\u003e items to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on Shopping cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I validate \u003cItemCount\u003e added in cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I remove \u003cItemCountToBeRemoved\u003e product from the cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I validate \u003cFinalProductCount\u003e item is available in the cart",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "superchoice-qa-challenge-(ui);ikea;",
  "rows": [
    {
      "cells": [
        "Product",
        "SortPrice",
        "size",
        "colour",
        "price",
        "ItemCount",
        "ItemCountToBeRemoved",
        "FinalProductCount"
      ],
      "line": 19,
      "id": "superchoice-qa-challenge-(ui);ikea;;1"
    },
    {
      "cells": [
        "Table",
        "LowToHigh",
        "70+",
        "black",
        "80+",
        "10",
        "4",
        "6"
      ],
      "line": 20,
      "id": "superchoice-qa-challenge-(ui);ikea;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "IKEA",
  "description": "",
  "id": "superchoice-qa-challenge-(ui);ikea;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@IkeaUI"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Search for the product Table",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I sort the price low to high LowToHigh",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose the size 70+",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I choose the color black",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I choose the price 80+",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I add 10 items to cart",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on Shopping cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I validate 10 added in cart",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I remove 4 product from the cart",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I validate 6 item is available in the cart",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TestScenario.Open_chrome_and_start_application()"
});
formatter.result({
  "duration": 1676754900,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepDefinition.TestScenario\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:82)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:70)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:570)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:717)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:601)\r\n\tat org.testng.TestRunner.run(TestRunner.java:502)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:115)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:129)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:113)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:111)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:34)\r\n\t... 69 more\r\nCaused by: java.lang.NoClassDefFoundError: com/google/gson/JsonElement\r\n\tat java.base/java.lang.Class.getDeclaredMethods0(Native Method)\r\n\tat java.base/java.lang.Class.privateGetDeclaredMethods(Class.java:3325)\r\n\tat java.base/java.lang.Class.getMethodsRecursive(Class.java:3466)\r\n\tat java.base/java.lang.Class.getMethod0(Class.java:3452)\r\n\tat java.base/java.lang.Class.getMethod(Class.java:2199)\r\n\tat org.openqa.selenium.json.JsonOutput.getMethod(JsonOutput.java:300)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$13(JsonOutput.java:151)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$write$27(JsonOutput.java:257)\r\n\tat java.base/java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:176)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:258)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:174)\r\n\tat java.base/java.util.TreeMap.forEach(TreeMap.java:1274)\r\n\tat java.base/java.util.Collections$UnmodifiableMap.forEach(Collections.java:1521)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:173)\r\n\tat org.openqa.selenium.json.JsonOutput$SafeBiConsumer.accept(JsonOutput.java:407)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:261)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:174)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:173)\r\n\tat org.openqa.selenium.json.JsonOutput$SafeBiConsumer.accept(JsonOutput.java:407)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:261)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:252)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.NewSessionPayload.create(NewSessionPayload.java:99)\r\n\tat org.openqa.selenium.remote.NewSessionPayload.create(NewSessionPayload.java:93)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:67)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:148)\r\n\tat Helper.DriverFactory.GetLocalDriver(DriverFactory.java:113)\r\n\tat Helper.BaseTest.\u003cinit\u003e(BaseTest.java:17)\r\n\tat stepDefinition.TestScenario.\u003cinit\u003e(TestScenario.java:55)\r\n\t... 75 more\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027L82108S3\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: driver.version: ChromeDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:276)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\r\n\t\t... 89 more\r\nCaused by: java.lang.ClassNotFoundException: com.google.gson.JsonElement\r\n\tat java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:606)\r\n\tat java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:168)\r\n\tat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)\r\n\t... 120 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Table",
      "offset": 23
    }
  ],
  "location": "TestScenario.searchForTheProductProduct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LowToHigh",
      "offset": 29
    }
  ],
  "location": "TestScenario.iSortThePriceLowToHighSortPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "70+",
      "offset": 18
    }
  ],
  "location": "TestScenario.iChooseTheSizeSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "black",
      "offset": 19
    }
  ],
  "location": "TestScenario.iChooseTheColorColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "80+",
      "offset": 19
    }
  ],
  "location": "TestScenario.iChooseThePricePrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 6
    }
  ],
  "location": "TestScenario.iAddItemcountItemsToCart(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestScenario.iClickOnShoppingCartIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 11
    }
  ],
  "location": "TestScenario.iValidateItemcountAddedInCart(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "TestScenario.iRemoveItemCountToBeRemovedProductFromTheCart(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 11
    }
  ],
  "location": "TestScenario.iValidateFinalProductCountItemIsAvailableInTheCart(int)"
});
formatter.result({
  "status": "skipped"
});
});