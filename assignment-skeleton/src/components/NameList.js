export default function NameList({userNames}) {

    return (
        <div>
            {userNames.map(name => {
                return <div key={name}>{name}</div>;
            })}
        </div >
    );
}