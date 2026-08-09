import classes from "./styles/Summary.module.css";

export function Summary() {
  return (
    <div className={classes.content}>
      <p>
        Hi, I’m Jack! I enjoy building things that make life easier for users and developers alike. I love collaborating with others to solve real-world problems and create enjoyable user experiences. I'm adaptable and always eager to learn, which allows me to pick up new technologies quickly and dive into all kinds of projects with confidence.
      </p>

      <p>
        I’m currently a software developer at{" "}
        <span className={classes.highlight}>
          <a className={classes.link} href="#experience" target="_parent" rel="noreferrer">Midlands Choice</a>
        </span>
        , a regional preferred provider organization for healthcare and insurance, working as a full-stack developer on internal tools with{" "}
        <span className={classes.highlight}>Blazor & C#/.NET</span>
        . We're a small team, so I touch everything from frontend to backend, APIs and databases.
      </p>

      <p>
        Before that, I worked as a SQL developer at{" "}
        <span className={classes.highlight}>
          <a className={classes.link} href="#experience" target="_parent" rel="noreferrer">National Indemnity Company</a>
        </span>
        {" "} on the data warehouse team, where I built hands-on experience with{" "}
        <span className={classes.highlight}>SQL, Visual Basic & Microsoft Azure</span>.
        I also have a background in{" "}
        <span className={classes.highlight}>Java, Go, Python & React</span>.
      </p>

      <p>
        When I am not coding, I enjoy spending time with my family, golfing, snowboarding, playing guitar, solving puzzles, and learning new languages.
      </p>
    </div>
  )
}
