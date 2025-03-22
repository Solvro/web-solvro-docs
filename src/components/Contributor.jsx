/*
      <Contributor
        link="https://github.com/dawidlinek"
        name="Dawid"
        surname="Linek"
        title="Project Manager"
      />
*/

export function Contributor(props) {
  return (
    <td
      style={{ textAlign: "center", verticalAlign: "middle", border: "none" }}
    >
      <a href={props.link}>
        <img
          style={{
            borderRadius: "50%",
            margin: "0 auto",
            display: "block",
          }}
          src={`${props.link}.png`}
          width="50"
          height="50"
          alt={`${props.name} ${props.surname}`}
        />
      </a>
      <p style={{ fontSize: "0.8em", color: "#777", fontStyle: "italic" }}>
        {props.title}
      </p>
    </td>
  );
}
