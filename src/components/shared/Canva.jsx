export default function Canva({ link }) {
  return (
    <div className="h-screen">
    <iframe

      loading="lazy"
      className="w-full h-full"
      src={link}
      allowFullScreen
      title="Canva Presentation"
    />
  </div>
  )
}
