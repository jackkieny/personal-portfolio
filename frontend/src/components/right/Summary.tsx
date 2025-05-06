import classes from "./styles/Summary.module.css";

export function Summary() {
  return (
    <div className={classes.content}>
      <p>
        I’m driven by a desire to create efficient, scalable applications that simplify tasks for users and developers. I’m seeking a full-time role where I can collaborate with others to build solutions that address <span className={classes.highlight}>real-world challenges</span> and <span className={classes.highlight}>improve user experiences</span>. My adaptability and eagerness to learn help me quickly pick up new technologies and contribute to diverse projects.
      </p>

      <p>
        In the past, I worked as a developer at{" "}
        <span className={classes.highlight}>
          <a className={classes.link} href="#experience" target="_parent" rel="noreferrer">
            National Indemnity Company
          </a>
        </span>
        , where I was a part
        of the data warehouse team. Here I was able to utilize
        my technical skills and gained valuable experience utilizing{" "}
        <span className={classes.highlight}>SQL, C#, VB.Net, & Microsoft Azure</span>.
        Beyond this, I also have a background in development
        with <span className={classes.highlight}> Java, Go, Python, & React</span>.
      </p>

      <p>
        When I am not coding, I enjoy spending time with my family, snowboarding, playing guitar, solving puzzles, and{" "}
        <span>
          <a className={`${classes.link} ${classes.highlight}`} href="https://duolingo.com/profile/jackkieny" target="_blank" rel="noreferrer">
            learning new languages
          </a>
        </span>.
      </p>
    </div>
  )
}
