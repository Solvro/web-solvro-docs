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
          title={`${props.name} ${props.surname}`}
        />
      </a>
      <p
        style={{
          margin: "0",
          fontSize: "0.8em",
          color: "var(--s1-color-black)",
          fontStyle: "italic",
        }}
      >
        {props.title}
      </p>
    </td>
  );
}
