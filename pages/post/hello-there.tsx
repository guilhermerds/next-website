import Image from "next/image";

export default function Hello(){
  return(
    <article>
      <h1>Hello There</h1>
      <Image 
        src="/post/hello-there/jcemer-road-ahead.jpg"
        width={640}
        height={427}
      />
    </article>
  )
}