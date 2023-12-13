export function Hero() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url(https://nordisk.eu/media/30069/nordisk_1_rico_glueck_4x5-jpg-3.jpg?mode=crop&anchor=center&height=700&rnd=133446256980000000);",
        backgroundRepeat: "no-repeat; background-size: cover; height: 700px;",
      }}
    >
      <span
        className="text-white text-4xl font-[Open Sans]"
        style={{
          lineHeight: 1.42857143,
        }}
      >
        STAY WARM
      </span>
      <span
        className="text-white text-6xl font-[Open Sans]"
        style={{
          lineHeight: 1.42857143,
        }}
      >
        with Nordisk
      </span>
      <div className="p-4">
        <button className="py-3 px-10 flex flex-col justify-center items-center bg-black">
          <span className="text-white text-2xl font-[Open Sans]">
            Dominate the cold
          </span>
        </button>
      </div>
    </div>
  );
}
