# websites

HTML

Structure:

The code starts with a DOCTYPE declaration specifying it's an HTML5 document.
It has <html> and </html> tags containing the entire webpage content.
Inside the <html>, there's a <head> section containing meta information about the webpage and a <link> tag referencing an external stylesheet (style.css).
Additional <link> tags are present to include Bootstrap CSS, jQuery, and Font Awesome libraries.
The <body> section contains the visible content of the webpage.

Navigation Bar:

A navigation bar is created using a <nav> element with the class navbar myNavbar navbar-expand-lg and an ID navbar.
It uses Bootstrap classes for responsiveness and styling.
The navigation bar includes a logo (<h3>Logis</h3>), a toggle button for mobile menus, and links to other website sections (About, Gallery, Contact).

Hero Banner:

A hero banner section showcases a large image using a <div> with the class home-banner-wrapper.
The image is displayed using an <img> tag with the source (src) set to img/banner.jpg.

Feature Service Section:

This section displays three service boxes with icons and descriptions.
It uses a series of nested divs with various classes for layout and styling.
Each service box uses Font Awesome icons (<i> tag) and paragraphs (<p>) for content.

About Us Section:

This section showcases information about the company using divs and paragraphs.
It includes an image (<img>) and a section with logo icons and descriptions.

Home Page Section:

This section displays a title, paragraph, search form, and four statistic boxes.
The search form uses Bootstrap classes for styling (form-control, btn btn-primary).

Our Service Section:

This section highlights services offered with a heading, description, and service card elements.
Service cards use divs and images to display service details.
Call to Action Section:

This section encourages users to take action with a heading, paragraph, and a call-to-action button.

Feature Section:

This section showcases a feature with a heading, paragraph, and an image.
Overall, the code demonstrates good practices for HTML structure and organization. It utilizes classes and IDs for potential future styling and interactivity


CSS

Global Styling (HTML & Body):

font-family: "Poppin", sans-serif;: Poppin font use kiya gaya hai.
margin, padding: Zero set kiya gaya hai to remove default spacing.
overflow-x: hidden;: Horizontal scrolling ko disable karta hai.
scroll-behavior: smooth;: Smooth scrolling effect jab anchor links use karein.
Navbar Section:

navbar ka background dark blue hai (rgb(0, 18, 36, 1)) aur text color white hai.
nav-link:hover: Hover karne pe link ka background white ho jayega.
Navigation items ka right margin 50px hai to spread out the links.
Unknown Section (feature-service-para-heading-section):

Is section mein headings aur paragraphs ko hover effect diya gaya hai:
Heading (h4) normal state mein dark blue (#001973) hoti hai, hover par light blue (#007bff).
learn-more-section paragraph cursor pointer se hover pe highlight hota hai (#007bff).
About Section:

about-wrapper and related classes ka color dark blue hai (#001973).
Padding aur margin ko use karke text aur image ko spacing di gayi hai.
Paragraph (about-para-box) ka font size 17px aur color black hai for readability.
Home Wrapper Section:

Background image aur color set kiya gaya hai for the home section.
White colored text for title (h1) and paragraphs (p).
search class ke elements ko right align kiya gaya hai aur shadow effect diya gaya hai.
Feature Section:

Feature heading and image alignment: Text and image ko center align aur spacing di gayi hai.
Hover effect for icons (.icon) jo light blue hue mein change hoti hain.
Service Section:

Service headings ko uppercase aur centered style mein diya gaya hai.
Service cards ke liye border-radius and box shadows use kiya gaya hai to give a clean look.
Call-to-Action Section:

Background image with overlay black tint. White text aur button hover effect blue color mein change hota hai (#007bff).
Price Section:

Price card layout clean aur minimal hai with light gray background (whitesmoke) and hover effect.
Prices highlighted with blue (#007bff) color.
Footer & Contact Section:

Footer ko whitesmoke background aur social media icons ke saath styled kiya gaya hai.
Contact form ko white background aur border radius diya gaya hai to make it visually appealing.
Team Section:

Team section mein text centered aur cards ko light background color diya gaya hai (rgba(245, 245, 245, 0.725)).
Gallery Section:

Images ko padding diya gaya hai for spacing and alignment.
In short, yeh CSS file different sections jaise navbar, home, features, services, about, gallery, footer, etc., ko style aur layout ke liye responsible hai. 


Javascript
Owl Carousel:

Is part ka kaam ek carousel banane ka hai. owlCarousel() ek jQuery plugin ka method hai jo carousel functionality ko manage karta hai.
Yeh carousel loop karega (loop: true), 10px ka margin hoga (margin: 10), aur navigation arrows bhi show honge (nav: true).
autoplay: true ka matlab hai ke carousel apne aap chalega, lekin agar user mouse se hover kare to autoplay pause ho jayega (autoplayHoverPause: true).
Carousel ki responsiveness ko bhi define kiya gaya hai, jisme 0-599px tak ek item show hoga, 600-999px tak 3 items, aur 1000px ke baad bhi 3 items show honge.
