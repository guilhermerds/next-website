export default function Time({staticDateString}){
  const dinamicDate = new Date();
  const dinamicDateString = dinamicDate.toUTCString();

  return (
    <main>
      <h1>Olá a hora atual é</h1>
      <p>{dinamicDateString}</p>
      <h1>A hora do servidor é</h1>
      <p>{staticDateString}</p>
    </main>
  );
}



export function getStaticProps(){
  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  return {
    props:{
      staticDateString,
    },
    revalidate: 100
  }
} 