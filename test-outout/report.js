$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/cucumber/features/Application.feature");
formatter.feature({
  "line": 1,
  "name": "Test Free CRM Web Application",
  "description": "",
  "id": "test-free-crm-web-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3032601819,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Application Landing Page",
  "description": "",
  "id": "test-free-crm-web-application;verify-application-landing-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Application Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "verify user is on Application Landing Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Landing_Page()"
});
formatter.result({
  "duration": 7814496511,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verify_user_is_on_Application_Landing_Page()"
});
formatter.result({
  "duration": 13824542,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Free CRM in the cloud software boosts sales]\u003e but was:\u003c[#1 Free CRM customer relationship management software cloud]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.cucumber.stepdefinitions.LoginSteps.verify_user_is_on_Application_Landing_Page(LoginSteps.java:39)\r\n\tat ✽.Then verify user is on Application Landing Page(src/main/java/com/cucumber/features/Application.feature:5)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2911892939,
  "status": "passed"
});
formatter.before({
  "duration": 1270874199,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Application Login",
  "description": "",
  "id": "test-free-crm-web-application;application-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is on Application Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Login FreeCRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify User is on Application Home",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Landing_Page()"
});
formatter.result({
  "duration": 5316478516,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_FreeCRM_Application()"
});
formatter.result({
  "duration": 53847127913,
  "error_message": "java.lang.NullPointerException\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:560)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.cucumberpom.pages.LoginPage.doLogin(LoginPage.java:30)\r\n\tat com.cucumber.stepdefinitions.LoginSteps.login_FreeCRM_Application(LoginSteps.java:44)\r\n\tat ✽.Then Login FreeCRM Application(src/main/java/com/cucumber/features/Application.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.verify_User_is_on_Application_Home()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2012656615,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d90.0.4430.85)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-AOMEI0O\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\welcome\\AppData\\Local\\Temp\\scoped_dir18412_683671495}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:59326}, acceptInsecureCerts\u003dfalse, browserVersion\u003d90.0.4430.85, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 86535c538801e5654f7d55e6a1332169\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:532)\r\n\tat com.cucumber.stepdefinitions.LoginSteps.tearDown(LoginSteps.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 2417631880,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create New Contact in Application",
  "description": "",
  "id": "test-free-crm-web-application;create-new-contact-in-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is on Application Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Login FreeCRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Open Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Create new Contact",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Landing_Page()"
});
formatter.result({
  "duration": 4304135359,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_FreeCRM_Application()"
});
formatter.result({
  "duration": 8862738193,
  "error_message": "java.lang.NullPointerException\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:560)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.cucumberpom.pages.LoginPage.doLogin(LoginPage.java:30)\r\n\tat com.cucumber.stepdefinitions.LoginSteps.login_FreeCRM_Application(LoginSteps.java:44)\r\n\tat ✽.Then Login FreeCRM Application(src/main/java/com/cucumber/features/Application.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.Open_Contact_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.create_New_Contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2009087982,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d90.0.4430.85)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-AOMEI0O\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d89.0.4389.23 (61b08ee2c50024bab004e48d2b1b083cdbdac579-refs/branch-heads/4389@{#294}), userDataDir\u003dC:\\Users\\welcome\\AppData\\Local\\Temp\\scoped_dir10068_1423941980}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:59380}, acceptInsecureCerts\u003dfalse, browserVersion\u003d90.0.4430.85, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 07485086e34a2aa2b0473f593afff259\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:532)\r\n\tat com.cucumber.stepdefinitions.LoginSteps.tearDown(LoginSteps.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});