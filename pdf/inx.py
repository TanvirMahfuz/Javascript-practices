from fpdf import FPDF
import os

def create_pdf(text, filename):
    try:
        # Initialize the FPDF object
        pdf = FPDF()
        pdf.add_page()

        # Set font and size
        pdf.set_font("Arial", size=12)

        # Process the text
        text = text.replace("‘", "'").replace("’", "'").replace("“", '"').replace("”", '"')
        text = ''.join([char + '\n'if char == '?'else char for char in text])

        # Add a title (optional)
        pdf.set_font("Arial", 'B', 16)
        pdf.cell(200, 10, txt="Formatted Document", ln=True, align='L')
        pdf.ln(5)  # Add a small vertical space# Add the text to the PDF
        pdf.set_font("Arial", size=12)
        lines = text.split("\n")
        for line in lines:
            pdf.multi_cell(0, 10, line)

        # Save the PDF
        pdf.output(filename)
        print(f"PDF saved successfully as {filename}")

    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
somestring = """Granted that handling of infants, and its symbolic equivalent in grown-ups, recognition, have a survival value. The question is. What next ? In everyday terms, what can people do after they have exchanged greetings, whether the greeting consists of a collegiate ‘Hi!’ or an Oriental ritual lasting several hours ? After stimulus-hunger and recognition hunger comes structure- hunger. The perennial problem of adolescents is : ‘What do you say to her (him) then ? And to many people besides adolescents, nothing is more uncomfortable than a social hiatus, a period of silent, unstructured time when no one present can think of anything more interesting to say than: ‘Don’t you think the walls are perpendicular tonight ?’ The eternal problem of the human being is how to structure his waking hours. In this existential sense, the function of all social living is to lend mutual assistance for this project."""# Specify the file path and name
file_path = os.path.join(os.getcwd(), "somestring.pdf")

# Create the PDF
create_pdf(somestring, file_path)
