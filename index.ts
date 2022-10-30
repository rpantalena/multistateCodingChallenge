/*
TODO:
1. Fork this project by clicking "Fork" in the top left or by saving this file
2. Create a markdown function using regular expressions to convert the strings to formatted html
3. Send the forked project url (i.e. https://stackblitz.com/edit/typescript-xxxxxx) to kokeefe@multistate.us

To learn more about markdown and regular expressions, refer to:
https://guides.github.com/features/mastering-markdown/
https://www.w3schools.com/js/js_regexp.asp
*/

const strings: string[] = [
  'This is **bold** text.',
  'This is __underlined__ text.',
  'This is ~~strikethrough~~ text.',
  'This is *italic* text.',
  'This is a hyperlink: www.google.com/',
  'This is an email: leeroy.jenkins@gmail.com',
  'This is a hyperlink: https://stackblitz.com/edit/typescript-ga18cd?devToolsHeight=50&file=index.html,index.ts,README.md,package.json',
  'This is a hyperlink: https://github.com/rpantalena/multistateCodingChallenge',
  'This is **bold** text and this is also **bold** text',
  'This is __underlined__ text and this is also __underlined__ text',
  'This is **bold** text and this is *italic* text',
  'This is a bold hyperlink: **www.google.com/**',
  'This is not **bold* or *italic** text.',
  'This is not *bold** or **italic* text.',
  '**This entire sentence is bold**',
  '*This entire sentence is italic*',
  'Only *this* *is** italic',
  'This is not ~~ strikthrough~~ text by design',
];

/**
 * Converts markdown strings to formatted html using regular expressions.
 * @param string - String in markdown format
 * @returns String converted to formatted html
 */
const markdown = function (string: string): string {
  let newString = string.replace(/\*\*([^\s][^\*]*[^\s])\*\*/g, '<b>$1</b>');
  newString = newString.replace(/__([^\s][^_]*[^\s])__/g, '<u>$1</u>');
  newString = newString.replace(/~~([^\s][^~]*[^\s])~~/g, '<s>$1</s>');
  newString = newString.replace(
    /(?<!\*)\*([^\s\*][^\*]+[^\s\*])\*(?!\*)/g,
    '<i>$1</i>'
  );
  newString = newString.replace(
    /(?<!@[\w.\/:]*)((https?:\/\/)?(w+\.)?(?:[a-zA-z0-9-]*\.)+(com|net|org|edu|mil|uk|io)([\/]?[\w\-?=.,&%]*)*)/g,
    '<a href=$1>$1</a>'
  );
  newString = newString.replace(
    /([\w#!%$‘&+\*–\/=?^`{|}~][\w#!%$‘&+\*–\/=?^`\.{|}~]{0,63}@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]+)/g,
    '<a href="mailto:"$1>$1</a>'
  );
  return newString;
};

// Log the formatted html strings to the console
strings.forEach((string) => {
  console.log(markdown(string));
});

/*
BONUS:
Render the formatted html strings to index.html
*/
strings.forEach((string) => {
  let pElement = document.createElement('p');
  pElement.innerHTML = `${markdown(string)}`;
  document.getElementById('strings').appendChild(pElement);
});
