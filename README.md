Overview
This dashboard was designed as an interactive and user-friendly platform for managing claims and disputes. It provides a step-by-step process to file claims, upload necessary documentation, and track progress, ensuring an intuitive experience for users.

Approach to Building the Dashboard
Component-Based Architecture:

Developed the project using React, creating modular and reusable components such as ClaimForm, Navigation, ProgressBar, and UploadSection.
Focused on separating logic and presentation for easier maintenance and scalability.
Styling and Responsiveness:

Designed the user interface with CSS to achieve a modern, professional look and feel.
Ensured the dashboard is fully responsive, offering a seamless experience across devices of different screen sizes.
Workflow Navigation:

Implemented a multi-step progress tracker to guide users through the claim-filing process. The steps include Preliminary, Your Details, KYG, Parties, Claim, Review, and Payment.
Document Handling:

Integrated features for uploading files such as contracts, agreements, and additional documentation, with validation for file type and size.
Real-Time Feedback:

Incorporated dynamic form elements that provide instant feedback, such as alerts for exceeding claim limits (e.g., 150% of Contract Value).
Challenges Faced and Solutions
File Upload Handling:

Challenge: Validating file type and size to ensure only valid files are uploaded.
Solution: Added client-side validation to prevent invalid uploads and notify users of errors immediately.
Progress Tracking:

Challenge: Keeping the progress bar synchronized with user actions.
Solution: Managed the progress state using React, dynamically updating it as users completed each step.
Responsive Design:

Challenge: Making the dashboard visually appealing and functional on all devices.
Solution: Used CSS flexbox and grid layouts to achieve adaptability across screen sizes.
State Management:

Challenge: Handling complex user inputs and multi-step form data.
Solution: Utilized React’s state management to efficiently manage form inputs and maintain a smooth user experience.
Data Flow Consistency:

Challenge: Ensuring seamless interaction between components for a consistent user experience.
Solution: Established clear data flow between components using props and context.
Assumptions
Users are familiar with the basic workflow of filing claims and uploading documents.
Uploaded documents are limited to PDF format with a maximum size of 2MB.
All necessary details (e.g., language, location, contract value) are readily available for users during the process.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
