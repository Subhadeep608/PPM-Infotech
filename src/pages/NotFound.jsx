import ButtonComponent from "../components/Button.jsx";

export default function NotFound() {
  return (
    <div style={styles.container} className="py-5">
      <div className="d-flex gx-3 mb-5 align-items-end justify-content-center">
        <img
          src="/media/images/404.gif"
          alt="Page Not Found"
          style={{ maxWidth: "400px", minHeight: "150px" }}
        />
        <div style={styles.notfoundcontent}>
          <h2 style={styles.code}>404</h2>
          <h3>Page Not Found</h3>
        </div>
      </div>

      <p>The page you are looking for doesn’t exist or has been moved.</p>

      <ButtonComponent path={"/"} name={"Go Back Home"} />
    </div>
  );
}

const styles = {
  container: {
    // height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  code: {
    fontSize: "120px",
    margin: "0",
    fontWeight: "bold",
  },
  notfoundcontent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
  },
};
