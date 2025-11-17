const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Building+No.+71+Zone+26+Street+504+Doha+Qatar&zoom=15"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
