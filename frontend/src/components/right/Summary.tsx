import classes from "./styles/Summary.module.css";

export function Summary() {
  return (
    <div className={classes.content}>
      <p>
        I am a software engineer with enthusiasm for
        building efficient and scalable applications.
        My passion for techonology and software development
        comes from my desire to make things faster and easier
        for both users and other developers.
      </p>

      <p>
        I am currently seeking a full-time role in the software engineering field.
        I am highly motivated by the potential of software to {" "}
        <span className={classes.highlight}>solve real-world problems</span>.
        I thrive in collaborative environments where I can work alongside
        other talented individuals to {" "}
        <span className={classes.highlight}>develop solutions </span>
        that enhance user experiences. My adaptability and eagerness to
        learn enable me to quickly grasp new technologies and contribute
        effectively to a variety of projects. 
      </p>

      <p>
        In the past, I worked as a developer at{" "}
        <span className={classes.highlight}>
          <a
            className={classes.link}
            href="#experience"
            target="_parent"
            rel="noreferrer"
          >
            National Indemnity Company
          </a>
        </span>
        , where I was a part
        of the data warehouse team. Here I was able to utilize
        my technical skills and gained valuable experience utilizing{" "}
        <span className={classes.highlight}>SQL, C#, VB.Net, & Microsoft Azure</span>.
        Beyond this, I also have a background in developement
        with <span className={classes.highlight}> Java, Python, Go, & React</span>.
      </p>

      <p>
        When I am not coding, I enjoy spending time with my family, snowboarding,
        playing video games with friends, solving puzzles, and{" "}
        <span>
          <a
            className={classes.link}
            href="https://duolingo.com/profile/jackkieny"
            target="_blank"
            rel="noreferrer"
          > learning new languages
          </a>
        </span>.
      </p>
    </div>
  )
}