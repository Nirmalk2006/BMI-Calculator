*BMI Calculator (BMI CAL)

A simple **BMI (Body Mass Index) Calculator** built using **HTML, CSS, and JavaScript**.

* Features
- Takes **Height (CM)** and **Weight (Kg)** as input
- Calculates BMI using the formula:
  - 
    *BMI = weight / (height_in_meters²)**
  - Internally height is converted from cm to meters
- Displays the BMI value and category:
  - **Underweight**: BMI < 18.5
  - **Normal weight**: 18.5 ≤ BMI < 24.9
  - **Overweight**: 25 ≤ BMI < 29.9
  - **Obese**: BMI ≥ 29.9

* File Structure
- `Index1.html` - UI (form + results section)
- `Bmi.css` - Styling
- `Bmi.js` - BMI calculation + validation + category logic

* How to Run
1. Open `Index1.html` in your browser.
   - Double-click the file, or right-click → **Open with** → your browser.
2. Enter:
   - Height in **CM**
   - Weight in **Kg**
3. Click **Calculate**.
4. Results will appear on the page.

* Validation
If the height/weight is empty, negative, or not a number, the app shows an error message instead of calculating BMI.

