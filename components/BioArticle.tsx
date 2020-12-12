import * as React from "react";

export function BioArticle()
{
    return <article>
        <h2>You wanna know the real me?</h2>
        <p>Much of my youth was spent in front of a computer screen. When my family got internet access, my CD-ROM collection was abandoned and I began playing freeware independent games. One such game was so exciting and inspirational to me that I reached out to its creator, Oddwarg. We soon developed a relationship where I would pester him for advice and code samples and he would deliver in a week or so. Through this mentorship and by leveraging a decompiler, I learned how to create computer games.</p>
        <p>Despite inadequate tooling and a lack of basic computer skills, my teenage years were some of my most prolific: I was able to produce complete games in a matter of days, or even hours! I also embarked on more ambitious game projects, including two large exploration platformer games and a minigame collection.</p>
        <p>Since then, my output has slowed substantially. After receiving my bachelor's in computer science, I began working at a healthcare software startup. There I formed a strong appreciation for modern web development. But my brain was exhausted by the job and I had to move on.</p>
        <p>Now I am a college instructor, encouraging learners to explore software development to realize their creative goals.</p>
        <style jsx>{`
h2 {
  font-size: 300%;
}

p {
  font-size: 133%;
  text-indent: 1em;
  text-align: justify;
}

p + p {
  margin-top: 0.5em;
}

article {
  width: 90%;
  margin: 0 auto;
}`}</style>
    </article>
}