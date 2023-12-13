export function Header() {
    return (
      <div
        className="w-full h-full flex justify-center items-center"
        style={{
          backgroundImage:
            "url(https://nordisk.eu/media/30069/nordisk_1_rico_glueck_4x5-jpg-3.jpg?mode=crop&anchor=center&height=700&rnd=133446256980000000);",
          backgroundRepeat: "no-repeat; background-size: cover; height: 700px;",
        }}
      >
        <button className="rounded p-2 flex justify-center items-center">
          <span>Klik her - Header</span>
        </button>
      </div>
    );
  }
  