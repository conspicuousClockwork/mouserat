# mouserat
Lightweight Javascript library to track mouse position and separate mock position based on mouse movement.

# Usage

Each instance of mouserat takes in a callback to calculate the mock mouse position. Said callback should take arguments (event, mousePosition, ratPosition).

The basic idea is that you specify how the mock position is taken care of using the old coordinates (mousePosition), new coordinates (event), and previous mock position (ratPosition).

# TODO:
-Better Markdown
-Improve README documentation
-Include tests(???)
-Include examples
