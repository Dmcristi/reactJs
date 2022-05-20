export default function ColorNameList() {

    const colorUserNames = [
        {
            id: 1,
            name: "Christopher Washington",
            favoriteColor: "red",
        },
        {
            id: 2,
            name: "Ben Hayes",
            favoriteColor: "blue",
        },
        {
            id: 3,
            name: "Skye Roberts",
            favoriteColor: "yellow",
        },
        {
            id: 4,
            name: "Hugo Gray",
            favoriteColor: "violet",
        },
        {
            id: 5,
            name: "Eddie Lee",
            favoriteColor: "pink",
        },
        {
            id: 6,
            name: "Hannah Reid",
            favoriteColor: "green",
        },
    ];

    
    return(
        <div>
            {colorUserNames.map(user => {
              return <div className={user.favoriteColor} key={user.name}>
                  {user.name}
                  </div>;
            })}
        </div >
    );
}