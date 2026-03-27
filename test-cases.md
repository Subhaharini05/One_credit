# Test Cases for Modern Portfolio Website

## Test Case Document
**Project:** Modern Portfolio Website (React + Tailwind)  
**Version:** 1.0  
**Date:** March 26, 2026  
**Tester:** QA Team  

---

## Test Environment Setup

### Prerequisites
- Node.js installed (version 16+)
- npm package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for external links
- Screen resolutions: 1920x1080, 1366x768, 768x1024, 375x667

---

## Test Cases

### TC-001: Project Setup and Installation

**Test Case ID:** TC-001  
**Test Case Name:** Verify project setup and installation  
**Priority:** High  
**Type:** Functional  

**Preconditions:**
- Node.js and npm are installed
- Project files are available

**Test Steps:**
1. Open terminal/command prompt
2. Navigate to project directory: `cd c:\Users\SUBHAHARANI\OneDrive\Desktop\harini`
3. Run `npm install`
4. Run `npm run dev`
5. Note the local development URL displayed

**Expected Results:**
- npm install completes without errors
- npm run dev starts successfully
- Local development server starts (typically http://localhost:5173)
- No console errors in terminal
- Browser opens without errors

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-002: Navbar Functionality

**Test Case ID:** TC-002  
**Test Case Name:** Verify navbar smooth scroll and active section indicator  
**Priority:** High  
**Type:** UI/Functional  

**Preconditions:**
- Application is running on localhost
- All sections (Home, About, Skills, Projects, Contact) exist

**Test Steps:**
1. Open application in browser
2. Verify navbar is visible at top of page
3. Click on "Home" link in navbar
4. Click on "About" link in navbar
5. Click on "Skills" link in navbar
6. Click on "Projects" link in navbar
7. Click on "Contact" link in navbar
8. Scroll manually through each section
9. Verify active section highlighting changes as you scroll

**Expected Results:**
- Navbar remains fixed at top during scroll
- Smooth scrolling animation occurs when clicking nav links
- Active section is highlighted in navbar
- All navigation links work correctly
- No page jumps or jarring movements

**Test Data:**
- Section IDs: #home, #about, #skills, #projects, #contact

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-003: Hero Section Display

**Test Case ID:** TC-003  
**Test Case Name:** Verify hero section content and functionality  
**Priority:** High  
**Type:** UI  

**Preconditions:**
- Application is running
- Hero section is loaded

**Test Steps:**
1. Open application homepage
2. Verify hero section is displayed at top
3. Check name display: "Subhaharini R"
4. Check role display: "3rd Year AIML Student | Aspiring Software Developer"
5. Verify profile image is displayed
6. Check CTA buttons: "View Projects" and "Contact Me"
7. Click "View Projects" button
8. Click "Contact Me" button
9. Verify smooth scroll to respective sections

**Expected Results:**
- Hero section displays correctly
- Name and role text are readable
- Profile image loads without errors
- CTA buttons are visible and clickable
- Buttons navigate to correct sections with smooth scroll
- Layout is visually appealing

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-004: About Section Functionality

**Test Case ID:** TC-004  
**Test Case Name:** Verify about section content and resume download  
**Priority:** High  
**Type:** UI/Functional  

**Preconditions:**
- Application is running
- About section exists

**Test Steps:**
1. Navigate to About section
2. Verify section title: "About Me"
3. Check description content is displayed
4. Locate "Download Resume" button
5. Click "Download Resume" button
6. Verify download dialog appears (if resume.pdf exists)
7. Check profile image in about section

**Expected Results:**
- About section displays correctly
- Description text is readable
- Resume download button is functional
- Download initiates when clicked
- Profile image loads properly
- Content is relevant to Subhaharini R's background

**Test Data:**
- Resume file: resume.pdf (should exist in public folder)

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-005: Skills Section Display

**Test Case ID:** TC-005  
**Test Case Name:** Verify skills section with icons and animations  
**Priority:** Medium  
**Type:** UI  

**Preconditions:**
- Application is running
- Skills section exists

**Test Steps:**
1. Navigate to Skills section
2. Verify section title: "Skills"
3. Check all skill badges are displayed
4. Verify skill icons are visible
5. Check skill names: Java, Python, React, SQL, etc.
6. Hover over skill cards
7. Verify animations work (if implemented)

**Expected Results:**
- Skills section displays grid layout
- All skill badges show correctly
- Icons load without errors
- Skill names are readable
- Hover effects work smoothly
- Cards are properly aligned

**Test Data:**
- Expected skills: Java, Python, React, SQL, MySQL, etc.

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-006: Projects Section Functionality

**Test Case ID:** TC-006  
**Test Case Name:** Verify projects section with cards and links  
**Priority:** High  
**Type:** UI/Functional  

**Preconditions:**
- Application is running
- Projects section exists

**Test Steps:**
1. Navigate to Projects section
2. Verify section title: "Projects"
3. Count number of project cards displayed
4. For each project card:
   - Check title is displayed
   - Check description is readable
   - Verify tech stack tags are shown
   - Check GitHub link is present
   - Check demo link is present
5. Click on GitHub link for first project
6. Click on demo link for first project (if available)
7. Verify links open in new tabs

**Expected Results:**
- Projects display in card format
- Each card has title, description, tech stack, and links
- GitHub links work correctly
- Demo links work correctly (if provided)
- Links open in new browser tabs
- Cards are responsive and well-formatted

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-007: Contact Form Validation

**Test Case ID:** TC-007  
**Test Case Name:** Verify contact form functionality and validation  
**Priority:** High  
**Type:** Functional  

**Preconditions:**
- Application is running
- Contact section exists

**Test Steps:**
1. Navigate to Contact section
2. Verify contact form is displayed
3. Check form fields: Name, Email, Message
4. Leave all fields empty and click submit
5. Verify validation messages appear
6. Enter invalid email format
7. Verify email validation works
8. Fill all fields with valid data
9. Click submit button
10. Verify success message appears
11. Check form resets after submission

**Expected Results:**
- Contact form displays correctly
- Required field validation works
- Email format validation works
- Form submits successfully with valid data
- Success message displays
- Form clears after successful submission

**Test Data:**
- Valid name: "John Doe"
- Valid email: "john@example.com"
- Valid message: "Hello, I would like to connect with you."
- Invalid email: "invalid-email"

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-008: Footer Links

**Test Case ID:** TC-008  
**Test Case Name:** Verify footer social media links  
**Priority:** Medium  
**Type:** Functional  

**Preconditions:**
- Application is running
- Footer section exists

**Test Steps:**
1. Scroll to bottom of page
2. Verify footer is displayed
3. Check GitHub link is present
4. Check LinkedIn link is present
5. Check email link is present
6. Click GitHub link
7. Click LinkedIn link
8. Click email link
9. Verify copyright text is displayed

**Expected Results:**
- Footer displays at bottom of page
- All social links are present
- Links open in new tabs or appropriate applications
- Email link opens default email client
- Copyright text shows current year and name

**Test Data:**
- Expected links: GitHub, LinkedIn, Email (subharharini05@gmail.com)

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-009: Responsive Design - Desktop

**Test Case ID:** TC-009  
**Test Case Name:** Verify responsive design on desktop (1920x1080)  
**Priority:** High  
**Type:** UI  

**Preconditions:**
- Application is running
- Browser window set to 1920x1080

**Test Steps:**
1. Set browser window to 1920x1080
2. Check navbar layout
3. Check hero section layout
4. Check about section (side-by-side layout)
5. Check skills grid layout
6. Check projects grid layout
7. Check contact form layout
8. Verify all text is readable
9. Check button sizes and spacing

**Expected Results:**
- All sections display correctly
- Grid layouts show multiple columns
- Text is properly sized
- No horizontal scroll bars
- All interactive elements are accessible

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-010: Responsive Design - Tablet

**Test Case ID:** TC-010  
**Test Case Name:** Verify responsive design on tablet (768x1024)  
**Priority:** High  
**Type:** UI  

**Preconditions:**
- Application is running
- Browser window set to 768x1024

**Test Steps:**
1. Set browser window to 768x1024
2. Check navbar layout (may collapse)
3. Check hero section layout
4. Check about section (may stack vertically)
5. Check skills grid layout (fewer columns)
6. Check projects grid layout (fewer columns)
7. Check contact form layout
8. Verify touch targets are adequate size
9. Check text readability

**Expected Results:**
- Layout adapts to tablet screen
- Content remains readable
- Navigation still works
- Forms are usable on touch devices
- No content is cut off

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-011: Responsive Design - Mobile

**Test Case ID:** TC-011  
**Test Case Name:** Verify responsive design on mobile (375x667)  
**Priority:** High  
**Type:** UI  

**Preconditions:**
- Application is running
- Browser window set to 375x667

**Test Steps:**
1. Set browser window to 375x667
2. Check navbar (hamburger menu if implemented)
3. Check hero section (stacked layout)
4. Check about section (stacked vertically)
5. Check skills (single column or optimized grid)
6. Check projects (single column)
7. Check contact form (full width)
8. Test all interactive elements
9. Verify no horizontal scroll

**Expected Results:**
- Layout is fully responsive
- All content fits screen width
- Touch targets are appropriately sized
- Text remains readable
- Navigation works on mobile

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-012: Framer Motion Animations

**Test Case ID:** TC-012  
**Test Case Name:** Verify CSS animations and Framer Motion effects  
**Priority:** Medium  
**Type:** UI  

**Preconditions:**
- Application is running
- Framer Motion is properly installed

**Test Steps:**
1. Refresh the page
2. Observe initial load animations
3. Scroll through sections
4. Check for fade-in animations on scroll
5. Hover over interactive elements
6. Check button hover effects
7. Verify card hover animations
8. Check loading states (if any)

**Expected Results:**
- Smooth animations on page load
- Elements animate in as they come into view
- Hover effects work smoothly
- No jarring or broken animations
- Performance remains good with animations

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-013: Browser Compatibility

**Test Case ID:** TC-013  
**Test Case Name:** Verify cross-browser compatibility  
**Priority:** Medium  
**Type:** Compatibility  

**Preconditions:**
- Multiple browsers available
- Application is running

**Test Steps:**
1. Test in Google Chrome
2. Test in Mozilla Firefox
3. Test in Microsoft Edge
4. Test in Safari (if available)
5. Verify all features work in each browser
6. Check for any browser-specific issues

**Expected Results:**
- Application works in all modern browsers
- No major functionality differences
- Consistent appearance across browsers
- All interactive features work

**Test Data:**
- Browsers: Chrome, Firefox, Edge, Safari

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-014: Performance Testing

**Test Case ID:** TC-014  
**Test Case Name:** Verify application performance  
**Priority:** Medium  
**Type:** Performance  

**Preconditions:**
- Application is running
- Browser developer tools available

**Test Steps:**
1. Open browser developer tools
2. Check Network tab for load times
3. Check Console for errors
4. Test page refresh performance
5. Check memory usage
6. Verify smooth scrolling performance
7. Test animation performance

**Expected Results:**
- Page loads within 3 seconds
- No console errors
- Smooth scrolling and animations
- Reasonable memory usage
- No performance bottlenecks

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

### TC-015: Customization Verification

**Test Case ID:** TC-015  
**Test Case Name:** Verify customization capabilities  
**Priority:** Low  
**Type:** Functional  

**Preconditions:**
- Access to source code files
- Text editor available

**Test Steps:**
1. Open `src/components/Hero.jsx`
2. Modify name text
3. Save and check if changes reflect
4. Open `src/components/Skills.jsx`
5. Add a new skill
6. Save and verify new skill appears
7. Open `src/components/Projects.jsx`
8. Modify project data
9. Save and check project display
10. Replace profile image path
11. Verify image changes

**Expected Results:**
- Text changes reflect immediately (with hot reload)
- New skills appear correctly
- Project modifications work
- Image changes display properly
- All customization options work as documented

**Actual Results:**  
**Status:** [Pass/Fail]  
**Comments:**

---

## Test Summary Report

### Test Execution Summary
- **Total Test Cases:** 15
- **Passed:** [Count]
- **Failed:** [Count]
- **Blocked:** [Count]
- **Not Executed:** [Count]

### Defects Found
| Defect ID | Description | Severity | Status |
|-----------|-------------|----------|--------|
|           |             |          |        |

### Recommendations
1. [List any recommendations based on test results]

### Conclusion
[Overall assessment of the application quality]

---

## Sign-off
**Test Lead:** [Name]  
**Date:** [Date]  
**Approval:** [Approved/Rejected]