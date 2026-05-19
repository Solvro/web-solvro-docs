export function Contributor(props) {
  return (
    <td
      style={{
        textAlign: "center",
        verticalAlign: "middle",
        border: "none",
        minWidth: "120px",
      }}
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
          margin: "0.5em 0 0.2em 0",
          fontSize: "0.9em",
          color: "var(--s1-color-black)",
          fontWeight: "500",
        }}
      >
        {props.name} {props.surname}
      </p>
      <p
        style={{
          margin: "0",
          fontSize: "0.75em",
          color: "var(--s1-color-black)",
          fontStyle: "italic",
        }}
      >
        {props.title}
      </p>
    </td>
  );
}
