# Raman Devendra Mahakalkar — Portfolio

A modern responsive developer portfolio built with plain HTML, CSS, and JavaScript.

## How to run in VS Code

1. Extract the ZIP file.
2. Open the extracted `raman-portfolio` folder in VS Code.
3. Open `index.html`.
4. Recommended: install the **Live Server** extension in VS Code.
5. Right-click `index.html` → **Open with Live Server**.

You can also double-click `index.html` and open it directly in your browser.

## Folder structure

```text
raman-portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Important customization

### Profile photo
The hero currently contains a profile-photo placeholder showing `RM`.

To add your photo:
- Put your image inside a new `images` folder.
- Replace the `.profile-placeholder` block in `index.html` with an `<img>` element.

### LinkedIn and GitHub
The names are included, but the actual URLs are intentionally not invented.

Find these in `index.html`:

```html
<a href="#" class="social-placeholder">LinkedIn</a>
<a href="#" class="social-placeholder">GitHub</a>
```

Replace `#` with your real profile URLs.

### Project links
The two project cards contain placeholder links. Replace the `href="#"` values with your actual Live Demo and GitHub repository links.

## Technologies

- HTML5
- CSS3
- JavaScript
- Responsive design
- CSS Grid/Flexbox
- Intersection Observer API
- LocalStorage for theme preference

No database or backend is required.

## Contact form

The contact form uses `mailto:` and opens the user's default email application. A backend is not required for this demo.

Email:
devendramahakalkar8@gmail.com
