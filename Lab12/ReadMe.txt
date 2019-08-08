***Status Report for W3D3 Servlet Lesson***
I am starting this lab at 10:51pm. I spent the time since I got to the dorm in reading the lecture notes, reading and watching several web resources to complete my understanding for this lesson. I also repeated the servlet creation and deployment exercise a couple of time to get comfortable with it.

1. Calculator:
To make the calculator, I had to build the project twice. Something went wrong in the first time, and I didn't know what is was, but whenever I clicked the link on the home page that was supposed to start the servlet, nothing happened. In the second time, everything went well, except that the results page didn't show! After wasting more than an hour, I discovered that I mistakenly declared the inputs array of size 3 instead of 4! After correcting that bug, everything went well.

I added a CSS file to the project. The styles did not apply in case of exception, although the CSS file link had already been written then.

The project worked on the local server using this URL: http://localhost:8080/calculator_war_exploded/index.jsp

The servlet was called on this URL: http://localhost:8080/calculator_war_exploded/calc