/**
 * Created by koji on 15/10/31.
 */
import Issue from './Issue';
var url = 'file:///Users/koji/development/JiraIssueChecker/sample.json';
var issue = new Issue('koji', 'hoge');
onInit();
window.setInterval(onInit, 8000);

function onInit(){
  //chrome.browserAction.setBadgeText({text: issue.getTotalIssue()});
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      let result = JSON.parse(xhr.responseText);
      console.log(result);
      issue.setTotalIssue(result.total);
      issue.setItemsNumberOfIssue(result.issues);
      chrome.browserAction.setBadgeText({text: issue.getTotalIssue()});
      console.log(issue.getItemsNumberOfIssue());
    }
  }
  xhr.send();
}
