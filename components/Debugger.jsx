const Debugger = ({ data }) => {
	return (
    <>
      <pre>
        <code>{JSON.stringify(data, null, 4)}</code>
      </pre>
    </>
	);
};

export default Debugger;
