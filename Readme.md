# Library Application

An interactive e-book library application designed to manage a personal book collection. Users can add books, edit their read statuses, or remove them from the list—all within a clean and user-friendly interface.

## Features

- **Book Management**:
  - Add new books with details like title, author, pages, and read status.
  - Change the read status of books dynamically.
  - Delete books from the library collection.
- **Responsive UI**: A modern design that adapts to different screen sizes.
- **Validation**:
  - Ensures that books added have at least 10 pages.
  - Provides instant feedback when no books are available in the library.
- **Styling with CSS Variables**: Colors, fonts, and layouts are managed through reusable variables, making customization easier.

## Technologies Used

- **HTML5**: For the structure of the web page.
- **CSS3**: For responsive styling and layout using modern techniques like CSS Grid.
- **JavaScript**: To handle interactivity, form validation, and dynamic DOM updates.

## How to Use

1. Open the `index.html` file in a web browser.
2. Click the **Add Book** button to launch the dialog form.
3. Fill in the book details:
   - Title
   - Author
   - Number of pages (minimum of 10)
   - Check if the book is read or not.
4. Use the following controls:
   - **Add Book**: Saves the book to the collection.
   - **Status Button**: Toggles between "Read" and "Not Read".
   - **Delete Button**: Removes the book from the library.
5. The application keeps the interface updated dynamically, showing whether books are available or not.

## Design Details

- **Fonts**: Uses Google Fonts `Exo 2` for headings and `Poppins` for other text.
- **Color Scheme**:
  - Primary color: #1378eb (blue).
  - Accent color: rgb(255, 145, 0) (orange).
  - Neutral color: whitesmoke and #5f5f5f (gray shades).
- **Grid-Based Layout**: Books are displayed in a responsive grid.

## File Structure

- `index.html`: The main HTML file, structuring the library interface.
- `style.css`: Defines the styling for the library, including fonts, colors, and responsiveness.
- `books.js`: Provides the JavaScript logic for managing books and updating the interface dynamically.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/library-app.git
   ```
