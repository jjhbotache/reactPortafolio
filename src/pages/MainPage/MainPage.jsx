import { useEffect } from "react"

export default function MainPage() {
  useEffect(() => {
    // put the full screen when the mouse moves

    window.addEventListener('click', () => {
      document.documentElement.requestFullscreen().catch(console.error);
    });

    return () => {
      window.removeEventListener('click', () => {
        document.documentElement.requestFullscreen().catch(console.error);
      });
    };
  }, []);
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
    </div>
  )
};
