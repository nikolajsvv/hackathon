// // When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // let inputWord = document.getElementById("word").value;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: deletePage,
  });
});

// When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

// // once the chrome extension is openend,
// function checkAnswer(input) {
//   const triviaQuestions = {
//     question1: "derp",
//   };

//   if (input == triviaQuestions["test"]) {
//     alert("I dare you to try again");
//   } else {
//     alert("Hope you saved your work :)");
//   }
// }

function deletePage() {
  // var giffy = document.createElement("img");
  // giffy.src = "/images/explosion.jpeg";

  alert("So....we struggled...a lot");
  alert("Here were our challenges: ");
  alert("CHALLENGE 1: Setting up a Google Chrome Extension");
  alert(
    "Like everyone else, we used Google as a source to help us build a functioning Extension."
  );
  alert(
    "We ended up with a working product that changed the background color to green. Wohooo!"
  );
  alert(
    "CHALLENGE 2: Our initial idea was to access a synonym database API and replace words with a synonym."
  );
  alert("We started by trying to access all paragraph elements on a page.");
  alert(
    "Eventually, we were able to do this by using the getElementsByTagName method."
  );
  alert(
    "CHALLENGE 3: Next, we tried to access words within the paragraph elements."
  );
  alert("This proved to be extremly difficult.");
  alert(
    "We found that .replace method worked, however we weren't able to pass varaibles as the replace text."
  );
  alert("We tried altering the variable to regEx, but this still didn't work.");
  alert(
    "At this point, it was getting late, so we decided to quickly create this extension which demonstrated our frustration."
  );
  confirm("It's 1AM, should we call it a night?");

  document.body.innerHTML = "";
  // document.body.appendChild(giffy);
}
