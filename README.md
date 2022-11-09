## JackedPlanner-ReactJs
A React + Firebase (Auth + Firestore + Hosting) web application, Jacked Planner is a gym planner with the most relevant workout data. It is a personal project designed  with Figma and implemented with React, Tailwind, Radix and Firebase.

#### If you want to access all the Figma's drafts used in this project, follow the link below:
#### <a href="https://www.figma.com/file/HJDXxkKYjJduLrUKtJRhaa/Jacked-Planner---React-Project?node-id=4%3A2"> >> Jacked Planner's Figma Project << </a>

### Project Progress:

    [ ] Projects Main Tasks
      [x] Figma App Design
      [x] All static Front-end Pages
      [ ] Make it Dynamic
      [ ] Make it Responsive

    [ ] Make it Dynamic
      [ ] Connect with Firebase services
        [ ] Firebase Hosting
        [ ] Firebase Auth
          [ ] E-mail + password
          [ ] Github Login Authentication
          [ ] Apple Login Authentication
          [ ] Google Login Authentication
          [ ] Facebook Login Authentication
        [ ] Firebase Firestore

      [ ] Login Page
        [ ] Create user modal
        [ ] Forgot password modal
        [ ] Get Pro button redirects to Stripe Page

      [ ] Dashboard Page
        [ ] Dashboard home
          [ ] Make it Dynamic
            [ ] Planners Controller
              [ ] Print Planners
              [ ] CRUD modal for Planners
            [ ] Calendar ( Training Schedule )
              [ ] Control Training Schedule
              [ ] Print the correct labels by day
            [ ] Workout Section 
              [ ] Print Exercises
              [ ] CRUD Modal for each exercise
            [ ] Personal Notes CRUD, day by day
            [ ] Exercise Plan CRUD 
            [ ] Get Pro Buttons redirects to Stripe Page (If you are not PRO)
        
        [ ] Dashboard notes
          [ ] Personal Notes History
            [ ] Recieve all notes saved ( Stack )
          [ ] Personal Notes CRUD
          [ ] Planners Exercise Plan CRUD
        
        [ ] Dashboard settings
          [ ] Account Settings
            [ ] Recieve all user data
            [ ] Add a button to check if its possible to change e-mail
            [ ] Double check to confirm user changes
          [ ] Password
            [ ] Reset passoword button, if confirm, it will send a Unic Code
            [ ] If the Unic Code is confirmed, password can be reseted.
            [ ] Submit only if password and confirm password are the same.
          [ ] Subscription Status