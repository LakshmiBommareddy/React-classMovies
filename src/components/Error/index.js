import Alert from 'react-bootstrap/Alert';

const Error = (props)=> {
    return (
        <Alert variant={"danger"}>
          {props.message}
        </Alert>
    )
}

export default Error