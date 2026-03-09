export default function Reference() {
  return (
    <div className="w-100 h-screen flex items-center flex-col">
        <h1 className="font-bold text-4xl">References</h1>
        <div style={{ backgroundColor: 'black', height: '3px', width: 'calc(100% - 30vw)' }}></div>
        <p>https://nextjs.org/docs/app/getting-started/installation</p>
        <p>https://motion.dev/docs/react</p>
        <p>https://www.w3schools.com/html/html_entities.asp</p>
        <p>https://motion.dev/docs/react-use-scroll</p>
        <p>https://cssgradient.io/</p>
        <p>https://nextjs.org/docs/app/api-reference/functions/use-router</p>
        <p>https://www.canva.com/ - LOGO</p><br />
        <h2 className="font-bold text-2xl" style={{ width: 'calc(100% - 40vw)' }}>I, Chase Olson, give written permission to use the images I myself have taken (all the images used in this website)/created using Canva (the logo in specific), in whatever way that it is being used currently within the content of this website.</h2><br />
        <a href="/WorkLog.pdf" className="font-bold text-xl underline text-blue-600">Work Log</a>
        <a href="/CopywriteChecklist.pdf" className="font-bold text-xl underline text-blue-600">Copywrite Checklist - (needs chapter advisor signature)</a>
    </div>
  );
}