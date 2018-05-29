<p align="center">
  <br><br>
  <img src="https://i.imgur.com/QXCdALM.png">
</p>








# **Description**

### Numberless is an application that allows a user to contribute on a monthly basis to a charity they choose. The user agrees to pledge a certain amount of money each month to a pool. Then, two charities are chosen, and the user can read info about each charity before casting their vote. The charity that gets the most votes receives 75% of the pool, while the other charity receives 25%, so no charity goes home empty-handed.



# **Client**

### http://numberlessapp.herokuapp.com

## User Components

* **Landing** - "/" or "/landing" - *IN DEVELOPMENT* - When a user hits the landing page, they are given the option to Learn More, Donate, or Log In. 

* **Info** - "/info" - *IN DEVELOPMENT* - The info page uses a series a slides to step a new user through the idea behind Numberless, as well as it's basic usage. Once the user has looked over the info, they are brought to the Donate page.

* **Donate** - "/pledge" - *IN DEVELOPMENT* - The donate page lets a new user select the amount they would like to contribute on a monthly basis, and they are then sent to the user creation page, with their selected donation passed to the user creator.

* **UserCreator** - "/newuser" - *IN DEVELOPMENT* - The user creation page allows a new user to sign up for an account using their email and a created password. They then sign up for a subscription for their pledge using the amount selected in the Donate component. Their CC information is collected and processed by Stripe, and a new user is created in the database with their email, password (encrypted with `bcrypt`), Stripe customer ID, donation amount, and a flag for whether or not they have voted on this month's charities. Once the user is created, they move on to the voting page.

* **Voting** - "/voting" - *IN DEVELOPMENT* - The voting page displays the name and logo for the two charities chosen that month. The user can pull up a description of each charity or cast their vote. Their vote is then added to that charity's vote count and the user is sent to the Thank You page.

* **ThankYou** * - "/thankyou" - *IN DEVELOPMENT* - The Thank You page thanks the user for voting for the charity they chose. If the user has already voted that month, this page is loaded in place of the Voting page after log in.

## Admin Components

### Coming Soon...

