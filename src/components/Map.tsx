const Map = () => {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        className="border-0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=51.4800%2C25.2400%2C51.5800%2C25.3300&layer=mapnik&marker=25.2854%2C51.5310"
        title="Doha, Qatar Location Map"
      />
    </div>
  );
};

export default Map;
