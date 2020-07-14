// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random quote to the page.
 */
function addRandomQuote() {
  const quotes =
      ['You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.', 'When you have eliminated the impossible, whatever remains, however improbable, must be the truth?', 'Watson. Come at once if convenient. If inconvenient, come all the same.', 'Crime is common. Logic is rare.', 'You see, but you do not observe.'];

  // Pick a random greeting.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quotesContainer = document.getElementById('quote-container');
  quotesContainer.innerText = quote;
}

/** Uses fetch command to get comments from Server
 */
function showComments() {
  fetch('/data').then((response) => {
      return response.json();
  }).then((comments) => {
      console.log(comments);
      const commentsContainer = document.getElementById('comments-container');
      commentsContainer.innerText = '';
      for (var index = 0; index < comments.length; index++) {
        commentsContainer.appendChild(createListElement(comments[index]));
      }
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}