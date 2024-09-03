let somestring =
  `Granted that handling of infants, and its symbolic equivalent in grown-ups, recognition, have a survival value. The question is. What next ? In everyday terms, what can people do after they have exchanged greetings, whether the greeting consists of a collegiate ‘Hi!’ or an Oriental ritual lasting several hours ? After stimulus-hunger and recognition hunger comes structure- hunger. The perennial problem of adolescents is : ‘What do you say to her (him) then ? And to many people besides adolescents, nothing is more uncomfortable than a social hiatus, a period of silent, unstructured time when no one present can think of anything more interesting to say than: ‘Don’t you think the walls are perpendicular tonight ?’ The eternal problem of the human being is how to structure his waking hours. In this existential sense, the function of all social living is to lend mutual assistance for this project.
"`.split("");
const {jsPDF} = require("jspdf");

// Initialize the jsPDF document
const doc = new jsPDF();

// Set initial configurations
const marginLeft = 10; // Left margin
const marginTop = 10; // Top margin
const lineHeight = 10; // Line height for spacing
let cursorY = marginTop; // Starting Y position// Set font size and style
doc.setFontSize(12);
doc.setFont("helvetica", "normal");

// Process the text
somestring = somestring.reduce((s, ss) => {
  if (ss === "?") return s + ss + "\n"; // Add line break after question markselse
  return s + ss;
}, "");

// Split the text into lines by the newline character
const lines = somestring.split("\n");

// Loop through the lines and add them to the PDF
lines.forEach((line) => {
  doc.text(line, marginLeft, cursorY);
  cursorY += lineHeight; // Move down to the next line
});

// Add a title (optional)
doc.setFontSize(16);
doc.setFont("helvetica", "bold");
doc.text("Formatted Document", marginLeft, marginTop - 5);

// Save the PDF with the specified filename
doc.save("somestring.pdf");
