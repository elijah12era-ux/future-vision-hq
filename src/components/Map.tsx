const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        src="https://www.openstreetmap.org/export/embed.html?bbox=51.5290%2C25.2620%2C51.5330%2C25.2660&layer=mapnik&marker=25.2640%2C51.5310"
      ></iframe>
    </div>
  );
};

export default Map;
